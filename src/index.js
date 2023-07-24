const fs = require("fs");
require("dotenv").config();
const core = require('@actions/core');
const github = require('@actions/github');
const octokit = require("@octokit/core");

const IS_ENV_DEVELOPMENT = process.argv.includes('dev');

const customcommitauthornameparameter = "{{{commit_author_name}}}"; // commit.author.name
const customcommitauthoremailparameter = "{{{commit_author_email}}}"; // commit.author.email
const customcommitlinkparameter = "{{{commit_link}}}"; // commitlink
const customcommitmessageparameter = "{{{commit_message}}}"; // commit.message
const customcommitdateparameter = "{{{commit_date}}}"; // commit.author.date

const token = 					IS_ENV_DEVELOPMENT ? process.env.GH_ACCESS_TOKEN 			: core.getInput("GH_ACCESS_TOKEN");
const MAX_COMMITS = 			IS_ENV_DEVELOPMENT ? process.env.MAX_COMMITS				: core.getInput("MAX_COMMITS");
const COMMIT_SHOW_TYPE = 		IS_ENV_DEVELOPMENT ? process.env.COMMIT_SHOW_TYPE			: core.getInput("COMMIT_SHOW_TYPE");
const COMMIT_CUSTOM_LINE = 		IS_ENV_DEVELOPMENT ? process.env.COMMIT_CUSTOM_LINE			: core.getInput("COMMIT_CUSTOM_LINE");

const getcommitsusername = 		IS_ENV_DEVELOPMENT ? process.env.GET_COMMITS_USER_NAME		: core.getInput("GET_COMMITS_USER_NAME");
const getcommitsreponame = 		IS_ENV_DEVELOPMENT ? process.env.GET_COMMITS_REPO_NAME		: core.getInput("GET_COMMITS_REPO_NAME");
const getcommitsbranchname = 	IS_ENV_DEVELOPMENT ? process.env.GET_COMMITS_BRANCH_NAME	: core.getInput("GET_COMMITS_BRANCH_NAME");
const updatemdfileusername = 	IS_ENV_DEVELOPMENT ? process.env.UPDATE_MDFILE_USER_NAME	: core.getInput("UPDATE_MDFILE_USER_NAME");
const updatemdfilereponame = 	IS_ENV_DEVELOPMENT ? process.env.UPDATE_MDFILE_REPO_NAME	: core.getInput("UPDATE_MDFILE_REPO_NAME");
const updatemdfilebranchname = 	IS_ENV_DEVELOPMENT ? process.env.UPDATE_MDFILE_BRANCH_NAME	: core.getInput("UPDATE_MDFILE_BRANCH_NAME");
const updatemdfilename = 		IS_ENV_DEVELOPMENT ? process.env.UPDATE_MDFILE_NAME			: core.getInput("UPDATE_MDFILE_NAME");


if (!token){
	core.setFailed("TOKEN NOT DEFINED."); 
	return;
}

if (!getcommitsusername || !getcommitsreponame || !getcommitsbranchname || 
    !updatemdfileusername || !updatemdfilereponame || !updatemdfilebranchname || !updatemdfilename){
	core.setFailed("SOME INPUTS NOT DEFINED."); 
	return;
}

const client = new octokit.Octokit({ auth: token });

function Run(){
	getAllCommits();
}


async function getAllCommits() {
	try {
		const res = await client.request(`GET /repos/${getcommitsusername}/${getcommitsreponame}/commits`, {
			sha: getcommitsbranchname,
			per_page: MAX_COMMITS,
		});

		const data = res.data;

		getUpdateMDFile(data);

	} catch (error) {
		const errordetails = `getAllCommits:: ` + 
		 					 `GET_COMMITS_USER_NAME:${getcommitsusername} or ` +
					 		 `GET_COMMITS_REPO_NAME:${getcommitsreponame} or ` + 
					 		 `GET_COMMITS_BRANCH_NAME:${getcommitsbranchname}`; 
		core.setFailed(errordetails);
		core.setFailed(error); 
		return;
	}
}


async function getUpdateMDFile(data) {
	try {
		const res = await client.request(`GET /repos/${updatemdfileusername}/${updatemdfilereponame}/contents/${updatemdfilename}`, {
			branch : updatemdfilebranchname
		});
		
		const { path, sha, content, encoding } = res.data;
		const rawContent = Buffer.from(content, encoding).toString();

		let commitsstring = '';
		switch(COMMIT_SHOW_TYPE) {
			case 'LIST':
				commitsstring = prepareCommitsAsListLineString(data);
				break;
			case 'TABLE':
			    commitsstring = prepareCommitsAsTableLineString(data);
				break;
			case 'CUSTOM':
				commitsstring = prepareCommitsAsCustomLineString(data, COMMIT_CUSTOM_LINE);
				break;
			default:
				commitsstring = prepareCommitsAsListLineString(data);
		  }
		
		const checkContentContaions = rawContent.includes(commitsstring);
		if(checkContentContaions){
  			core.notice("INFO: MD FILE IS UP TO DATE. CANCELED.");
			return;
		}

		const startIndex = rawContent.indexOf("<!-- Latest_Commits_Start -->");
		const endIndex = rawContent.indexOf("<!-- Latest_Commits_End -->");

		const updatedline = `![updated](https://img.shields.io/badge/Updated-${encodeURIComponent(new Date())}-blue.svg)\n`;

		const updatedContent = `${startIndex === -1 ? rawContent : rawContent.slice(0, startIndex)}` +
		              "<!-- Latest_Commits_Start -->\n" +
					  updatedline +
					  commitsstring +
					  `${endIndex === -1 ? rawContent : rawContent.slice(endIndex)}`;

		commitNewMDFile(path, sha, encoding, updatedContent);

	} catch (error) {
		const errordetails = `getUpdatedMdFile:: ` + 
							 `UPDATE_MDFILE_USER_NAME:${updatemdfileusername} or ` +
							 `UPDATE_MDFILE_REPO_NAME:${updatemdfilereponame} or ` + 
							 `UPDATE_MDFILE_BRANCH_NAME:${updatemdfilebranchname} or ` + 
					 		 `UPDATE_MDFILE_NAME:${updatemdfilename}`; 
		core.setFailed(errordetails);
		core.setFailed(error); 
		return;
	}
}


async function commitNewMDFile(path, sha, encoding, updatedContent) {
	try {

		await client.request(`PUT /repos/${updatemdfileusername}/${updatemdfilereponame}/contents/${updatemdfilename}`, {
			branch : updatemdfilebranchname,
			message: `Update ${updatemdfilename}`,
			content: Buffer.from(updatedContent, "utf-8").toString(encoding),
			path,
			sha,
		});

		console.log("INFO: MD FILE UPDATED. COMPLETED.");

	} catch (err) {
		const errordetails = `commitNewMDFile:: ` + 
							 `UPDATE_MDFILE_USER_NAME:${updatemdfileusername} or ` +
							 `UPDATE_MDFILE_REPO_NAME:${updatemdfilereponame} or ` + 
							 `UPDATE_MDFILE_BRANCH_NAME:${updatemdfilebranchname} or ` + 
					 		 `UPDATE_MDFILE_NAME:${updatemdfilename}`; 
		core.setFailed(errordetails);
		core.setFailed(err); 
		return;
	}
}


function prepareCommitsAsListLineString(data){
	let result = "";
	for (let i = 0; i < data.length; i++) {
		const { commit } = data[i];

		const authorinfo = `[${commit.author.name}](mailto:${commit.author.email})`;

		const commiturlsplt = commit.url.split('/');
		const commiturlid = commiturlsplt[commiturlsplt.length - 1];
		const commitlink = `https://github.com/${getcommitsusername}/${getcommitsreponame}/commit/${commiturlid}`;
		
		const commitinfo = `[${commit.message}](${commitlink})`;

		const commitdate = `${commit.author.date}`;
		//const commitdateencoded = encodeURIComponent(commit.author.date.replaceAll('-', '--'));
		//const commitdate = `![date](https://img.shields.io/badge/-${commitdateencoded}-blue.svg)\n`;

		result += `- ${commitinfo} - ${authorinfo} - ${commitdate} \n`;
	}
	return result;
}


function prepareCommitsAsTableLineString(data){
	let result = "Name | Author | Date\n--- | --- | ---\n";

	for (let i = 0; i < data.length; i++) {
		const { commit } = data[i];

		const authorinfo = `[${commit.author.name}](mailto:${commit.author.email})`;

		const commiturlsplt = commit.url.split('/');
		const commiturlid = commiturlsplt[commiturlsplt.length - 1];
		const commitlink = `https://github.com/${getcommitsusername}/${getcommitsreponame}/commit/${commiturlid}`;
		
		const commitinfo = `[${commit.message}](${commitlink})`;

		const commitdate = `${commit.author.date}`;

		result += `${commitinfo} | ${authorinfo} | ${commitdate} \n`;
	}
	return result;
}


function prepareCommitsAsCustomLineString(data, customLineTemplate){
	let result = "";
	for (let i = 0; i < data.length; i++) {
		const { commit } = data[i];

		const commiturlsplt = commit.url.split('/');
		const commiturlid = commiturlsplt[commiturlsplt.length - 1];
		const commitlink = `https://github.com/${getcommitsusername}/${getcommitsreponame}/commit/${commiturlid}`;

		const newcustomline = customLineTemplate
			.replaceAll(customcommitauthornameparameter, commit.author.name)
			.replaceAll(customcommitauthoremailparameter, commit.author.email)
			.replaceAll(customcommitlinkparameter, commitlink)
			.replaceAll(customcommitmessageparameter, commit.message)
			.replaceAll(customcommitdateparameter, commit.author.date);

		result += `${newcustomline} \n`;	
	}
	return result;
}

Run();
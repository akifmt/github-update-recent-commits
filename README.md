# github-update-recent-commits

![Version](https://img.shields.io/github/v/release/AAAAA/AAAAA?color=blue)
![Contributors](https://img.shields.io/github/contributors/AAAAA/AAAAA?color=dark-green) ![Issues](https://img.shields.io/github/issues/AAAAA/AAAAA) [![License: MIT](https://img.shields.io/badge/license-MIT-blue)](#)

Updates MD file with the recent commits. The configuration must be on the default branch

## Live Preview
<!-- Latest_Commits_Start -->
![updated](https://img.shields.io/badge/Updated-Sun%20Jul%2023%202023%2022%3A31%3A03%20GMT%2B0000%20(Coordinated%20Universal%20Time)-blue.svg)
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/cf4b97e00a56a684750ce8e5042be0ddb4d01e30) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-23T22:03:40Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/ad2ce4a7fd275a09222391a00113a392c76b3771) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-23T21:31:23Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/6ee14ef19126ad6310822dffd55eaea3e4bb5f59) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-23T21:03:06Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/58f33eb2e8c6312479ca5f94532fb230bc33a253) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-23T20:31:13Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/64f0bb10bf0d3605bcd1d97e09d7ffa8c18cbaa7) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-23T20:23:51Z 
- [Create action.yaml](https://github.com/akifmt/github-update-recent-commits/commit/7ef84a7a6fcfe730d5313d868419aa9e3c99f358) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-23T20:17:19Z 
- [added project files](https://github.com/akifmt/github-update-recent-commits/commit/f5e89aeaa2ec5de3a31f9fb0df25a09e6ed56a45) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-23T20:09:58Z 
<!-- Latest_Commits_End -->

## Instructions
- Add comment to .md file
```
### Latest Commits
<!-- Latest_Commits_Start -->
<!-- Latest_Commits_End -->
```
- Create a workflowfile .github/workflows/action.yaml
```
name: Update READMEs

on:
  workflow_dispatch:
  schedule:
  - cron: '*/15 * * * *'
  
jobs:
  action:
    runs-on: ubuntu-latest
    steps:
      - uses: akifmt/github-update-recent-commits@main
        with:
          GH_ACCESS_TOKEN: ${{ secrets.GH_ACCESS_TOKEN }}
          MAX_COMMITS: 10
          COMMIT_SHOW_TYPE: LIST
          GET_COMMITS_USER_NAME: THIS_IS_USERNAME_FOR_GET_COMMITS
          GET_COMMITS_REPO_NAME: THIS_IS_REPONAME_FOR_GET_COMMITS
          GET_COMMITS_BRANCH_NAME: THIS_IS_BRANCHNAME_FOR_GET_COMMITS
          UPDATE_MDFILE_USER_NAME: THIS_IS_USERNAME_FOR_MDFILE
          UPDATE_MDFILE_REPO_NAME: THIS_IS_REPONAME_FOR_MDFILE
          UPDATE_MDFILE_BRANCH_NAME: THIS_IS_BRANCH_FOR_MDFILE
          UPDATE_MDFILE_NAME: THIS_IS_MDFILENAME
```
- This workflow works every 15 mins.
- Give your access token 'repo' permission.

## Development Environment:
- Create .env file:
```
GH_ACCESS_TOKEN=THIS_IS_YOUR_TOKEN
MAX_COMMITS=10
COMMIT_SHOW_TYPE=LIST
GET_COMMITS_USER_NAME=THIS_IS_USERNAME_FOR_GET_COMMITS
GET_COMMITS_REPO_NAME=THIS_IS_REPONAME_FOR_GET_COMMITS
GET_COMMITS_BRANCH_NAME=THIS_IS_BRANCHNAME_FOR_GET_COMMITS
UPDATE_MDFILE_USER_NAME=THIS_IS_USERNAME_FOR_MDFILE
UPDATE_MDFILE_REPO_NAME=THIS_IS_REPONAME_FOR_MDFILE
UPDATE_MDFILE_BRANCH_NAME=THIS_IS_BRANCH_FOR_MDFILE
UPDATE_MDFILE_NAME=THIS_IS_MDFILENAME
```
- Install npm packages:
	- ```npm install```
- Run:
	- ```npm run start```
- Prepare dist:
	- ```npm run build```

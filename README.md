# github-update-recent-commits

![Version](https://img.shields.io/github/v/release/AAAAA/AAAAA?color=blue)
![Contributors](https://img.shields.io/github/contributors/AAAAA/AAAAA?color=dark-green) ![Issues](https://img.shields.io/github/issues/AAAAA/AAAAA) [![License: MIT](https://img.shields.io/badge/license-MIT-blue)](#)

Updates MD file with the recent commits. The configuration must be on the default branch

## Live Preview
<!-- Latest_Commits_Start -->
![updated](https://img.shields.io/badge/Updated-Mon%20Jul%2024%202023%2022%3A31%3A17%20GMT%2B0000%20(Coordinated%20Universal%20Time)-blue.svg)
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/413ece0f6bc3a7258571faf7b8c7eb5290bbad8d) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T22:04:28Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/851270c609d0b0174350f5cdbdce8309af6e8cbc) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T21:31:29Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/63ae16639c7e022cf7703a0c4b87e9f323896692) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T21:08:06Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/e5f35834f44c7eca518dc11cd3f3e3bf7ea804fd) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T20:31:04Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/542b2d874f4a8b3ecfce13b94ed9e1dab283a8d0) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T20:04:07Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/816341f39e071740604990ad41245347637037a7) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T19:31:10Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/2ae7d46f9cbdec18f2de10d4bc5183364c2c5c4e) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T19:03:13Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/5b661f77e3d9960732f7c27980998dab655e597e) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T18:34:11Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/7ce234c14ba0db4979ab9da3ec581d29cb15d5e4) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T18:09:06Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/bac36b89b6bf4f6b31f8ed5c3d0e382623cc1ef4) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T17:31:03Z 
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

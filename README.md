# github-update-recent-commits

![Version](https://img.shields.io/github/v/release/AAAAA/AAAAA?color=blue)
![Contributors](https://img.shields.io/github/contributors/AAAAA/AAAAA?color=dark-green) ![Issues](https://img.shields.io/github/issues/AAAAA/AAAAA) [![License: MIT](https://img.shields.io/badge/license-MIT-blue)](#)

Updates MD file with the recent commits. The configuration must be on the default branch

## Live Preview
<!-- Latest_Commits_Start -->
![updated](https://img.shields.io/badge/Updated-Mon%20Jul%2024%202023%2011%3A03%3A53%20GMT%2B0000%20(Coordinated%20Universal%20Time)-blue.svg)
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/56a3e4c55a0dbcaa6b3c46b985e5f622174962cd) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T10:33:47Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/0a1eee71be8ff7bef69be6aba9628b85d66942e1) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T10:06:20Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/aabd8871ffda0567426360c89bee0efd96119f1a) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T09:31:26Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/e392b3899740c9beca98773ab0372cf78511c4d1) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T09:06:33Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/fd5d19bd5e0bc8cf110e8938e169617ba76ffd19) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T08:33:09Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/14e77f7afcbb07726d3fe8e204aea92ae57cbf75) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T08:08:48Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/5ff6b6dfad1552f04a52e91c2725624d8f72eb34) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T07:31:15Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/63983441a1c05e8f6a909586b147f767777ab729) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T07:06:09Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/9e773e2e651aa5b6190b7a06442cb2dda46cce14) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T06:34:17Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/ccdf0dd39d4f45f719f4904d68062c86018fa4c4) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T06:08:41Z 
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

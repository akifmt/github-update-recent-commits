# github-update-recent-commits

![Version](https://img.shields.io/github/v/release/AAAAA/AAAAA?color=blue)
![Contributors](https://img.shields.io/github/contributors/AAAAA/AAAAA?color=dark-green) ![Issues](https://img.shields.io/github/issues/AAAAA/AAAAA) [![License: MIT](https://img.shields.io/badge/license-MIT-blue)](#)

Updates MD file with the recent commits. The configuration must be on the default branch

## Live Preview
<!-- Latest_Commits_Start -->
![updated](https://img.shields.io/badge/Updated-Mon%20Jul%2024%202023%2016%3A35%3A30%20GMT%2B0000%20(Coordinated%20Universal%20Time)-blue.svg)
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/cd2b5973eb720b9d1c4e40b17bbd99554443caa6) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T16:07:13Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/9326365f78636f73b17e067c67fe466bc620d46e) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T15:31:25Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/787723f72cea561267fe403add336453da087199) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T15:06:19Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/f33cb059d2493834d0970ff5a0a549105609546f) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T14:31:59Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/7546eea1e038ed66ba30e8c475d7eab3ad317d65) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T14:05:14Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/3996b3e674381b78cbef2f656052818c6e33b35d) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T13:31:19Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/65fbaa2c1f496dac086136b8eb0dc3509985d81e) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T13:10:43Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/85a1481f9beabbf5c7e22c816fcc108855cfadbc) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T12:49:12Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/eb2e3d0257756cd3632fb58522ae32aec3d94f72) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T12:11:24Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/0030f5c92432e16d2504152f45cae802baa6bbcc) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T11:31:27Z 
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

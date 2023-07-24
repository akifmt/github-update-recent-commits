# github-update-recent-commits

![Version](https://img.shields.io/github/v/release/AAAAA/AAAAA?color=blue)
![Contributors](https://img.shields.io/github/contributors/AAAAA/AAAAA?color=dark-green) ![Issues](https://img.shields.io/github/issues/AAAAA/AAAAA) [![License: MIT](https://img.shields.io/badge/license-MIT-blue)](#)

Updates MD file with the recent commits. The configuration must be on the default branch

## Live Preview
<!-- Latest_Commits_Start -->
![updated](https://img.shields.io/badge/Updated-Mon%20Jul%2024%202023%2018%3A09%3A05%20GMT%2B0000%20(Coordinated%20Universal%20Time)-blue.svg)
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/bac36b89b6bf4f6b31f8ed5c3d0e382623cc1ef4) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T17:31:03Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/f0d2553fa83a90f6815afd60764a254c0d301b8f) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T17:04:33Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/90f71c688b42f4c597239029d6b5408faf261d90) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T16:35:30Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/cd2b5973eb720b9d1c4e40b17bbd99554443caa6) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T16:07:13Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/9326365f78636f73b17e067c67fe466bc620d46e) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T15:31:25Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/787723f72cea561267fe403add336453da087199) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T15:06:19Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/f33cb059d2493834d0970ff5a0a549105609546f) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T14:31:59Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/7546eea1e038ed66ba30e8c475d7eab3ad317d65) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T14:05:14Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/3996b3e674381b78cbef2f656052818c6e33b35d) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T13:31:19Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/65fbaa2c1f496dac086136b8eb0dc3509985d81e) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T13:10:43Z 
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

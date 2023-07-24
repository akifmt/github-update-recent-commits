# github-update-recent-commits

![Version](https://img.shields.io/github/v/release/AAAAA/AAAAA?color=blue)
![Contributors](https://img.shields.io/github/contributors/AAAAA/AAAAA?color=dark-green) ![Issues](https://img.shields.io/github/issues/AAAAA/AAAAA) [![License: MIT](https://img.shields.io/badge/license-MIT-blue)](#)

Updates MD file with the recent commits. The configuration must be on the default branch

## Live Preview
<!-- Latest_Commits_Start -->
![updated](https://img.shields.io/badge/Updated-Mon%20Jul%2024%202023%2023%3A34%3A26%20GMT%2B0000%20(Coordinated%20Universal%20Time)-blue.svg)
- [Update action.yaml](https://github.com/akifmt/github-update-recent-commits/commit/51266a9cd73ea8a8db9d8299a1af31d57743cf7a) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T23:34:03Z 
- [Update action.yaml](https://github.com/akifmt/github-update-recent-commits/commit/f1a638d5fec24cc97d4c4ba4e30339681a87d63f) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T23:29:50Z 
- [Update action.yaml](https://github.com/akifmt/github-update-recent-commits/commit/f6adaa75247cafec099237f2ceaa8a48ce3808ac) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T23:28:20Z 
- [added custom commit line](https://github.com/akifmt/github-update-recent-commits/commit/5c6c83692213a38c87b4d8ea03560fa7d4207321) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T23:21:24Z 
- [Update action.yaml](https://github.com/akifmt/github-update-recent-commits/commit/6a6fe4b1cefa0fba11cb52e94f726ac9c5e1199c) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T22:59:11Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/81df3d27c4179c6096c710beff1edc9b49ce745c) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T22:31:17Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/413ece0f6bc3a7258571faf7b8c7eb5290bbad8d) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T22:04:28Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/851270c609d0b0174350f5cdbdce8309af6e8cbc) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T21:31:29Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/63ae16639c7e022cf7703a0c4b87e9f323896692) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T21:08:06Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/e5f35834f44c7eca518dc11cd3f3e3bf7ea804fd) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T20:31:04Z 
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

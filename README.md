# github-update-recent-commits

![Version](https://img.shields.io/github/v/release/AAAAA/AAAAA?color=blue)
![Contributors](https://img.shields.io/github/contributors/AAAAA/AAAAA?color=dark-green) ![Issues](https://img.shields.io/github/issues/AAAAA/AAAAA) [![License: MIT](https://img.shields.io/badge/license-MIT-blue)](#)

Updates MD file with the recent commits. The configuration must be on the default branch

## Live Preview
<!-- Latest_Commits_Start -->
![updated](https://img.shields.io/badge/Updated-Mon%20Jul%2024%202023%2005%3A31%3A20%20GMT%2B0000%20(Coordinated%20Universal%20Time)-blue.svg)
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/84dce3ae0942434a0ddc6f2dd7a8edff4009fa25) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T05:06:13Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/2bfa946068bed32f091ad79e4fd2f3b4177662bf) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T04:32:03Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/760a3845706ac2355294acc0d4f8be171ee7d79a) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T04:07:09Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/74a5d495bcc53885bba5a08ff80ce95f7648015e) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T03:31:21Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/5ebd469ddbbd8b469d4e310d1b43e9579065049f) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T03:06:45Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/b0f714cb76ffa5dd17ae2530e6d2770162302f42) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T02:44:12Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/b12ab7fef0377c2849f41347965386cb74032a43) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T02:01:29Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/67bd899c7e7e83e0954a0e5476b68d6fb5efd642) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-24T00:35:53Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/42469feec1e91210847cd551ade5e4b2af489b9a) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-23T23:31:06Z 
- [Update README.md](https://github.com/akifmt/github-update-recent-commits/commit/ff46b1a3dcad89c73afbefac2d6e4c679fea0560) - [M. Akif Tokatlioglu](mailto:akifmt@gmail.com) - 2023-07-23T23:04:24Z 
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

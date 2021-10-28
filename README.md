# GitHubPullAction
This action will trigger ReleaseNotesHub to generate create notes for the given project and version.

## Helpful links
- https://support.releasenoteshub.com/article/show/126524-how-do-i-setup-a-connection-for-github
- https://support.releasenoteshub.com/article/show/126516-how-to-configure-a-project-query-for-github
- https://support.releasenoteshub.com/article/show/108978-how-do-i-trigger-a-pull-request-for-github

## Inputs

## `rnh-apikey`

**Required** Your ReleaseNotesHub API Key.

## `rnh-projectid`

**Required** The Unique Identifier (GUID) for your ReleaseNotesHub Project.

## `rnh-release-version`

**Required** The release version .e.g. 12.11.5.1, 12.11.5-beta.

## `rnh-release-name`

The release name.

## `rnh-release-description`

The release description.

## `rnh-release-publish`

Set release to Published. Default `"false"`.

## `rnh-release-ignoreifexists`

If release exists in ReleaseNotesHub and value is true, then do nothing, otherwise update release. Default `"false"`.

## `rnh-release-createonnotfound`

If release does not exist in ReleaseNotesHub and value is true, then create release, otherwise do nothing. Default `"true"`.


## Example usage

uses: actions/GitHubPullAction@v1
with:
  rnh-apikey: 'API-c977da13-149c-4f4b-b5d5-bd7d1491853d'
  rnh-projectid: '42d3a80d-b9b7-4998-bef0-1af9f79dfd4c'  
  rnh-release-version: '12.11.5.1'
  rnh-release-publish: 'true'          

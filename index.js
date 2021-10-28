const fetch = require('node-fetch');
const core = require('@actions/core');
const github = require('@actions/github');

/**
 * @typedef GenerationOptions
 * @type {object}
 * @property {string} [RnhApiKey]
 * @property {string} [ProjectId]
 * @property {string} [ReleaseVersion] 
 * @property {string} [ReleaseName]
 * @property {string} [ReleaseDescription]
 * @property {boolean} [Publish]
 * @property {boolean} [IgnoreIfExists]
 * @property {boolean} [CreateOnNotFound]
 */

 function readString(key) {
    return core.getInput(key);
  }
  
  function readBoolean(key) {
    const val = readString(key);
    return val === true || val === 'true';
  }
  
  /** @type {GenerationOptions} */
  const options = {
    RnhApiKey: readString('rnh-apikey'),
    ProjectId: readString('rnh-projectid'),    
    ReleaseVersion: readString('rnh-release-version'),
    ReleaseName: readString('rnh-release-name'),
    ReleaseDescription: readString('rnh-release-description'),
    Publish: readBoolean('rnh-release-publish'),
    IgnoreIfExists: readBoolean('rnh-release-ignoreifexists'),
    CreateOnNotFound: readBoolean('rnh-release-createonnotfound'),
  };

try {
  console.log(`ReleaseNotesHub Pull Request Triggered`);

  var body = {
      'version': '' + options.ReleaseVersion + '',
      'name': '' +  options.ReleaseName + '',
      'description': '' +  options.ReleaseDescription + '',
      'publish': '' +  options.Publish + '',
      'ignoreIfExists': '' +  options.IgnoreIfExists + '',    
      'createOnNotFound': '' +  options.CreateOnNotFound + ''                
    };

  var response = await fetch('https://rnh-prod-web-as-test.azurewebsites.net/api/pull/PullVersion/' + options.ProjectId, {
      method: 'post',
      body: JSON.stringify(body),
      headers: {'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'ApiKey ' + options.RnhApiKey}
  });
  var data = await response.stringify();
  console.log(data);  

} catch (error) {
  core.setFailed(error.message);
}
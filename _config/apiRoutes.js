const baseApiUrl = `${env('BASE_URL', 'http://localhost:8000')}/api`;
const moduleName = 'icurrency';
const moduleVersion = 'v1';
const urlBase = `${baseApiUrl}/${moduleName}/${moduleVersion}`;

export default {
  currencies : `${urlBase}/currencies`,
}

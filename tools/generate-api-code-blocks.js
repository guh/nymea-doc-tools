const fs = require('fs');
const hljs = require('highlight.js');
hljs.registerLanguage('json', require('highlight.js/lib/languages/json'));

function getApiItems(object) {
  return Object.entries(object).map(([key, value]) => {
    // console.log('value', value);
    // console.log('code', value, highlight(getCode(value)));
    return {
      id: createIdFromKey(key),
      label: key,
      link: `#${createIdFromKey(key)}`,
      // code: getCode(value),
      code: highlight(getCode(value)),
      description: value.hasOwnProperty('description') ? value.description.replace('\n', '<br />') : '',
      deprecated: value.hasOwnProperty('deprecated') ? value.deprecated : '',
      params: value.hasOwnProperty('params') ? highlight(JSON.stringify(value.params, null, 2)) : '',
      returns: value.hasOwnProperty('returns') ? highlight(JSON.stringify(value.returns, null, 2)) : '',
      references: getReferences([], value).sort(sortLabel),
      deprecations: getDeprecations(value)
    };
  });
}

function highlight(code, language = 'json') {
  console.log('highlight', code, hljs.highlight(language, code).value, escape_curlies(hljs.highlight(language, code).value));
  return escape_curlies(hljs.highlight(language, code).value);
}

// function getCodeItems(object) {
//   return Object.entries(object).map(([,value]) => {
//     return getCode(value);
//   });
// }

function createIdFromKey(key) {
  return key[0].toLowerCase() + key.slice(1, key.length).replace('.', '').replace(/[A-Z][a-z]/g, (letter) => `-${letter}`).toLowerCase();
}

function getCode(value) {
  // console.log('getCode', value);
  if (Array.isArray(value)) {
    return `[\n${value.map((item) => `  "${item}"`).join(',\n')}\n]`;
  } else if (Object.prototype.toString.call(value) === '[object Object]') {
    // add anchor tags to $ref: attributes
    Object.entries(value).forEach(([propertyKey, propertyValue]) => {
      if (Object.prototype.toString.call(propertyValue) === '[object Object]') {
        Object.entries(propertyValue).forEach(([objectKey, objectValue]) => {
          if (typeof objectValue === 'string' && objectValue.indexOf('$ref:') !== -1) {
            propertyValue[objectKey] = `<a href="#${createIdFromKey(objectKey)}">${objectValue}</a>`;
          } else {
            propertyValue[objectKey] = objectValue;
          }
        });
        value[propertyKey] = propertyValue;
      } else if (typeof propertyValue === 'string' && propertyValue.indexOf('$ref:') !== -1) {
        value[propertyKey] = `<a href="#${createIdFromKey(propertyValue)}">${propertyValue}</a>`;
      } else {
        value[propertyKey] = propertyValue;
      }
    });
    return JSON.stringify(value, null, 2);
  }
  return '';
}

function getReferences(refs, value) {
  if (typeof value === 'string') {
    if (value.includes('$ref:')) {
      const key = value.replace('$ref:', '');
      refs = [
        ...refs,
        { 
          label: key,
          link: `#${createIdFromKey(key)}`
        }
      ];
    }
  } else if (Array.isArray(value)) {
    value.forEach((valueItem) => {
      refs = getReferences(refs, valueItem);
    });
  } else if (Object.prototype.toString.call(value) === '[object Object]') {
    Object.values(value).forEach((valueItem) => {
      refs = getReferences(refs, valueItem);
    });
  }
  return refs;
}

function getDeprecations(value) {
  if (Object.prototype.toString.call(value) === '[object Object]') {
    return Object.entries(value)
      .filter(([propertyKey]) => propertyKey.substring(0, 2) === 'd:')
      .map(([propertyKey]) => propertyKey.substring(2, propertyKey.length))
      .sort()
      .join(', ');
  }
  return [];
}

function sortLabel({ label: labelA }, { label: labelB }) {
  return labelA.localeCompare(labelB);
}

function getJsonrpcApiConfig() {
  const data = fs.readFileSync('./jsonrpc-api-config.json', 'utf8');

  try {
    return JSON.parse(data);
  } catch (error) {
    console.log('Cannot parse file.', error);
  }
}

function escape_curlies(str) {
  return str
    .replace(/[{}]/g, c => ({ '{': '&#123;', '}': '&#125;' }[c]))
    .replace(/\"\&lt\;/g, '<')
    .replace(/\&lt\;/g, '<')
    .replace(/\&gt\;\"/g, '>')
    .replace(/\&gt\;/g, '>')
    .replace(/href\=\\\"(.*)\"/g, (url) => 'href="' + url + '"');
    // .replace(/[]/g, c => ({ '\&lt\;': '<', '\&gt\;': '>' }[c]));
}

function getApiData() {
  const config = getJsonrpcApiConfig();
  // TODO: replace hardcoded path
  const sourceFilePath = config.outputdir + 'documentation/resources/api/api.js';
  const destenationFilePath = config.outputdir + 'documentation/resources/api/api-highlighted.js';
  const apiData = fs.readFileSync(sourceFilePath, 'utf8').replace('export const api =', '');

  try {
    const api = JSON.parse(apiData);
    // console.log('api', api);

    const highlightedApi = {};
    
    Object.entries(api).forEach(([key, value]) => {
      // if (key === 'flags') {
      //   console.log('key, value', key, value, getApiItems(value));
      // }
      
      // console.log('key, highlightedApi', key, highlightedApi);

      if (key === 'version') {
        highlightedApi[key] = value;
      } else {
        highlightedApi[key] = getApiItems(value);
      }
    }, {});
    const fileContents = 'export const api = ' + JSON.stringify(highlightedApi, null, 2);

    fs.writeFileSync(destenationFilePath, fileContents, 'utf-8');

    // const methods = getCodeItems(api.methods);
    // const methods = getApiItems(api.methods);
    // console.log('methods', methods);



    // const codeBlocks = methods.map(({ code }) => {
    //   // const codeBlock = hljs.highlightAuto(code).value;
    //   const codeBlock = '<pre class="code"><code class="language-json hljs">' + escape_curlies(hljs.highlight('json', code).value) + '</code></pre>';
    //   console.log('codeBlock', codeBlock);
    //   return codeBlock;
    // });
    // console.log('codeBlocks', codeBlocks);



    // const notifications = getApiItems(api.notifications);
    // console.log('notifications', notifications);

    // const types = getApiItems(api.types);
    // console.log('types', types);

    // const enums = getApiItems(api.enums);
    // console.log('enums', enums);

    // const flags = getApiItems(api.flags);
    // console.log('flags', flags);
  } catch (error) {
    console.log('Cannot parse file.', error);
  }
}

getApiData();

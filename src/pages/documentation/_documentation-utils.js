
import hljs from 'highlight.js/lib/core';
import asciidoc from 'highlight.js/lib/languages/asciidoc';
import bash from 'highlight.js/lib/languages/bash';
import cLike from 'highlight.js/lib/languages/c-like';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import python from 'highlight.js/lib/languages/python';
import qml from 'highlight.js/lib/languages/qml';
import xml from 'highlight.js/lib/languages/xml';

export function initCodeBlocks(element) {
  console.log('initCodeBlocks');

  hljs.registerLanguage('asciidoc', asciidoc);
  hljs.registerLanguage('bash', bash);
  hljs.registerLanguage('cLike', cLike);
  hljs.registerLanguage('javascript', javascript);
  hljs.registerLanguage('json', json);
  hljs.registerLanguage('python', python);
  hljs.registerLanguage('qml', qml);
  hljs.registerLanguage('xml', xml);

  const codeBlocks = element ? element.querySelectorAll('pre > code') : document.querySelectorAll('pre > code');

  codeBlocks.forEach((codeBlock) => {
    console.log('initCodeBlocks - codeBlock', codeBlock);
    hljs.highlightBlock(codeBlock);
  });
}

import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';
import del from 'del';
import * as path from 'path';
import { mdsvex } from 'mdsvex';
import autoPreprocess from 'svelte-preprocess';
import ts from '@rollup/plugin-typescript';
import typescript from 'typescript';
import injectProcessEnv from 'rollup-plugin-inject-process-env';

import hljs from 'highlight.js/lib/core';
import asciidoc from 'highlight.js/lib/languages/asciidoc';
import bash from 'highlight.js/lib/languages/bash';
import cLike from 'highlight.js/lib/languages/c-like';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import python from 'highlight.js/lib/languages/python';
import qml from 'highlight.js/lib/languages/qml';
import xml from 'highlight.js/lib/languages/xml';

import frontmatterParser from '@github-docs/frontmatter';
import pluginJson from '@rollup/plugin-json';

import image from 'svelte-image';

const staticDir = 'static'
const distDir = 'dist'
const buildDir = `${distDir}/build`
const production = !process.env.ROLLUP_WATCH;
const bundling = process.env.BUNDLING || production ? 'dynamic' : 'bundle';
const shouldPrerender = (typeof process.env.PRERENDER !== 'undefined') ? process.env.PRERENDER : !!production;

del.sync(distDir + '/**');

const escape_curlies = (str) => str.replace(/[{}]/g, c => ({ '{': '&#123;', '}': '&#125;' }[c]));

function createConfig({ output, inlineDynamicImports, plugins = [] }) {
  hljs.debugMode();
  hljs.registerLanguage('asciidoc', asciidoc);
  hljs.registerLanguage('bash', bash);
  hljs.registerLanguage('cLike', cLike);
  hljs.registerLanguage('javascript', javascript);
  hljs.registerLanguage('json', json);
  hljs.registerLanguage('python', python);
  hljs.registerLanguage('qml', qml);
  hljs.registerLanguage('xml', xml);

  const transform = inlineDynamicImports ? bundledTransform : dynamicTransform;

  return {
    inlineDynamicImports,
    input: `src/main.ts`,
    output: {
      name: 'app',
      sourcemap: true,
      ...output
    },
    plugins: [
      copy({
        targets: [
          { src: staticDir + '/**/!(__index.html)', dest: distDir },
          { src: `${staticDir}/__index.html`, dest: distDir, rename: '__app.html', transform },
          { src: '.htaccess', dest: distDir },
        ], copyOnce: true
      }),
      pluginJson(),
      svelte({
        extensions: ['.svelte', '.md'],
        preprocess: [
          autoPreprocess(),
          mdsvex({
            extension: '.md',
//             frontmatter: {
//               // marker: '-',
//               parse(frontmatter, messages) {
//                 const schema = {
//                   properties: {
//                     id: {
//                       type: 'string',
//                       required: true,
//                       allowEmpty: false
//                     },
//                     title: {
//                       type: 'string',
//                       required: true,
//                       allowEmpty: false
//                     },
//                     type: {
//                       type: 'string',
//                       required: true,
//                       allowEmpty: false
//                     },
//                     beforeId: {
//                       type: 'string',
//                       required: true,
//                       allowEmpty: false
//                     }
//                   }
//                 }

//                 let markdown;
//                 if (frontmatter !== undefined) {
// markdown = `---
//   ${frontmatter}
// ---`
//                 } else {
//   markdown = `---
// ---`
//                 }

//                 try {
//                   // return toml.parse(frontmatter);
//                   const { data, errors } = frontmatterParser(markdown);
//                   console.log('data', data);

//                   if (data === undefined) {
//                     console.log('frontmatter', frontmatter);
//                   }

//                   return data ? data : false;
//                 } catch (e) {
//                   messages.push(
//                     "Parsing error on line " +
//                       e.line +
//                       ", column " +
//                       e.column +
//                       ": " +
//                       e.message
//                   );
//                 }
//               },
//             },
            highlight: {
              highlighter: (code, language) => {
                const codeBlock = language
                  ? hljs.highlight(language, code, true).value
                  : hljs.highlightAuto(code, ['asciidoc', 'bash', 'cLike', 'javascript', 'json', 'python', 'qml', 'xml']).value;
                return `<pre class="code"><code class="language-${language} hljs">${escape_curlies(codeBlock)}</code></pre>`;
              },
            },
            layout: path.join(__dirname, './src/pages/documentation/_markdown.svelte'),
          }),
          // image({
          //   optimizeAll: true, // optimize all images discovered in img tags

          //   // Case insensitive. Only files whose extension exist in this array will be
          //   // processed by the <img> tag (assuming `optimizeAll` above is true). Empty
          //   // the array to allow all extensions to be processed. However, only jpegs and
          //   // pngs are explicitly supported.
          //   imgTagExtensions: ['jpg', 'jpeg', 'png'],

          //   // Same as the above, except that this array applies to the Image Component.
          //   // If the images passed to your image component are unknown, it might be a
          //   // good idea to populate this array.
          //   componentExtensions: [],

          //   inlineBelow: 10000, // inline all images in img tags below 10kb

          //   compressionLevel: 8, // png quality level

          //   quality: 70, // jpeg/webp quality level

          //   tagName: "Image", // default component name

          //   sizes: [1200, 800, 1200], // array of sizes for srcset in pixels

          //   // array of screen size breakpoints at which sizes above will be applied
          //   breakpoints: [375, 768, 1024],

          //   outputDir: "g/",

          //   // should be ./static for Sapper and ./public for plain Svelte projects
          //   publicDir: "./static/",

          //   placeholder: "blur", // or "blur",

          //   // WebP options [sharp docs](https://sharp.pixelplumbing.com/en/stable/api-output/#webp)
          //   webpOptions: {
          //     quality: 75,
          //     lossless: false,
          //     force: true
          //   },

          //   webp: true,

          //   // Potrace options for SVG placeholder
          //   trace: {
          //     background: "#fff",
          //     color: "#002fa7",
          //     threshold: 120
          //   },

          //   // Wheter to download and optimize remote images loaded from a url
          //   optimizeRemote: true
          // })
        ],
        // enable run-time checks when not in production
        dev: !production,
        hydratable: true,
        // we'll extract any component CSS out into
        // a separate file — better for performance
        css: css => {
          css.write(`${buildDir}/bundle.css`);
        }
      }),
      // copy({
      //   targets: [{ src: 'static/g', dest: 'dist' }],
      // }),
      ts({
        typescript,
        sourceMap: !production
      }),
      // If you have external dependencies installed from
      // npm, you'll most likely need these plugins. In
      // some cases you'll need additional configuration —
      // consult the documentation for details:
      // https://github.com/rollup/rollup-plugin-commonjs
      resolve({
        browser: true,
        dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
      }),
      commonjs(),

      injectProcessEnv({ 
        NODE_ENV: process.env.NODE_ENV,
        GDPR_COOKIE_DOMAIN: process.env.NODE_ENV === 'production' ? 'nymea.io' : 'localhost'
     }),

      // If we're building for production (npm run build
      // instead of npm run dev), minify
      production && terser(),

      ...plugins
    ],
    watch: {
      clearScreen: false
    }
  }
}


const bundledConfig = {
  inlineDynamicImports: true,
  output: {
    format: 'iife',
    file: `${buildDir}/bundle.js`
  },
  plugins: [
    !production && serve(),
    !production && livereload(distDir)
  ]
}

const dynamicConfig = {
  inlineDynamicImports: false,
  output: {
    format: 'esm',
    dir: buildDir
  },
  plugins: [
    !production && livereload(distDir),
  ]
}


const configs = [createConfig(bundledConfig)]
if (bundling === 'dynamic')
  configs.push(createConfig(dynamicConfig))
if (shouldPrerender) [...configs].pop().plugins.push(prerender())
export default configs


function serve() {
  let started = false;
  return {
    writeBundle() {
      if (!started) {
        started = true;
        require('child_process').spawn('npm', ['run', 'serve'], {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true
        });
      }
    }
  };
}

function prerender() {
  return {
    writeBundle() {
      if (shouldPrerender) {
        require('child_process').spawn('npm', ['run', 'export'], {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true
        });
      }
    }
  }
}

function bundledTransform(contents) {
  return contents.toString().replace('__SCRIPT__', `
	<script defer src="/build/bundle.js" ></script>
	`)
}

function dynamicTransform(contents) {
  return contents.toString().replace('__SCRIPT__', `
	<script type="module" defer src="https://unpkg.com/dimport@1.0.0/dist/index.mjs?module" data-main="/build/main.js"></script>
	<script nomodule defer src="https://unpkg.com/dimport/nomodule" data-main="/build/main.js"></script>
	`)
}

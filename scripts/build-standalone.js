/* eslint-disable no-console */
const path = require('path');
const execa = require('execa');

const outDir = path.join('dist');

function buildStandalone() {
  console.log('Creating "standalone" version - building stylable files');
  console.log('running stc...');

  // https://github.com/wix/stylable/tree/master/packages/cli#usage
  execa.sync(
    'stc',
    [
      `--outDir=${path.join(outDir, 'src')}`,
      '--srcDir=src',
      '--cssFilename=[filename].global.css',
      '--compat',
      '--cjs',
      '--css',
      '--icr',
      '--optimized',
    ],
    { stdio: 'inherit' },
  );

  console.log('✔︎');
}

buildStandalone();
#!/usr/bin/env node
import { Command } from 'commander';
// eslint-disable-next-line import/extensions
import genDiff from '../src/index.js';

const program = new Command();
program
  .name('gendiff')
  .version('0.1.0')
  .description('Compares two configuration files and shows a differense.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2, options) => {
    // eslint-disable-next-line no-console
    console.log(genDiff(filepath1, filepath2, options.format));
  });
program.parse();

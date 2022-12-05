#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();
program
  .name('gendiff')
  .version('0')
  .description('Compares two configuration files and shows a differense.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format');
program.parse();

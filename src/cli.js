#!/usr/bin/env node

import nwdiff from 'nwdiff'
import yargs from 'yargs'
import stdinEquals from '.'

const argv = yargs
  .usage('Usage: $0 <expected> [options]')
  .boolean('q')
  .alias('q', 'quiet')
  .describe('q', 'do not pipe stdin to stdout')
  .help('h')
  .alias('h', 'help')
  .argv

const { help, quiet, _: [ expected ] } = argv

if (help) {
  process.exit(0)
}

stdinEquals(expected).then(({ equal, stdin }) => {
  if (!equal) {
    const diff = nwdiff(stdin, expected)

    console.error(`stdin did not equal expected. diff:\n<<<\n${diff}\n>>>`)
  }

  // TODO: Figure out how to stream stdin to stdout but still get it for above.
  // TODO: Figure out how to include colors.
  if (!quiet) {
    console.log(stdin)
  }

  process.exit(equal ? 0 : 1)
})

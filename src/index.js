import 'babel-polyfill'
import getStdin from 'get-stdin'

const stdinEquals = async expected =>
  // TODO: Could it be faster to use a streaming equality check?
  getStdin().then(stdin => ({
    equal: stdin === expected,
    stdin
  }))

export default stdinEquals

var succinct = require('../')

var tree = JSON.parse(process.argv.slice(2).join(' '))
var bits = succinct.encode(tree)
console.log(bits.join(''))

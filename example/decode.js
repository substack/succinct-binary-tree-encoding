var succinct = require('../')

var bits = process.argv[2].split('')
var tree = succinct.decode(bits)
console.log(JSON.stringify(tree))

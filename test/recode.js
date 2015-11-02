var succinct = require('../')
var test = require('tape')

test('recode', function (t) {
  t.plan(1)
  var bits = [1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0]
  var tree = succinct.decode(bits)
  t.deepEqual(succinct.encode(tree), bits, 're-encoded')
})

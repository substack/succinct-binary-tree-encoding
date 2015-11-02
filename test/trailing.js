var succinct = require('../')
var test = require('tape')

test('trailing', function (t) {
  t.plan(3)
  var bits0 = [1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1]
  var bits1 = [1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0]
  var bits2 = [1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0]
  var bits3 = [1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0]
  var tree = succinct.decode(bits0)
  t.deepEqual(succinct.decode(bits1), tree)
  t.deepEqual(succinct.decode(bits2), tree)
  t.deepEqual(succinct.decode(bits3), tree)
})

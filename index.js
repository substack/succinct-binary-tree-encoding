exports.encode = function (tree) {
  var bits = []
  ;(function next (node) {
    if (!node) bits.push(0)
    else {
      bits.push(1)
      next(node.left)
      next(node.right)
    }
  })(tree)
  for (var i = bits.length-1; i>=0 && !bits[i]; i--) bits.pop()
  return bits
}

exports.decode = function (bits) {
  var i = 0
  return (function next () {
    if (bits[i++]) {
      return {
        left: next(),
        right: next()
      }
    } else return null
  })()
}

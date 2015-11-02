exports.encode = function (tree) {
  var bits = []
  ;(function next (node) {
    if (!node) bits.push(0)
    else {
      bits.push(1)
      encode(node.left)
      encode(node.right)
    }
  })(tree)
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

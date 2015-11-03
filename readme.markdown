# succinct-binary-tree-encoding

succinctly represent the structure of a binary tree

# example

encode a binary tree to a bit field:

``` js
var succinct = require('succinct-binary-tree-encoding')

var tree = JSON.parse(process.argv.slice(2).join(' '))
var bits = succinct.encode(tree)
console.log(bits.join(''))
```

```
$ node encode.js '{"left":null,"right":{"left":{"left":null,"right":{"left":null,"right":null}}}}'
101101
```

decode a bit field to a binary tree:

``` js
var succinct = require('succinct-binary-tree-encoding')

var tree = JSON.parse(process.argv.slice(2).join(' '))
var bits = succinct.decode(tree)
console.log(bits.join(''))
```

```
$ node decode.js 101101
{"left":null,"right":{"left":{"left":null,"right":{"left":null,"right":null}},"right":null}}
```

# api

``` js
var succinct = require('succinct-binary-tree-encoding')
```

## var bits = succinct.encode(tree)

Generate an array of `bits` from a nested object `tree` with `left` and `right`
properties.

## var tree = succinct.decode(bits)

Generate a nested `tree` object with left and right properties from an array of
`bits`.

# install

```
npm install succinct-binary-tree-encoding
```

# license

MIT

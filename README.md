# AssignNoConflict

[![Build Status](https://travis-ci.org/acatl/assign-no-conflict.svg?branch=master)](https://travis-ci.org/acatl/assign-no-conflict) [![Coverage Status](https://coveralls.io/repos/github/acatl/assign-no-conflict/badge.svg?branch=master)](https://coveralls.io/github/acatl/assign-no-conflict?branch=master)

> Safely merges Objects without overriding keys

### Installing

```
npm install assign-no-conflict
```

### Why?

There are times... yes there can be times... where you only want to merge objects if they do not have keys that override each other. 

### Prerequisites

ES5 Support (node 6.4.0 or higher)

## Usage

Merging 3 objects that have **no conflicts** together:

```js
const assign = require('assign-no-conflict')

const abc = assign({
  a: 1
}, {
  b: 2
}, {
  c: 3
})

const conflictState = typeof abc === 'string'
  ? `key "${abc}" already exists`
  : 'no conflicts'

console.log(conflictState)
// no conflicts
console.log(abc)
/*
{
  a: 1,
  b: 2,
  c: 3,
}
*/
```

Merging 3 objects that **have conflicts**:

```js
const assign = require('assign-no-conflict')

const abc = assign({
  a: 1
}, {
  b: 2
}, {
  a: 3 // repeated key
})

const conflictState = typeof abc === 'string'
  ? `key "${abc}" already exists`
  : 'no conflicts'

console.log(conflictState)
// key "a" already exists
console.log(abc)
// a
```

## What about Object.assign?

This module mainly has two differences with Object.assign:

- If **no conflicts**, it will return a **new** Object, no need to pass an empty object at the beginning. 
- If there are conflicts it will return the key that introduces the conflict. You can check the return type, if its a string, then you can tell there are conflicts and which is the key that caused it.

**NOTE**: This module does not deep merge Objects.

### Heads up 

Only use this module if you specifically need to check for conflicting keys, otherwise you might be better off using good old Object.assign. 

## Running the tests

To run tests

```bash
npm run install
npm run test
```

## Versioning

Im using [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/acatl/assign-no-conflict/tags). 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

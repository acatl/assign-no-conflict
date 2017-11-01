/* eslint-env jest */

const assign = require('./assign-no-conflict')

describe('keysFoundInTarget', () => {
  test('It should return key if found', () => {
    const source = {
      a: 1,
      b: 1
    }

    expect(assign.keysFoundInTarget(['b'], source)).toEqual('b')
  })

  test('It should return false if not found', () => {
    const source = {
      a: 1,
      b: 1
    }

    expect(assign.keysFoundInTarget(['c'], source)).toEqual(false)
  })
})

describe('merge', () => {
  test('It should return error if keys have conflicts', () => {
    const sources = [
      {
        a: 1,
        b: 1
      },
      {
        c: 1
      },
      {
        a: 1
      }
    ]

    expect(assign.assignNoConflict.apply(null, sources)).toBe('a')
  })

  test('It should merge objects', () => {
    const sources = [
      {
        a: 1
      },
      {
        b: 1
      },
      {
        c: 1
      }
    ]

    expect(assign.assignNoConflict.apply(null, sources)).toEqual({
      a: 1,
      b: 1,
      c: 1
    })
  })
})

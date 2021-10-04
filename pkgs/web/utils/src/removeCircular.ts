export function removeCircular() {
  let m = new Map(),
    v = new Map(),
    init = null

  return function (field, value) {
    let p = m.get(this) + (Array.isArray(this) ? `[${field}]` : '.' + field)
    let isComplex = value === Object(value)

    if (isComplex) m.set(value, p)

    let pp = v.get(value) || ''
    let path = p.replace(/undefined\.\.?/, '')
    let val = pp ? `#REF:${pp[0] == '[' ? '$' : '$.'}${pp}` : value

    !init ? (init = value) : val === init ? (val = '#REF:$') : 0
    if (!pp && isComplex) v.set(value, path)

    return val
  }
}

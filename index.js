module.exports = conditionator

const DEFAULTS = {
  log: false,
  operator: '&&',
  comparator: '===',
};

function conditionator (obj, options = {}) {
  const opts = Object.assign({}, DEFAULTS, options);
  const arr = [];
  const map = {};
  for (const key in obj) {
    arr.push(obj[key]);
    map[arr.length - 1] = key;
  }
  const prod = cartesianProduct(arr);
  const lines = [];
  prod.forEach((arr) => {
    const line = arr.map((val, idx) => {
      const key = map[idx];
      return `${key} ${opts.comparator} ${JSON.stringify(jsonValue(val))}`;
    });
    lines.push(line);
  });
  let out = '';
  lines.forEach((line, idx) => {
    const cond = `${(idx === 0) ? '' : ' else '}if (${line.join(` ${opts.operator} `)}) {\n\n}`;
    out += cond;
  })
  if (opts.log) {
    const numvars = Object.keys(obj).length;
    const numlines = lines.length;
    console.log(`conditionator: ${numvars} variables yielded ${numlines} conditions`);
  }
  return out;
}

function jsonValue (val) {
  if (typeof val !== 'string') {
    return val;
  }
  try {
    return JSON.parse(val);
  } catch (e) {
    return val;
  }
}

function cartesianProduct (arr, out = [[]]) {
  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];
    let temp = [];
    for (let j = 0; j < out.length; j++) {
      for (let k = 0; k < curr.length; k++) {
        temp.push(out[j].concat(curr[k]));
      }
    }
    out = temp;
  }
  return out;
}

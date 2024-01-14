export default function orderByProps(obj, keys) {
  const result = [];
  const restResult = [];
  
  for (let i = 0; i < keys.length; i++) {
    result.push({ key: keys[i], value: obj[keys[i]] });
    delete obj[keys[i]];
  }

  for (let prop in obj) {
    restResult.push({ key: prop, value: obj[prop] });
  }

  restResult.sort((a, b) => {
    if (a.key >= b.key) {
      return 1;
    } else {
      return -1;
    }
  });

  result.push(...restResult);

  return result;
}
const { foo } = { foo: 'bar' };

/* istanbul ignore next */
export default (foo, ...args) => {
  console.log(foo, ...args);
}



const objectWithoutProperties = (obj, keys) => {
  var target = {};
  for (var i in obj) {
    /* istanbul ignore if */
    if (keys.indexOf(i) >= 0) continue;

    /* istanbul ignore if */
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}


const baz = objectWithoutProperties(foo, [])
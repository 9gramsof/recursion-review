// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

//pseudocode

//if not above, stringify

//if arr
  //make result arr
  //recursion
  //return result arr

//if obj
  //make result obj
  //recursion
  //return result obj

var stringifyJSON = function(obj) {
  if (Array.isArray(obj)) {
    var result = [];
    for (var i = 0; i < obj.length; i++) {
      result.push(stringifyJSON(obj[i]));
    }
    return '[' + result.join(',') + ']';
  }

  if (typeof obj === 'object' && obj !== null) {
    var objresult = [];
    for (var key in obj) {
      if (typeof obj[key] === 'function' || obj[key] === undefined) {
        continue;
      }
      objresult.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    return '{' + objresult.join(',') + '}';
  }

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  return '' + obj;

};

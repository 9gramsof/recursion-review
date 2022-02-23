// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  //pure recursion strategy

  //check to see if current node contains class name
    //push to result
  //if the current node has children
    //iterate over the children - recursion
      //if children contain classname
        //concat to result

  var result = [];

  var node = node || document.body;
  var listOfClasses = node.classList;
  if (hasClass(node, className)) {
    result.push(node);
  }

  var kids = node.childNodes;
  if (kids) {
    for (var i = 0; i < kids.length; i++) {
      var currentKid = kids[i];
      result = result.concat(getElementsByClassName(className, currentKid));
    }
  }

  return result;
};

var hasClass = function(node, className) {
  if (node.classList !== undefined && node.classList.contains(className)) {
    return true;
  }
  return false;
};

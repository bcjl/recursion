// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var matchedEle = [];
  
  for(var i = 0; i < $('.' + className).length; i++){
  	matchedEle.push($('.' + className)[i]);
  }

  return matchedEle;

};

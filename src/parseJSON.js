// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  var output;
  var insides = json.substring(1, json.length - 1);

  var firstchar = json.substring(0,1);
  var lastchar = json.substring(json.length - 1);

  if(firstchar === "\"" && lastchar === "\""){
    output = "" + insides;
  }

  else if(firstchar === "[" && lastchar === "]"){
  	output = [];
    var arrayInsides = insides.split(",");
    if(json.length > 2){
      for(var i = 0; i < arrayInsides.length; i++){
        output.push(parseJSON(arrayInsides[i].trim()));
      }
    }
  	// if(json.substring(json.length - 1) !== "]"){
  	// 	throw new SyntaxError();
  	// }
  }

  else if(firstchar === "{" && lastchar === "}"){
  	output = {};
    // var startpos = insides.indexOf("\"");
    // var endpos = insides.indexOf("\"", startpos + 1);

    // var key = json.substring(startpos + 1, endpos);
    // json = json.substring(endpos + 1);

    var propPairs = insides.split(",");
    if (json.length > 2){
      for(var i = 0; i < propPairs.length; i++){
        var keyvalArr = propPairs[i].split(":");
        var key = keyvalArr[0].trim();
        key = key.substring(1, key.length - 1);
        console.log(keyvalArr[0]);
        console.log(key);
        var val = keyvalArr[1].trim();

        output[key] = parseJSON(val);
      }
    }
  	// if(json.substring(json.length - 1) !== "}"){
  	// 	throw new SyntaxError();
  	// }
  }

  else{
    output = eval(json);
  }

  return output;
};


// var RemoveQuotes = function(string){
//   var output = "";
//   for (var i = 0; i < string.length; i++){
//     if(){

//     }
//   }
// }
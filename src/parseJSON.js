// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  var output;
  var insides = json.substring(1, json.length - 1);

  var firstchar = json.substring(0,1);
  var lastchar = json.substring(json.length - 1);

  if(firstchar === "\"" && lastchar === "\""){
    output = "";
    var flag = false;

    for(var i = 0; i < insides.length; i++){
      if (insides[i] !== "\\" || flag){
      output += insides[i];
      flag = false;
      }
      else if(insides[i] === "\\"){
        flag = true;
      }
    }
  }

  else if(firstchar === "[" && lastchar === "]"){
  	output = [];
    var arrayInsides = insides.split(",");
    if(json.length > 2){
      for(var i = 0; i < arrayInsides.length; i++){
        output.push(parseJSON(arrayInsides[i].trim()));
      }
    }
  }

  else if(firstchar === "{" && lastchar === "}"){
  	output = {};
    insides += ","

    while(insides.length > 5){
    //This gets the key and removes it from the inside of "insides"
      var keystart = insides.indexOf("\"");
      var keyend = insides.indexOf(":");
      var key = insides.substring(keystart + 1, keyend - 1);
      insides = insides.substring(keyend + 1).trim();


      var valueend = insides.indexOf(",");
      var value = insides.substring(0, valueend);
      insides = insides.substring(valueend).trim();

      output[key] = parseJSON(value);
    }



    // var propPairs = insides.split(",");
    // if (json.length > 2){
    //   for(var i = 0; i < propPairs.length; i++){
    //     var keyvalArr = propPairs[i].split(":");
    //     var key = keyvalArr[0].trim();
    //     key = key.substring(1, key.length - 1);
    //     console.log(keyvalArr[0]);
    //     console.log(key);
    //     var val = keyvalArr[1].trim();

    //     output[key] = parseJSON(val);
    //   }
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
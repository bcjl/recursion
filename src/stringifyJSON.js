// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var output = "";

  if (typeof obj === "object" && Array.isArray(obj)){
  	output = "[";
  	for (var i = 0; i < obj.length; i++){
  		output = output + stringifyJSON(obj[i]) + ",";
  	}

  	if (obj.length > 0){
  	output = output.substring(0, output.length - 1);
  		}
  	output += "]"
  }

  else if (typeof obj === "object" && obj !== null){
  	var keys = Object.keys(obj);
  	if (keys.length === 0){
  		output = "{}"
  	}
  	else {
  		  		output = "{";
  		for(var i = 0; i < keys.length; i++){
  			if(typeof obj[keys[i]] !== "function" && typeof obj[keys[i]] !== "undefined"){
  			output += stringifyJSON(keys[i]) + ":" + stringifyJSON(obj[keys[i]]) + ",";
  			}
  		}

  		if (output.length > 2){
  			output = output.substring(0, output.length - 1);
  		}
  		output += "}";
  	}
  }

  else if (typeof obj === "string"){
  	output = "\"" + obj + "\"";
  }

  else {
  	output += "" + obj;
  }

  return output;
};

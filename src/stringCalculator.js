var stringCalculator = function(string){
  if (string.length === 0){
    return(0);
  }
  else {
        var stringSplitted = string.split(",");
        if (stringSplitted.length === 1) {
          return(parseInt(string));
        }
        else{
          return(parseInt(stringSplitted[0]) + parseInt(stringSplitted[1]))
        }
        
  }
};

module.exports = stringCalculator;
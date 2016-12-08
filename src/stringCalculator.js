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
          var total = 0;
          for (var i=0; i < stringSplitted.length; i++){
            total = total + parseInt(stringSplitted[i]);
          }
          return total;
        }
  }
};

module.exports = stringCalculator;
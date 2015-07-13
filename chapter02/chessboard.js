// Still trying to solve this one without looking at the key.  Going to look at key, enter answer and study that.

var size = 8;
var board = "";
  for (var y = 0; y < size; y++) {  
  for (var x = 0; x < size; x++) {    
    if ((x + y) % 2 == 0)      board += " ";    
      else      board += "#";  }  board += "\n";}console.log(board);

Chess.start = function () {

};
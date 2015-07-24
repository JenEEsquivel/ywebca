// Still trying to solve this one without looking at the key.  Going to look at key, enter answer and study that.



Chess.start = function (n) {
  var sz = n || 8;
  var chessboard = "";
  for (var a = 0; a < sz; a++) {  
    for (var b = 0; b < sz; b++) {    
    if ((a + b) % 2 == 0)
    chessboard += " ";    
    else chessboard += "#";  
    }  
    chessboard += "\n";
  }
    return chessboard;
};


/* this is your second solution, solving the ReadMe extra challenge. Finally,
there is an extra credit test, above:
var sz = n || 8;
  var chessboard = "";
  for (var a = 0; a < sz; a++) {  
    for (var b = 0; b < sz; b++) {    
    if ((a + b) % 2 == 0)
    chessboard += " ";    
    else chessboard += "#";  
    }  
    chessboard += "\n";
  }
    return chessboard;
*/




/* this was your first solution after finishing the exercise only from
"Eloquent Javascript" at the end of chapter two. Next step above includes extra 
challenges from the readme file.
var sz = 8;
  var chessboard = "";
  for (var a = 0; a < sz; a++) {  
    for (var b = 0; b < sz; b++) {    
    if ((a + b) % 2 == 0)
    chessboard += " ";    
    else chessboard += "#";  
    }  
    chessboard += "\n";
  }
    console.log(chessboard);
*/
Fizz.buzz = function () {
  for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n);
  }
};
//I understand this up to the || part.  That was taken from sandbox.  I will work on this more.

//for (var n = 1; n <= 100; n++) {
  //var output = "";
  //if (n % 3 == 0)
    //output += "Fizz";
  //if (n % 5 == 0)
    //output += "Buzz";
  //console.log(output || n);


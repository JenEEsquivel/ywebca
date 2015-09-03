var reverseArray = function ( arr ) {
  var result = [];
  for ( var i = 0; i < arr.length; i++ )
    result.unshift( arr[i] );
  return result;

};


var reverseArrayInPlace = function ( arr ) {
  for ( var i = 0; < arr.length  / 2; i++) {}
  return arr;
};









/***********************    DANGER ZONE DO NOT CROSS    ***********************/
if (typeof Exer === 'undefined') Exer = {};

if (typeof reverseArray !== 'undefined') Exer.reverseArray = reverseArray;
if (typeof reverseArrayInPlace !== 'undefined') Exer.reverseArrayInPlace = reverseArrayInPlace;
if (typeof reverseArrayRecur !== 'undefined') Exer.reverseArrayRecur = reverseArrayRecur;

if (typeof module === 'undefined') module = {};
module.exports = Exer;

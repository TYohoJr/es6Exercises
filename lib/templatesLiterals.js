"use strict";

//in the past we've used single or double quotes for strings. It works fine, but injecting variables blows. Look at this below

var num = 3;
var backpack = "Jansport";
var name = "Jens";

//comment out lines 8 and 9
//var example = "my name is: " + name + ", and I have " + num " + " pieces of pizza in my " + backpack + "backpack." My favorite quote
//is 'tis a far, far cruel world.'
console.log(example);

//step 1: make line 9 work by modifying lines 7-9.
//it probably took a while. Because this sucks. 

//in es6, they added template literals to make your life much easier. 

//look up the docs on template literals and rewrite the example variable using them
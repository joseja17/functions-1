//========= DO NOT TOUCH THIS CODE =========//
var testing = {
    a: hey ? true : false,
    b: hi ? true : false,
    c: hello ? true : false,
}
//============= CONTINUE BELOW =============//
//+++++++++ Start Here! All problems are below. +++++++++//

///////////////////Problem 1//////////////////
// Create a function called hey, using a function
// declaration. hey should take in a 'name' parameter, and return
// the string "Hey " plus the name.

 function hey(name){
  return "Hey " + name;
}
hey("Anna");



///////////////////Problem 2//////////////////
//Create a function called hi, using a function
//expression (without ES6). hi should take in a 'name' parameter, and return
//the string "Hi " plus the name.

var hi = function(name){
return "Hi " + name; 
}



///////////////////Problem 3//////////////////
//Create a function called hello, using an arrow
//function (use var). hello should take in a 'name' parameter, and return
//the string "Hello " plus the name.

var hello = (name) => {return "Hello " + name}


///////////////////Problem 4//////////////////
//Create a function named fun, which takes in
//a single string parameter, and returns that string
//with "!!!!!" added to the end of it. Then, call fun 
//with the string "Yay" and save the result of the function to a 
//variable called funTimes.

function fun (string){
  return string + "!!!!!"
}
var funTimes = fun('Yay');


///////////////////Problem 5//////////////////
//Finish the function 'climb' below. Use the built-in local
//variable arguments, within the function climb. 

//If you do not know what the arguments variable is,
//check out: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

//Note: DO NOT alter the function climb to take in parameters.
//The purpose of this exercise is to use the local arguments
//variable within the function scope.

//If there is a string at arguments[0], and false
//at arguments[1], return "On belay?". 

//If there is a string at arguments[0], and true at arguments[1],
//return "Climbing!"

//Otherwise, return "Let's set up the belay rope before we climb."

function climb(){
  //What is the arguments variable? Try calling climb
  //and passing in ("Ellie", true) and see what is logged
  //to the console.
  console.log('function climb\'s local arguments var - ', arguments)
 
  if (typeof arguments[0] === 'string'  && arguments[1]===false){
    return "On belay?"
  }else if(typeof arguments[0] === 'string' &&arguments[1]===true){
    return "Climbing!"
  }else if(typeof arguments[0]=== 'string'){
    return "On belay?"
  }
  else{
    return "Let's set up the belay rope before we climb."
  }
}
climb("Ellie", true)
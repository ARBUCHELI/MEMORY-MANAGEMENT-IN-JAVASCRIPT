/*Declaring Variables on the Global Object*/

function helloWorld() {
  // below greeting does not use a `let`, `const` or `var` statement to
  // declare the variable, so it's added to the global object after we
  // call `helloWorld()`
   greeting = "Hello world"; 
 
// This also leaks into the global `this`
  this.greeting2 = "Goodbye!"; 
}
 
helloWorld();

/*This type of issue is easy to avoid as long as you remember scoping rules and always use an appropriate let orconst statement to 
assign your variables with the correct block scoping. You can also use strict-mode to help keep your global scope clean. Since 
global variables are available from the root, they never get garbage collected.*/
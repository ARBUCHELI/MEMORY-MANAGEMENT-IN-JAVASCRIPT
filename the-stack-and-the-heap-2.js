let object = new Object();
let object2 = object;
object.greeting = "Hello, world";
 
console.log(object2); // { greeting: 'Hello, world' }
/*In the example, object and object2 are pointing to the same object in memory in the heap, but with different variables that are 
saved in the stack.*/
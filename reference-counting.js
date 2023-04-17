/*As we learned about in the stack and heap section, all of the objects you make in your program have references and memory 
allocated to them.

Reference-counting makes use of the references to variables that live on the stack. When an object is created, it’s reference 
count is one. If you make a second variable point to that object, the reference count is two. If a function makes use of an 
object, the reference count is increased by one. Usually, inner elements from function calls are garbage collected when a 
function is done executing, unless the inner elements are still referenced.*/

let obj = new Object(); // reference count of one
let obj2 = obj; // reference count of two
obj2 = "string"; // obj has a reference count of one again
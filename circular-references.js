/*Circular References
If two objects have pointers that reference each other, a circular reference is formed.*/

let first = new Object();
let second = new Object();
 
first.aProperty = second;
second.anotherProperty = first;

/*As you can see in the example, the first object has a property aProperty that references the second object and the second object 
has a property anotherProperty that references the first object. Since these two objects reference each other through their 
properties, they’ll each wind up having a reference count of two. Circular references can cause memory leaks due to the 
reference-counting algorithm. Luckily, the mark-and-sweep algorithm — used by most browsers — handles that shortcoming.*/
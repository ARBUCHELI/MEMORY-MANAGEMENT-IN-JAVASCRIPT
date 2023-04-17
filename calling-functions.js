/*In the example, we created an aaliyah object, which JavaScript saved in the heap with a reference to it in the stack. Then we 
called the nameObjectModification() function and assigned it to the variable sarah.

When we created the sarah object using the nameObjectModification() function, we used a copy of the reference to the aaliyah 
object. In the function call, the object we use and create still references the aaliyah object, even though we’re assigning the 
return value to a new variable. So in the end, both variables reference the same object, and the name is updated on both the 
aaliyah object and the new sarah object.*/

let aaliyah = {
    name: "Aaliyah"
}
 
function nameObjectModification(obj, name) {
    obj.name = name;
    return obj;
}
 
let sarah = nameObjectModification(aaliyah, "Sarah");
 
console.log(aaliyah); // { name: 'Sarah' }
console.log(sarah); // { name: 'Sarah' }


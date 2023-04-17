/*In the example, the monument variable is reassigned to the string value “Golden Gate Bridge,” so the name property can be 
garbage collected as it has a reference count of zero.

This type of algorithm does have some shortcomings. We’ll look into the concept of circular references in the memory leak section 
below and how reference counting doesn’t always cut it.*/

let monument = {
    name: "Eiffel Tower"
 };
 monument = "Golden Gate Bridge";
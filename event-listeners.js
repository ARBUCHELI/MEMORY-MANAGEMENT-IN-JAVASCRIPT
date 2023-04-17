 /*Another scenario to watch out for is the existence of anonymous functions when you use event listeners:*/

const lotsOfMemory = "Imagine this is a value that uses a lot of memory"
 
document.addEventListener('scroll', function() {
 cb(lotsOfMemory);
});

/*In the example, the lotsOfMemory string will be stored in the closure of the anonymous function that is called on scroll events.*/
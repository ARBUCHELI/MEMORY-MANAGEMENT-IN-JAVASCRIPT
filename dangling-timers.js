/*You might be used to using setInterval() or other browser APIs in your code. Sometimes, you can wind up with a dangling timer or
 callback that references nodes or memory that your program doesn’t need anymore. If the handler is still active, anything it is 
 referencing can’t be garbage collected.*/

function cb() {
    let count = 0;
 
    return function() {
         count++;
         console.log(count);
    }
}
 
setInterval(cb(), 1000);
/*In the example, the counter variable is in the closure when you call cb(). When we use the setInterval() callback, it repeatedly 
calls that function cb() every 1000ms (set by the second argument). If you don’t assign the setInterval() call to a variable, 
you’ll get a memory leak if you can’t clear the interval later.*/


/*The second snippet shows how you can assign a variable the value of calling setInterval() so that you can clear it when the time 
comes.*/
let intervalID = setInterval(cb(), 100);
clearInterval(intervalID); // You can use a DOM element to call `clearInterval()`
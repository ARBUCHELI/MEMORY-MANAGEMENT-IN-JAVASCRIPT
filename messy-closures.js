/*Memory Leaks

When memory that’s no longer needed by a program persists, it is called a memory leak. The memory should be returned to the pool 
of free memory for future objects. A memory leak can happen when garbage collection fails to find an object that lost its 
connection to the root object, or when objects grow in size and are referenced by other objects. When this happens, it can be the 
source of slowdowns, crashes, and high latency in your code.

You can mostly avoid memory issues in your program if you have awareness of what causes memory problems in the first place. There 
are a few common scenarios that cause memory leaks in code. For now, learn what causes them so you can avoid them. Later, we’ll 
learn how to debug memory leaks using browser tools.*/


function bigObjMaker() {
    const bigObj = {};
    return (key, val) => {
        bigObj[key] = val;
        console.log(bigObj);
    }
}
let bigMemoryUser = bigObjMaker();
 
Array(1000).fill(1).map((x,i) => {
    bigMemoryUser(i, i);
});

/*In the example, the closure over the bigObj object keeps the memory in use, even after bigMemoryUser() finishes executing. If 
you run this code in your browser, it might crash the browser due to the console.log() statements when bigMemoryUser() executes 
1000 times. The object bigObj can grow infinitely depending on how many times bigMemoryUser() is called.*/
/*In the applet below, an object is created using the Instrument() constructor function. Notice that the variable names take up 
memory in the stack, while function definitions and objects have memory in the heap. During function execution, a frame is added 
to the stack until the function is complete, then it can pop off the stack.*/

class Instrument {
    constructor(name, type, instrumentOrigin) {
        this.name = name;
        this.type = type;
        this.instrumentOrigin = instrumentOrigin;
    }
}

let mbira = new Instrument("Mbira", "Lamellophone", "Zimbabwe");
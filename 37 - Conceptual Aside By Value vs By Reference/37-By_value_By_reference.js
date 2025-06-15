//By value (Premitives.)
var a = 3;
var b;

b = a;
a = 2;
console.log(a) //output will be 2
console.log(b) //output will be 3


//By Reference (all objects (including functions))

var c = {greeting:"hi"};

var d;
d = c;
c.greeting = "hello";

console.log(c) // output will be {greeting:"hello"}
console.log(d) // output will be {greeting:"hello"} because both are pointing to the same address in the memory.


//By Reference (Even as a parameter)

function changeGreeting(obj){
  obj.greeting = "Hola";
}

changeGreeting(d);

console.log(c) // output will be {greeting:"Hola"}
console.log(d) // output will be {greeting:"Hola"}

//equals operator sets up a new memory space (new address)

c = {greeting:"howdy"}

console.log(c) // output will be {greeting:"howdy"} bcoz new memory allocated due to = operator
console.log(d) // output will be {greeting:"Hola"} pointing to the old memory space.
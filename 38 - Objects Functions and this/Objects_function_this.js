// When a function is invoked new execution context is created.
function a(){
  console.log(this)
  this.newVariable = "hello";
} // function statement


var b = function (){
  console.log(this)
}

a() // the output will be window object ( Global Object )

console.log(newVariable) // output will be hello. coz its created in Global object inside a function.

b() // the output will be window object ( Global Object )

var c = {
  name:"the C object",
  log: function(){
    this.name = "updated C Object"
    console.log(this)  // this will point to the C object.

    var setName = function(newName){
      console.log(this) // this will point to the Global object that is window object
      this.name = newName
    }
    setName("updated once again!") // so the name variable will be created in global window object like name:"updated once again!"
  }
}

// inside setName function if you want to point to the C object then use below
var c = {
  name:"the C object",
  log: function(){

    this.name = "updated C Object"
    console.log(this)  // this will point to the C object.

    var setName = function(newName){
      console.log(this) // this will point to the Global object that is window object
      this.c.name = newName // now it is pointing to C object's name property.
    }
    setName("updated once again!") // so it will update the name property inside C object as we used this.c.name 
  }
}

/************************ or below **********************/

var c = {
  name:"the C object",
  log: function(){
    var self = this
    self.name = "updated C Object"
    console.log(self)  // this will point to the C object.

    var setName = function(newName){
      console.log(self) // this will also point to the C object 
      self.name = newName // now it is pointing to C object's name property as we are using self.
    }
    setName("updated once again!") // so it will update the name property inside C object as we used this.c.name 
  }
}
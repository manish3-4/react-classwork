function greets(name){
    var greet
    if (name == "A"){
        greet = "HI"
    }
    else{
        greet = "Hello"
    }
    console.log(greet)
    
}
greets("Manish")

var a = 20
console.log(a)
// closer = function inside a function.
// function adder (x){

// }

//for(let i = 0; i<5; i++){
//    setTimeout(function(){console.log(i)},1000)}
var b = 20
var c = 30
var abc = (a,b)=>{return (a+b)}
console.log(abc(20, 22))

var obj1 = {
    name:"A",
    greets1:function(){
        setTimeout(()=>{console.log(this.name)}, 0)
    }
}
obj1.greets1()
function ab () {
class student{
    constructor(name1){  //we can only have one constructor in a class
        this.name1 = name1
        console.log("Parents")
    }
    display(){
        console.log(this.name1)
        console.log("Display")
    }
    static print(){
        console.log("print")
    }
}
var obj2 = new student("Manish")
obj2.display()
student.print()

class child extends student{
    constructor(name, year){
        super(name)
        this.year = year
    }
    display(){
        super.display()
    }
}return child
}
var a = ab()
var ob = new a("manis", 1999)
ob.display()


// function gadi(){
//     class vehicle{
//         constructor(make, model){
//             this.make = make
//             this.model = model
//         }
//         getdetails(){
//             console.log(this.make)
//             console.log(this.model)
//         }
//         static compareVehicles(vehicle1, vehicle2){
//             return vehicle1.make === vehicle2.make
//         }
//     }

//     class car extends vehicle{
            
//     }
// }

var arr = new Array(5, 7, 8, 5, 5, 4, 2, 3 ,1)
arr.copyWithin(2, 4, 6)

console.log(arr)
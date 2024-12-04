var arr = Array.of(6, 7, 8)
console.log(arr)

var c = arr.find((x)=>{
    return x>7
})
console.log(c)
var v = arr.findIndex((x) => {
    return x>7
})
console.log(v)

var d = arr.entries()
for(i of d){
    console.log(i)
}

var d = arr.keys()
for(i of d){
    console.log(i)
}

// var a8 = ["green", "red", "black"]
// console.log(a8.fill["black", 1, 2])

var marr = [4.2,5.1,7.9]
console.log(marr.map(Math.round))

var marr = [4,5,7]
console.log(marr.map((x)=>x**2))

let num = [5,9,12,24,67]
let sum = num.reduce(function (accumulator, curValue){
    return accumulator+curValue
}, 0)
console.log(sum)

let num1 = [{n:2}, {n:20}, {n:30}]
let sum1 = num1.reduce(function (accumulator, curValue){
    return accumulator+curValue.n
}, 0)
console.log(sum1)

let arr2 = [10,30,10,32,30,50]
let unique = arr2.reduce(function(acc,x){
    if(!acc.includes(x)){
        acc.push
    }
    return acc
}, [])
console.log(unique)

function print(a,...b)  //...is for rest or spread 
{
    console.log(a)
    console.log(b)
}

print(1,2,3,4,5,6)

var displaycolors = function(message){
console.log(message)
for(i in arguments){
    console.log(arguments[i])
}
}

let message = 'List of colors'
displaycolors(message, 'red')
displaycolors(message, 'red', 'green')
displaycolors(message, 'red', 'green', 'blue')


let firstname = "Manish"
let lastname = "Kumar"

let obj = {
    firstname, lastname
}

console.log(obj.firstname)
console.log(obj.lastname)

var data = ['Manish', 'Kumar', 'male']
var [fname, lname, gender] = data

console.log(fname+lname+gender)
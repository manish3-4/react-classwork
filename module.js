var num_set = [10, 20, 30]
function hello()
{
    console.log("hello world");

}

class greeting{
    constructor(name){
        this.greeting = "Hello, " + name;

    }
}
hello();
export  {num_set as n, hello as h}
export  {greeting as g}

function fun1(){
    let num=1;
    return function fun2 () {
        num++;
        return num;
    }
}


const call1 = fun1();
console.log(call1());
console.log(call1());
console.log(call1());
console.log(call1());
console.log(call1());

const call2 = fun1();
console.log(call2());
console.log(call2());
console.log(call2());
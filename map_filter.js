const numbers = [3,4,5, 6,7,8];

square = numbers.map(function (element){
    return element*element;

});

console.log(square);

// filter elemesnt

const bigger = numbers.filter(x=> x>5);
console.log(bigger);

//find element

const isThere  = numbers.find(
    x => x>5
);
console.log(isThere);
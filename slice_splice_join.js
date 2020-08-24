const nums = [2,3,4,5,6,7,8,9,0];

//slice the array
const part = nums.slice(2,4);
console.log(part);

// const removed = nums.splice(2,4);
// console.log(removed);
// console.log(nums);


//add element with splice
const add = nums.splice(2,4, 844848);
console.log(nums);

//join array elements

const together = nums.join("haha");
console.log(together);
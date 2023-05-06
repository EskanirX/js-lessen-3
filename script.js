// დავალება 1
// let sum = 0
// function sumPositiv(...numbers){
//     for (let x of numbers){
//         if (x > 0){
//             sum += x
//         }
//     }
//     return sum
// }
// let result = sumPositiv(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8)
// console.log(result);
// დავალება 2
//  function sum(...numbers){
//     let y = 0
//     for (let x of numbers){
//         y += x
//     }
//     return y
//  }
//  let sumOfAll = sum(10, 50, 6, 7, 8, 11, 6, 3, 9)
//  console.log(sumOfAll)
// დავალება 3
// let user = {
//     firstname: 'giorgi',
//     lastname: 'saakadze',
//     age: 32,
//     isloggedin: true
// }
// function userInformation(){
//     console.log(user.firstname + ' ' + user.lastname);
//     if(user.isloggedin = true){
//         console.log(true);
//     }
//     else {console.log(false);}
// } 
// let information = userInformation(user)
// console.log(information);
// დავალება 4
// let array = (10, 50, 6, 7, 8, 11, 6, 3, 9)
// function biggestNumber(...number){
//     return Math.max(...number)
// }
// let bigNumber = biggestNumber(10, 50, 6, 7, 8, 11, 6, 3, 9)
// console.log(bigNumber);
// დავალება 5
// function oddOrNOt(x){
//     if(x % 2 == 0){
//         console.log('luwi');
//     }if(x % 2 == 1){
//         console.log('kenti');
//     }
// }
// let x = oddOrNOt(5)
// console.log(x);
// დავალება 6
// 
// let array = ['html', 'css', 'python', 'javascript', 'bootstrap'];
// array.forEach(function(item) {
//     if (item.length > 4 && item.includes('av')) {
//         console.log(item);
//     }
// })
// დავალება 7
// let array = [1,2,3,4,5];

// for (let x of array){
//     x = array.reverse()
//     console.log(x);
    
// }
// დავალება 8
let user = {
    age : 20
}
let validator = (x) => user.age > 18
    ? "srulwlovani"
    : x < 18
    ? "arasrulwlovani"
    : "error";
    console.log(x);
let asaki = validator(user.age)
console.log(asaki);

// let letter = ['ksddd']

// function counterCreat(a,letter) {

// const a = a.filter((ele,index) => {
//     console.log(`${ele},${index}`)
//    return ele  ==! 'd'
// })
// }

// function counterLetter(str, letter) {
//     let count = 0;
    
//     const counting = str.count1();
    
//     for (let i = 0; i < counting.length; i++) {
//         if (counting[i] === letter.count1()) {
//             count++;
//         }
//     }
//     return count
// }




function counterLetter(str, letter) {
    let count = 0;
    
     const lowerCaseStr = str.toLowerCase();
    for (let i = 0; i < lowerCaseStr.length; i++) {

        if (lowerCaseStr[i] === letter.toLowerCase()) {

            count++;
        }
    }
    
    return count;
}

const leter = "Assalomu alaykum";
const count1 = "a";
const result1 = counterLetter(leter, count1);
console.log(`siz yozgan yozuvda "${count1}"dan ${result1} ta mavjud`)
// const myString = "Hello,how are you!";
// const letterToCount = "o";
// const result = counterLetter(myString, letterToCount);
// console.log(`The letter "${letterToCount}" occurs ${result} times in the string.`);

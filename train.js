/* // let letter = ['ksddd']

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



// **                                       task -A
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
const count1 = "s";
const result1 = counterLetter(leter, count1);
console.log(`siz yozgan yozuvda "${count1}"dan ${result1} ta mavjud`)
// const myString = "Hello,how are you!";
// const letterToCount = "o";
// const result = counterLetter(myString, letterToCount);
// console.log(`The letter "${letterToCount}" occurs ${result} times in the string.`);

 */


// **                               Task -B
function countDigit(str) {
    let count = 0; // Raqamlar soni uchun hisoblovchi o'zgaruvchi
    for (let i = 0; i < str.length; i++) { // Raqamlarni sanash uchun tsikl
        if (!isNaN(str[i]) && str[i] !== ' ') { // Raqam emasligini va bo'shliq emasligini tekshiramiz
            count++; // Raqamlarni hisobga olish
        }
    }
    return count; // Hisobni qaytarish
}

const c = countDigit('rn245j5es323'); // Funksiyani chaqirish
console.log(c); // Konsolga natijani chiqarish


// **                             Task optional

const xayvonlar = ['tulki','bori','ot','baliq','ayiq']

function findAnimal(txt) {
let idx = xayvonlar.find()
console.log(idx);

}
findAnimal('t')


const indices = [];
const array = ['ayiq','tulki','jirafa','aew']
const element = "ayiq";
let idx = array.indexOf(element);
while (idx !== -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]

// **                           Task -D
/* 
class Shop {
    mahsulot1 = 0;
    mahsulot2 = 0;
    mahsulot3 = 0;

    constructor(mahsulot1,mahsulot2,mahsulot3) {
        this.mahsulot1 = mahsulot1;
        this.mahsulot2= mahsulot2;
        this.mahsulot3 = mahsulot3;
    };
    // methods 
    qabul(mahsulot) {
        if (this.mahsulot1 += mahsulot){
        console.log(mahsulot);
        } else if (this.mahsulot2 += mahsulot) { 
            console.log(mahsulot);
        } else if ( this.mahsulot3 += mahsulot) {
            console.log(mahsulot);
        }
    }

    sotish(sold) {
        if (this.mahsulot1 -= sold){
            } else if (this.mahsulot2 -= sold) { 

            } else if ( this.mahsulot3 -= sold) {

            }
            console.log(`${this.mahsulot}`);
    };

    qoldiq() {
     console.log(`sizda ${this.mahsulot1} ${this.mahsulot2} ${this.mahsulot3} lar bor`);
    }

}
const shop = new Shop("cola","snikers","banan");
console.log(shop);
const q = shop.qoldiq();
// console.log(q);
console.log(shop);
const s = shop.sotish("banan")
console.log(shop);

 */

// **                                   Task - G

/* function checkContent(str,str2)  {
    const content = str.map(str2 => str !== str2)
    console.log(content);
}
checkContent('hi','hi')

function checkContent(str,str2)  {

    let a = str
    let b = str2 
    const content = 

}
checkContent('hi','hi')
 */

/* function checkContent(str1, str2) {
    const content = str1 === str2;
    console.log(content);

}

checkContent('salom', 'salom');
 */
// **                           task g -2 chi version
/* function checkContent(str1, str2) {
    const s = str1.split('').map((ele) => {
        return str2.includes(ele)
    });
    console.log(s);
}

checkContent('hedsllo', 'lloelh');

 */

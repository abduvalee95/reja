// **                                                                   Task F chi version

function findDouble(str) {
    const input = str.split('');
    for (let i = 0; i < input.length; i++) {
        if (str.indexOf(input[i], i + 1) !== -1) {
            return true; // agar i ni qiymati 1 ga oshsa true ni qaytar 
        }
    }
    return false; // !== bu usloviya tekshiradi i -1 ni qaytarmaganini agar -1 qaytarsa false boladi
}

const double = findDouble("harifntop yuq"); // bosh joyham 2 ta bolsa true qaytaradi
console.log(double);

/* 
function findDouble(str) {
    return str.split('').some((ele, i) => str.indexOf(ele, i + 1) !== -1);
}

const double = findDouble("helo");
console.log(double);

 */
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
// function countDigit(str) {
//     let count = 0; // Raqamlar soni uchun hisoblovchi o'zgaruvchi
//     for (let i = 0; i < str.length; i++) { // Raqamlarni sanash uchun tsikl
//         if (!isNaN(str[i]) && str[i] !== ' ') { // Raqam emasligini va bo'shliq emasligini tekshiramiz
//             count++; // Raqamlarni hisobga olish
//         }
//     }
//     return count; // Hisobni qaytarish
// }

// const c = countDigit('rn245j5es323'); // Funksiyani chaqirish
// console.log(c); // Konsolga natijani chiqarish


// **                             Task optional

// const xayvonlar = ['tulki', 'bori', 'ot', 'baliq', 'ayiq'];

// function findAnimal(txt, letter) {
//     const filteredAnimals = txt.filter(animal => animal.startsWith(letter));
//     return filteredAnimals;
// }

// console.log(findAnimal(xayvonlar, 'b')); 


//const xayvonlar = ['tulki', 'bori', 'ot', 'baliq', 'ayiq'];

// function findAnimal(txt) {
//     const filteredAnimals = txt.filter(animal => animal.length ===  );
//     return filteredAnimals;
// }

// console.log(findAnimal(xayvonlar, 'b'))

/*
 const xayvonlar = [ 'bori', 'ot', 'baliq', 'ayiq','boyogli','mushuk'];



function findAnimal(str) {

    const input = str.split('').sort().join('') //join qoshib yozgani
    // console.log('input',input);
    return xayvonlar.filter((xayvon )=> {
    const sortXayvon = xayvon.split('').sort().join('') //join qoshib yozgani
    for (let x of sortXayvon ) {
        console.log(x);
        if (!input.includes(x)){
            return false;
        };
    }
    return true
  
    })

    
}
const javob = findAnimal('qilabtokushum');
console.log('javob',javob);

 */ 
//  const xayvonlar = [ 'bori','bodring', 'ot', 'baliq', 'ayiq','boyogli'];
// function findAnimal(str) {

//     return xayvonlar.filter((xayvon )=> {
//     for (const x of xayvon ) {
//         console.log(x);
//         if (!str.includes(x)){
//             return false;
//         };
//     }
//     return true
//     })

    
// }
// const javob = findAnimal('ilgoyob');
// console.log('javob',javob);


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

// **                                                            Task - G
/* 
function checkContent(str1, str2) {
    const content = str1 === str2;
    console.log(content);

}
checkContent('salom', 'salom');
 */
// **                                                    Task G -2 chi version
/* 
function checkContent(str1, str2) {
    const s = str1.split('').map((ele) => {
        return str2.includes(ele)
    });
    console.log(s);
}

checkContent('hedsllo', 'lloesdlh');

 */

// **                                                        Task E  version


// const getReverse = (str) => { 
//     return str.split('').reverse()
//     // return str.split('').reverse().join('') //join qoshib yozgani
// }
// console.log(getReverse("Assalomu alaykum"));


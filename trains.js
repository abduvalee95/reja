console.log("Jack Ma maslahatlari");
const list = [
    "yahshi talaba boling",// 0-20
    "togri boshliq tanlang va kopiroq hato qiling",//21-30
    "ozingizga ishlashni boshlang",//31-40
    "siz kuchlik b'olgan narsalarni qiling",// 41-50
    "yoshlarga investisiya kiriting",// 51-60
    "Endi dam oling "// 60
];

//**                                         */ call back function 
// callback  1 chi qismi hatolikga tegishlik ikkinchisi olish kk bolgan javobimizga tegishlik
/* function maslahatBering(a,callback) {
    if(typeof a !== 'number')  callback("insert number",null) // agar type numberga teng bolsa call back ishga tushadi va null qaytadi: agar a number bolmasa bizga hatolik beradi
    // callback ni 1chi qismi errorga tegishlik 2 chi qismi dataga tegishlik 
    else if(a < 20 ) callback(null,list[0]); // datani array listni 0 chi indexni qaytaramiz
    else if(a < 30 ) callback(null,list[1]);
    else if(a < 40 ) callback(null,list[2]);
    else if(a < 50 ) callback(null,list[3]);
    else if(a < 60 ) callback(null,list[4]);
    else{
        callback(null,list[5]);
    }
}

// hato ishlayabti   qisqartirib yozganim shunchaki 
// function maslahatBering(a,callback) {
//     if(typeof a !== 'number')  callback("insert number",null)
//     else{
//         let index = Math.floor(a/10);
//         callback(null, list[index > 5 ? 5 : index]);
//     }
// }

//  callback ni chaqirishimizda paramet ishga tushadi :parametr sifatida funcktion ishga tushadi 
maslahatBering(22,(err, data) => { // a qiymat berildi  
    if(err) console.log("Error:",err); // agar hatolik bolsa menga hatolikni korsat devolamiz va u hatolikni render qilamiz 
    console.log("Javob",data)
})
 */

/* function maslahatBering(a,callback) {
    if(typeof a !== 'number')  callback("insert number",null) // agar type numberga teng bolsa call back ishga tushadi va null qaytadi: agar a number bolmasa bizga hatolik beradi
    // callback ni 1chi qismi errorga tegishlik 2 chi qismi dataga tegishlik 
    else if(a < 20 ) callback(null,list[0]); // datani array listni 0 chi indexni qaytaramiz
    else if(a < 30 ) callback(null,list[1]);
    else if(a < 40 ) callback(null,list[2]);
    else if(a < 50 ) callback(null,list[3]);
    else if(a < 60 ) callback(null,list[4]);
    else{  
        setTimeout(() =>{
        callback(null,list[5]); //  
    },5000)
}
    }
  
console.log("passed here");//1 
maslahatBering(60,(err,data) => {
    if(err) console.log("error",err);
    console.log("javobi:",data)//3 qachonki javob kelgan paytda ishga tushdi  single threat javobdi kutib otirmadi bowqaga otib ketib keyn javob kelganda javobni chiqardi
    
});
console.log("javobdan keyngi log otib ketyabti ");//2
//Single threatni band qilmaslik uchun callback dan foydalanish 
 */

// **                                           Async  then().catch()çmisolida
/* 
async function maslahatBering(a) {
    if(typeof a !== 'number')  throw new Error("insert number") // 
    else if(a < 20 ) return(list[0]); // 
    else if(a < 30 ) return(list[1]);
    else if(a < 40 ) return(list[2]);
    else if(a < 50 ) return(list[3]);
    else if(a < 60 ) return(list[4]);
    else{  
            return(list[5])
//         setTimeout(() =>{
//         callback(null,list[5]); //  
//     },5000)
 }
    }
  
    // async fuctionga aylanyabti 
    // then().catch() promise hell bolib ketadi agar kop operasiya qiladigon bolsek ichiga ichiga yozib ketishga togri keladi
console.log("passed here");//1 
maslahatBering(20).then(data =>{
    //data: javob kelganda bizga log qiladi
    console.log(data) //3  
}).catch(err => {
    console.log(err);
});

console.log("javobdan keyngi log otib ketyabti "); //2
  */


// Async function Sync functionlar toliq ishga tushib bolgandan keyn  Async functionni natijalari bn toliq ishlashni boshlaydi shuning uchun ham NodeJs da single threatni umuman band qilmaydi event loop orqali operasiyalarni threat poo;ga tashlayveradi 
// bu single thratimizni umuman band qilmaydigon operation type


// callback qismida async functionni qollash

// **                                           Async await misolida
/* 
async function maslahatBering(a) {
    if(typeof a !== 'number')  throw new Error("insert number") // 
    else if(a < 20 ) return(list[0]); // 
    else if(a < 30 ) return(list[1]);
    else if(a < 40 ) return(list[2]);
    else if(a < 50 ) return(list[3]);
    else if(a < 60 ) return(list[4]);
    else{  
            return(list[5])
//         setTimeout(() =>{
//         callback(null,list[5]); //  
//     },5000)
 }
    }
  // ** async await 
async function run () { // maydoncha yaratib berish uchun hosil qilamiz
    let javob = await maslahatBering(20);//1 bu to javob kelmaguncha bowlanmaydi 
    console.log(javob);//1
    javob = await maslahatBering(30)//2
    console.log(javob);//
    javob = await maslahatBering(40)//
    console.log(javob);
    javob = await maslahatBering(50)//
    console.log(javob);
    javob = await maslahatBering(60)//
    console.log(javob);
} 
run();
 */
//**  bu javob olgandan keyn otsin deb await bervolamiz ochered bn javob olib ketadi  call back yoki promise hell bolib ketmayabti 

// async yozayotganda try catch yozishga harakat qilaverish kk imkon boricha



// **                                           Async await Promise misolida
async function maslahatBering(a) {
    if(typeof a !== 'number')  throw new Error("insert number") // 
    else if(a < 20 ) return(list[0]); // 
    else if(a < 30 ) return(list[1]);
    else if(a < 40 ) return(list[2]);
    else if(a < 50 ) return(list[3]);
    else if(a < 60 ) return(list[4]);
    else{  
        return new Promise((resolve,reject) => {
            setTimeout(() =>{
                resolve(list[5]); //  
            },5000)
            })
            
 }
    }


  // ** async await 
  async function run () { // maydoncha yaratib berish uchun hosil qilamiz
    let javob = await maslahatBering(50);//1 bu to javob kelmaguncha bowlanmaydi 
    console.log("javob:1",javob);//1
    javob = await maslahatBering(30)//2
    console.log("javob:2",javob);//
    javob = await maslahatBering(70)//
    console.log("javob:3",javob);
    javob = await maslahatBering(50)//
    console.log("javob:4",javob);
    javob = await maslahatBering(20)//
    console.log("javob:5",javob);
} 
run();

//ascyn callbackda bu toliq javob olmaguncha keyngilarga otaydi 
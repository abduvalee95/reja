console.log("Web Server boshlash");
const http = require("http")
// expressni kochirib olamiz  npm i express
const express = require("express");
const res = require("express/lib/express");
const app = express(); //shu belgini qoysek bizga expressni app objectni yuboradi
// app objectida shartli server quramiz
// expressgakirib kelayotgan malumotlarga bogliq bolgan code larmiz yoziladi
//**     1: kirish
app.use(express.static("public")); // bu har qanday kelyatgan zaprosslar uchun public ochiq degan manoni anglatadi faqat public folderni koradi
// google chrome expressga request qilyatganda public folderni client larga ochib beryabmiz css kerek boladigon img larni shu erga joylashadi

app.use(express.json());
// kirib kelayotgan json formatni object holatga ogirib beradi perevod 

app.use(express.urlencoded({extended:true}));
//Html dan traditional form request  formdan biron bir post qilsak qabul qiladi  agar yozmasakn post larni qabul qilmaydi

//***   2: Session

// **    3: bssr view yasagani ejsdan foydalanamiz  'npm i ejs' install qivolamiz
app.set("views", "views"); // folderni korsatyabmiz  viewsdan oqiydi folder ochamiz
app.set("view engine", "ejs"); //ejs ni korsatyabmiz ejsda frontend ni yasaymiz backendni ichida
/* 
//**    4:  ROUTING  routerlarga moljallangan  rooterrlarni shakillantirib olaamiz
app.get("/hello",function(req, res){
    res.end('<h1 style = background:blue>Hello World! this is Hello Page </h1>');
});

app.get("/gift", (req,res) => {
    res.end('<h1 style= color:red > This is gift Page</h1>');
});

app.get("/blog",(req,res) =>{
    res.end('<h1 style = color:blue; > Salom bu Blog  B\'olimidasiz siz bu erda blog yozishingiz mumkin</h1>')
});


const server = http.createServer(app); //biz yasab olgan express app variableni pass qilish
let PORT = 3000;
server.listen(PORT, function(){
     console.log("Server ishga tushdi:",PORT);
}); // server succes bolsa iwlasa fucntion ishga tushadi 

//Expressni 4 ta bolimda shakillantirdik va uni serverga yukladik  npm start

//! "dev": "nodemon"  dev run nodemon  


*/

const fs = require("fs");

let user; // userni publishing bolish uchun pass qilamiz 
fs.readFile("database/user.json", "utf8", (err,data ) => {
if(err) {
    console.log("ERROR:",err); // bu error bolgandegi chiqadigon hato
}else{
    user = JSON.parse(data); // bu ishalgan  paytda data ni oladi 
}
});


//4 Routine code 
app.post("/create-list", (req, res) => {   //post formdan shu erga keladi 
    console.log(req); // body qismidan requestni qabul qiladi  body qismidan malumot keladi
    res.json({ test: "succes"}); // res.json  json shaklida malumotni qaytarish 
})

app.get("/ ", (req, res) => {
    res.render("harid")
})

app.get("/author", (req, res) => {
    res.render("author", { user: user}) //userni pass qildik
})

const server = http.createServer(app); //biz yasab olgan express app variableni pass qilish
let PORT = 3000;
server.listen(PORT, function(){
     console.log("Server ishga tushdi:",PORT);
}); // server succes bolsa iwlasa fucntion ishga tushadi 


// ** GET: databasedan malumotni olish uchun ishlatiladi malumotni oqish uchun 
// ** POST: databasega malumot yuborish uchun ishlatiladi ozi bn olib keladi 
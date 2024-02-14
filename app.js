console.log("Web Server boshlash");

/*
const http = require("http")
// expressni kochirib olamiz  npm i express
const express = require("express");
const db = require('./server').db() //shu orqali Crud ni amalga oshiramiz
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
//4 Routine code 
// app.post("/create-list", (req, res) => {   //post formdan shu erga keladi 
//     console.log(req.body); // body qismidan requestni qabul qiladi  body qismidan malumot keladi
//     res.end("succes"); // res.json  json shaklida malumotni qaytarish 
// })

// app.get("/", (req, res) => {
//     res.render("reja")
// })




// ** GET: databasedan malumotni olish uchun ishlatiladi malumotni oqish uchun 
// ** POST: databasega malumot yuborish uchun ishlatiladi ozi bn olib keladi 


// const express = require("express");
const express = require("express");
// Mongo db va server chaqirish
const db = require('./server').db();
const mongodb = require("mongodb")

// const db = require('./server').db() //shu orqali Crud ni amalga oshiramiz

const app = express();
// const app = express(); //shu belgini qoysek bizga expressni app objectni yuboradi


app.use(express.static("public"));
// bu har qanday kelyatgan zaprosslar uchun public ochiq degan manoni anglatadi faqat public folderni koradi
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.use(express.urlencoded({extended:true}));

//**                                  2: Session
//**                                  3: Views


app.set("view engine", "ejs");

//**                                      4 Routing
// app.post("/create-list", (req, res) => {   //post formdan shu erga keladi 
//     console.log(req.body); // body qismidan requestni qabul qiladi  body qismidan malumot keladi
//     res.end("succes"); // res.json  json shaklida malumotni qaytarish 
// })


app.post("/create-item", (req, res) => {
    console.log("user entered /creat-item")
    console.log(req.body);
    const new_reja = req.body.reja;
   /*  
    // bi traditional 
       db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        if (err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            res.end("successfully added");
        }
        // end traditional 
 */
            // start modern 
       db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        console.log(data.ops);// mongo db qaytaryabti
        res.json(data.ops[0]);// datani ichida ops objectidan arraybor shu arrni 0 indeksini yuboryabmiz

    }); 
});
// delete itemni appi 
app.post("/delete-item", function (req, res) {
    const id = req.body.id;
    /* console.log(id); //axiosdan post qilganimizni id ni bu erdan qabul qilib olyabmiz
    res.end("done")
     */
    // databasedan ochirish start
    db.collection("plans").deleteOne({ _id: new mongodb.ObjectId(id)},
    // db.colection(methodi)"plans"di ushlab kelib deleteOne methodini  idga teng bolganini ochrib ber
    function (err, data){
        res.json({ state: "success" })
    }
    );
});

/* 
browser.jsdan clic itemni bosganimizda delete-me ishlaganda confirm 
olsa shunda idni yuboryabti delete itemga va biz uni db dan ochirib yuboryabmiz
javob respons da qaytib boradi faqat db da ochirildi endi viewdan ochirish kk
response borganda  liga borish uchun  parentelement parentelementni ochirishimiz kk 
butondi 2 ta tepada 
*/

// end delete-item backend 
// ** start edit api 
app.post("/edit-item", function (req, res) {
    const data = req.body.id;
    // console.log(data);
    // res.send("done!")
    db.collection("plans").findOneAndUpdate(
        { _id: new mongodb.ObjectId(data.id)},
        {$set:{reja: data.new_input}},// set comanda rejani yangi text bn nomlasin
        function (err,data){ 
            res.json({ state: "success" })
    } ) // databaseda edit qilamiz endi
})

// end edit

// * start delete-all 
app.post("/delete-all", function (req, res) {
    db.collection("plans").deleteMany(  function () {
        res.json({state: "all plans deleted"})
    }
    )
})



//end delete-all
app.get("/", function (req, res) {
    console.log("user entered /")
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if (err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            console.log(data);
            res.render("reja", { items: data });
        }
    });
});


module.exports = app

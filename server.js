const http = require('http');
const mongodb = require("mongodb")

let db
const connectionString = 
"mongodb+srv://abduvalee95:RiIPBpw1K4oFyYhZ@cluster0.afhcpel.mongodb.net/Reja";

mongodb.connect(
    connectionString,
    {useNewUrlParser:true,useUnifiedTopology:true
},
(err,client) => {
 if (err) console.log("error", err);
  
else {
    console.log("Server ishga tushdi")
    module.exports = client // db degan objectmizni ovolamiz
    const app = require("./app");
    const server = http.createServer(app); //biz yasab olgan express app variableni pass qilish
    let PORT = 3000;
    server.listen(PORT, function(){
         console.log(`Server ishga tushdi: ${PORT}, http://localhost:${PORT}`);
    }); // server succes bolsa iwlasa fucntion ishga tushadi 
    
}}  
)




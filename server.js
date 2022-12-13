//TERMİNALDEN KURULUM VE YÜKLEME
//npm init ile node.js ve package kurulum
//npm i express 
//npm i body-parser
//npm i ejs
// http://localhost:3000/

//*************************************************** */
// express ve body-parser packageleri aldık objectlere atadık,ayarladık,cagırdık
// html verine ejs yi kullanacagımızı bildirdik
//ejs package için nesneye atamamıza gerek yok 
const express = require('express');
const bodyParser = require('body-parser');
const { ppid } = require('process');
const app= express();
app.use(bodyParser.urlencoded({extended:true})); // POST islemini cozumlemek icin gerekli bir ayristirici
app.set('view engine','ejs');

//************************************************* */

//express package ile server 3000 nolu portta olusturuldu
app.listen(3000,()=> console.log("dinleme basladi"));
//  ()=> arrow function
// ctrl c serveri kapat


//**************************************************** */
//get ile sunucuya data gönderimi yapılır data sayfaya verilir
//GET: Bu metod sunucudan veri almak için kullanılır.
app.get("/",function(req,res){
   // res.write("birinci satir.");
    //res.write("bu ikinci satir");
    //res.send();
    // or res.send("bu birinci satır <br> bu ikinci satir")
    //res.sendFile(__dirname+"/index.html");
   res.render("index.ejs"); //key-value cinsinde data gönderiyoruz
});

//**************************************************** */
//POST metodu kullanarak istemci tarafından sunucu tarafına aktarma
//post ile sunucu data alır koda getirirs
//POST: Bu metod ile sunucuya veri yazdırabilirsiniz.
app.post("/",function(req,res){
    console.log(parseInt(req.body.birinciSayi)+parseInt(req.body.ikinciSayi));
    res.render("index.ejs",{txtSonuc:parseInt(req.body.birinciSayi)+parseInt(req.body.ikinciSayi)});

});
//******************************************************** */
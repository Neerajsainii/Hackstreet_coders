const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const mongoose = require("mongoose");
const DB = "mongodb+srv://Hackerstreet_coders:Neeraj_saini@cluster0.scyatjy.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(DB).then(() => {
    console.log("Hari Hari kam korche!! Connected to MongoDB");
}).catch((err) => {
    console.error("Paise barbad bhaiyaji!! Connection error:", err);
});


const Register = require("./src/models/registers");
const port = process.env.PORT || 3000;
app.use(express.json());
app.use( express.urlencoded({extended:false}));
// const viewsPath = path.join(__dirname,"views");
const static = path.join(__dirname,"/");
// const templatePath = path.join(__dirname,"/");
app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine","hbs");
// app.set("views", viewsPath);
app.use(express.static(static));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/medicL.html"));
 });
//  app.get("/",(req,res) =>{
//     res.render('in');
//  });
app.get("/login",(req,res) =>{
    res.render('login');

});app.post("/registers",async (req,res) =>{
    try {
          const password = req.body.password;
          const confirmpassword = req.body.confirmpassword;
          if(password === confirmpassword){
            const registerEmployee = new Register({
                // Name : req.body.Name,
                // Age : req.body.Age,
                // Gender : req.body.Gender,
                Email : req.body.Email,
                // Mobile : req.body.Mobile,
                password : req.body.password,
                confirmpassword : req.body.confirmpassword
            })

            const registered = await registerEmployee.save();
            res.status(201).render('medicL');//index -- means home page

          }else{
            res.send("password are not matching");
          }
    } catch (error) {
        res.status(400).send(error);
    }
});
// app.get("/about",(req,res) =>{
//     res.render('about');
// });
// app.get("",(req,res) =>{
//     res.render('');
// });
// app.get("",(req,res) =>{
//     res.render('');
// });
// app.get("",(req,res) =>{
//     res.render('');
// });
// app.get("*",(req,res) =>{
//     res.render('error');
// });
app.listen(port, () => {
    console.log("Hari bol its Working!!");
});





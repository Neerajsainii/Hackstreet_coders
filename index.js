const express = require('express');
const session = require('express-session');
const { body, validationResult } = require('express-validator');
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 3000;

const index = express();
const { auth, requiresAuth } = require('express-openid-connect');
const config = {
    authRequired: false,
    auth0Logout: true,
    baseURL: 'http://localhost:3000',
    clientID: 'plONBEb9kMIyFSNf2pRSktoqAIAxusOO',
    issuerBaseURL: 'https://dev-5g74na4erm4v44fj.us.auth0.com',
    secret: 'LONG_RANDOM_STRING'
};
app.use(auth(config));
  
  const static = path.join(__dirname,"/");
  index.use(express.static(path.join(__dirname, 'public')));
  
  index.set("view engine","hbs");
  index.use(express.static(static));
  
  index.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, "public/medicL.html"));
  });
  index.get("/fitness&nutrition",(req,res) =>{
      res.render('fitness&nutrition');
  });
  index.get("/about",(req,res) =>{
      res.render('medicL');
  }); index.get("/lifesaver",(req,res) =>{
      res.render('medicl1');
  });
  index.get("/Services",(req,res) =>{
      res.render('medicL');
  });
 index.get("/termsandcondition",(req,res) =>{
      res.render('termsandcondition');
  });
  index.get("*",(req,res) =>{
      res.render('error');
  });
  index.listen(port, () => {
      console.log("Your port connection is successfull!!");
  });



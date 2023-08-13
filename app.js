const express = require('express');
const session = require('express-session');
const { body, validationResult } = require('express-validator');
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 3000;

const app = express();
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
  app.use(express.static(path.join(__dirname, 'public')));
  
  app.set("view engine","hbs");
  app.use(express.static(static));
  
  app.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, "public/medicL.html"));
  });
  app.get("/fitness&nutrition",(req,res) =>{
      res.render('fitness&nutrition');
  });
  app.get("/about",(req,res) =>{
      res.render('medicL');
  }); app.get("/lifesaver",(req,res) =>{
      res.render('medicl1');
  });
  app.get("/Services",(req,res) =>{
      res.render('medicL');
  });
 app.get("/termsandcondition",(req,res) =>{
      res.render('termsandcondition');
  });
  app.get("*",(req,res) =>{
      res.render('error');
  });
  app.listen(port, () => {
      console.log("Your port connection is successfull!!");
  });



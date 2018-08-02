const express=require('express');
var hbs = require('hbs');
const port=process.env.PORT || 3000;
app=express();
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('evalute', function(name) { return((new Date().getFullYear())+ " "+name)});
app.set('view engine','hbs');
app.get('/',(req,res)=>{
  res.render('template',{
    pageTitle:"Homepage",
    name:"Ruchitesh"
  });
});
app.get('/about',(req,res)=>{
  res.render('template1',{
    pageTitle:"About",
    name:"Ruchitesh"
  });
});
app.listen(port,()=>{
  console.log("App is running on port "+port);
});

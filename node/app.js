const express = require("express");
  
const app = express();
  
app.set("view engine", "pug");
 
app.use("/login", function(request, response){
    response.render("login");
}); 

app.use("/register", function(request, response){
    response.render("register");
}); 

app.use("/index", function(request, response){
    response.render("index");
}); 

app.use("/product", function(request, response){
    response.render("product");
});

app.use("/statistika", function(request, response){
    response.render("statistika");
});
 
app.use(express.static('public'))

app.use("/", function(request, response){
    response.send("Главная страница");
});

app.listen(3000);  
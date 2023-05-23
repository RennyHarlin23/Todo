let arr = ['Buy Food', 'Cook Food', 'Eat Food'];

const express = require("express");
const bodyParser = require("body-parser");

app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.get("/", function(req, res){


 const day = new Date();

 const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
 }

 const today = day.toLocaleDateString("en-US", options);

 res.render('list', {today:today, items:arr});

});

app.post("/", (req, res) => {
    let newItem = req.body.newItem;

    arr.push(newItem);
    res.redirect("/");
})

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});

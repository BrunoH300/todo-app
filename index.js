const express = require('express');
const app = express();
const exphbs = require("express-handlebars")
const mysql = require("mysql2")

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))


app.get('/', (requisicao, resposta) =>{
    resposta.render('home')
});

app.listen(3000,() => {
    console.log("servidor na 3000")
})
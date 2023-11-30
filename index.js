const express = require('express');
const app = express();
const exphbs = require("express-handlebars")
const mysql = require("mysql2")

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())


app.post("/criar", (requisicao,resposta)=>{
    const descricao= requisicao.body.descricao 
    const completa = 0

    const sql = `
        INSERT INTO tarefas(descricao, completa)
        VALUES ('${descricao}', '${completa}')
    `

    conexao.query(sql, (erro)=>{
        if (erro){
            return console.log(erro)
        }

        resquisicao.redirect('/')
    })
})


app.get('/', (requisicao, resposta) =>{
    resposta.render('home')
});


const conexao = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"root",
    database:"todoapp",
    port: 3307
})

conexao.connect((erro) => {
    if (erro){
        return console.log(erro)
    } 
    
    console.log("conectado/mysql")

    app.listen(3000, ()=>{
        console.log("rodando na 3000")
    })
})

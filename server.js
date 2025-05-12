
const express = require("express");
const caminho = require("path");

const app = express();
const porta = 3000;

app.use(express.static("public"));

app.get("/",(req, res) => {
    res.sendFile(caminho.join(__dirname, "public","login.html"));    
});

app.get("/inicio",(req, res) => {
    res.sendFile(caminho.join(__dirname, "public","inicio.html"));    
});

app.get("/sobre",(req, res) => {
    res.sendFile(caminho.join(__dirname, "public","sobre.html"));    
});

app.get("/contato",(req, res) => {
    res.sendFile(caminho.join(__dirname, "public","contato.html"));    
});

app.get("/carrinho",(req, res) => {
    res.sendFile(caminho.join(__dirname, "public","carrinho.html"));    
});
app.get("/depoimento",(req, res) => {
    res.sendFile(caminho.join(__dirname, "public","depoimento.html"));    
});


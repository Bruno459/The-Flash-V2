const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static('src'));

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/timeflash', (req, res) => {
    res.render('timeFlash');
})

app.get('/laboratoriosstar', (req, res) => {
    res.render('laboratoriosStar');
})

app.get('/museudoflash', (req, res) => {
    res.render('museuDoFlash');
})

app.get('/galeriadeviloes', (req, res) => {
    res.render('galeriaDeViloes');
})

app.listen(3000, () => {
    console.log('Server rodando em http://localhost:3000/');
})
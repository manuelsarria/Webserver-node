const express = require('express')
const hbs = require('hbs');
require('dotenv').config();


const app = express()
const port = process.env.PORT; 
// Handlebars
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs')

// servir contenido estatico
app.use( express.static('public'));

app.get('/',  (req, res) => {
    res.render('home', {
        nombre: 'Manuel Sarria',
        titulo: 'Curso de Node'
    });
})

app.get('/generic',  (req, res) => {
    res.render('generic', {
        nombre: 'Manuel Sarria',
        titulo: 'Curso de Node'
    });
})

app.get('/elements',  (req, res) => {
    res.render('elements', {
        nombre: 'Manuel Sarria',
        titulo: 'Curso de Node'
    });
}) 

app.get('*',  (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen( port, () =>{
    console.log(`Example app listening at http:localhost:${port}`)
})
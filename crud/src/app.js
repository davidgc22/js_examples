const express = require('express');
const {engine}=  require('express-handlebars');
const myconnetion = require ('express-myconnection');
const bodyParser =  require('body-parser');
const mysql = require('mysql');
const taskRoute = require('./routes/tasks');

const app = express();
app.set('port', 4000);
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.set('views', __dirname +'/views');
app.engine('.hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');

app.use(myconnetion(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3307,
    database: 'crudnodejs'
}, 'single'));

app.listen(app.get('port'), ()=> {
    console.log('listening on port ', app.get('port'));
});
app.use('/', taskRoute);

app.get('/', (req, res)=>{
    res.render('home');
});
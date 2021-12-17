const express = require('express');
const app = express();

const db = require('./db');

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static('public'))

const users = require('./routes/users')
app.use(users)

app.get('/', (req, res) =>{
   /*res.send('Home')*/
   res.render('index')
})


// 15 d
app.get('/log_in', (req, res) =>{
    res.render('log_in')
 })
// 15 d


app.listen(3000, () => {
    console.log(`¡server OP! en http://localhost:3000`)
})
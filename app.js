const express=require('express')
const app=express()
const PORT= 2000
const session=require('express-session')
app.use(session({
    secret: 'david',
    resave: true,
    saveUninitialized: true,
}))
const mustacheExpress=require('mustache-express')

const path = require('path')
const VIEWS_PATH= path.join(__dirname, '/views')
const itemRouter = require('./routes/items')
const addItem = require('./routes/add-items')


app.use('/css', express.static('css'))

app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'))
app.set('views',   VIEWS_PATH)
app.set('view engine', 'mustache')

app.use('/items', itemRouter)
app.use('/add-items', addItem )


app.get('/', (req, res) => {
    res.render('home')
})




app.listen(PORT, ()=> {
    console.log('server running')
})
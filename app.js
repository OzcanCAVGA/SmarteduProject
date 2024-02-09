const express = require('express')
const mongoose = require('mongoose');
const session = require('express-session')
const pageRoutes = require('./routes/pageRoutes')
const courseRoute = require('./routes/courseRoute');
const categoryRoute = require('./routes/categoryRoute');
const userRoute = require('./routes/userRoute')

const app = express();

//Connect DB
mongoose.connect('mongodb://127.0.0.1:27017/smartedu-db')
    .then(() => { console.log("DB Connected Successfuly") })

//Template Engine
app.set('view engine', 'ejs')


//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(session({
    secret: 'my_keyboard_cat',
    resave: false,
    saveUninitialized: true
}))

//Routes
app.use('/', pageRoutes)
app.use('/courses', courseRoute)
app.use('/categories', categoryRoute)
app.use('/users', userRoute)




const port = 3000;
app.listen(port, () => {

    console.log(`App started on port ${port}`)
})
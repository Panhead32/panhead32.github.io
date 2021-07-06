const express = require('express')
const exphbs = require('express-handlebars')
const database = require('./database/database')
const path = require('path')

const homeRoute = require('./routes/home')

const app = express()

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))

app.use('/', homeRoute)

// starting
async function start() {
    try {
        const PORT = process.env.PORT || 3000

        await database.sync()

        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()
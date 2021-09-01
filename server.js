const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const cors = require('cors')
const connectDB = require('./config/db')

//Load config
dotenv.config({ path: './config/config.env' })

connectDB()



const feedback = require('./routes/feedback')

const app = express()

app.use(cors({origin: 'http://localhost:4200'}));

//Bodyparser middleware
app.use(express.json())

//Logging
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))    
}

//Routes
app.use('/api/v1/feedback', feedback)

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('dist/silkwaves-feedback-frontend'));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'dist', 'silkwaves-feedback-frontend', 'index.html')));
}

const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(`server running in ${process.env.NODE_ENV} mode on PORT ${process.env.PORT}`)
)
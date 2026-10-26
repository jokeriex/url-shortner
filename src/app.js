const express = require('express');
const mongoose = require('mongoose')




const dotenv = require('dotenv').config()


mongoose.connect(process.env.DB_URI)

mongoose.connection.on('connected', () => {
    console.log('connected')
})

const app = express();




app.listen(process.env.PORT, () => {
    console.log(`listening on port: ${process.env.PORT}\nhttp://localhost:${process.env.PORT}`)
})
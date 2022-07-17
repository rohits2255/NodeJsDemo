const express = require('express')
const app = express()

app.get('/', (req, res)=> {
    res.send("Health check passed")
})

app.listen(3001, () => {
    console.log('App is listening on port: 3001')
})
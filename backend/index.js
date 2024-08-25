import express from 'express'

const app = express()


app.get('/', (req, res) => {
    res.send("<h1>Hello, there</h1>")
})

app.listen(2020, () => {
    console.log('listening on 2020');
})
const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, '/build')))

app.get('*', (req, res) => {
    res.send('root')
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`danskebank.com running on http://localhost:${port}`)
})

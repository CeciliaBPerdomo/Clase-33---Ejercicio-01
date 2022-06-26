/* 
npm init -y
npm i express
*/
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Esta es la ruta raíz modificada')
})

app.listen(8080, () => console.log('server running in 8080'))
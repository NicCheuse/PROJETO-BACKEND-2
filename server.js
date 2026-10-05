import express from 'express'
import path from 'path'
const PORT = 3000
const app = express()
// Usar Middleware (software guardião)
app.use(express.static(path.join(import.meta.dirname, 'src', 'public'))) // middleware

app.get('/', (req, res) => { // callback ou retorno
    res.sendFile(path.join(import.meta.dirname, 'src', 'pages', 'index.html'))
})

app.listen(PORT, () => {console.log(`Servidor Vivo! ${PORT}`)})
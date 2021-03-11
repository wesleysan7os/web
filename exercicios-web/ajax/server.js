import bodyParser from 'body-parser';
import express from 'express';

const app = express()
app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/teste', (req, res) => res.send('Ok'))
app.listen(8080, () => console.log('Executando...'))

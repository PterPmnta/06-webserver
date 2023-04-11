import express from 'express';
import path from 'path';
import hbs from 'hbs';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
const __dirname = path.resolve(path.dirname(''));

app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Pedro Pimienta',
        titulo: 'Curso Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Pedro Pimienta',
        titulo: 'Curso Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Pedro Pimienta',
        titulo: 'Curso Node'
    });
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});

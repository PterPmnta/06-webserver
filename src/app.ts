import express from 'express';
import path from 'path';
import hbs from 'hbs';

const app = express();
const port = 8080;
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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

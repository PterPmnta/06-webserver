import express from 'express';
import path from 'path';

const app = express();
const port = 8080;
const __dirname = path.resolve(path.dirname(''));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo en su ruta');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/404.html'));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

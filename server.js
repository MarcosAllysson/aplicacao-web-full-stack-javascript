const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./connection');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
) 

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
});
//Curso
app.get('/cursos',db.getCursos);
app.get('/cursosOrder',db.getCursosOrder);
app.post('/cursos',db.inserirCurso);
app.put('/cursos',db.atualizaCurso);
app.delete('/cursos',db.deletaCurso);

//Usuario

app.get('/usuario',db.getUsuario);
app.post('/usuario', db.inserirCoordenador);
app.delete('/usuario',db.deleta_coor);
app.post('/usuario2',db.inserirAluno);
app.post('/usuario',db.inserirProfessor)

//Atividade
app.get('/atividade',db.getAtividade);
app.post('/atividade',db.setAtividade);
app.get('/filtroAluno', db.filtroAluno);
app.post('/filtroAluno',db.filtroAluno);

// Join 
app.get('/teste',db.selectJoin);
// AVG
app.get('/avg',db.mediaHorCursos);
// Busca 
app.get('/buscaIn',db.buscaIn);
app.post('/buscaIn',db.buscaIn);

app.listen(port, () => {
    console.log(`Rodando na Porta ${port}.`)
})
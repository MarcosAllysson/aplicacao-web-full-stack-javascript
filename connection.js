const Pool = require('pg').Pool
//Quando for fazer a conexão com o banco entrar com as suas credenciais 
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'horaComplementar',
    password: 'adm',
    port: 5432,
});
// Consultando a tabela cursos
const getCursos = (req, res) => {
    pool.query('SELECT * FROM cursos', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}
//Ordenando a tabela cursos
const getCursosOrder = (req, res) => {
    pool.query('SELECT * FROM cursos order by nome_curso', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}
// INserirndo um curso 
const inserirCurso = function (req, res) {
    const { id, nome, carga } = req.body;
    pool.query(`INSERT INTO cursos VALUES ($1,$2,$3)`, [id, nome, carga], (error, results) => {
        if (error) {
            throw error
        }
        res.status(201).json(results.rows);
    })
}

//Atualizando Curso 
const atualizaCurso = function (req, res) {
    const { id, nome, carga } = req.body;
    pool.query('UPDATE cursos SET nome_curso = ($2), carga_hor_max = ($3) where (id_cursos = ($1))',
        [id, nome, carga], (error, results) => {
            if (error) {
                throw error
            }
            res.status(201).json(results.rows);
        })
}


//Deletando Curso
const deletaCurso = function (req, res) {
    //or (nome_curso = ($2)) or (carga_hor_max = ($3))
    //, nome, carga
    //, nome, carga
    const { id } = req.body;
    pool.query('DELETE FROM cursos WHERE (id_cursos = ($1)) ',
        [id], (error, results) => {
            if (error) {
                throw error
            }
            res.status(201).json(results.rows);
        })
}


//Consultando a tabela usuario
const getUsuario = (req, res) => {
    pool.query('SELECT * FROM usuarios', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

//criar coordenador
const inserirCoordenador = function (req, res) { //nome generico da função
    const { matricula, nome, tipo, login, senha, curso } = req.body;
    pool.query(`INSERT INTO usuarios (id_usuario, matricula, nome, tipo, login_user, senha_user, id_cursos_user ) 
     VALUES (default,$1,$2,$3,$4,$5,$6)`, [matricula, nome, tipo, login, senha, curso], (error, results) => {
        if (error) {
            throw error
        }
        res.status(201).json(results.rows);
    })
}

//deletar coordenador
const deleta_coor = function (req, res) {
    const { id } = req.body;
    pool.query('DELETE FROM usuarios WHERE (id_usuario = ($1))',
        [id], (error, results) => {
            if (error) {
                throw error
            }
            res.status(201).json(results.rows);
        })
}

//Consultando a tabela atividade
const getAtividade = (req, res) => {
    pool.query('SELECT * FROM atividades', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}
const setAtividade = (req, res) => {
    const { Semestre, atividade, horas } = req.body
    pool.query(`INSERT INTO atividades VALUES ($1,$2,$3)`, [Semestre, atividade, horas], (error, results) => {
        if (error) {
            throw error
        }
        res.status(201).send(`Horas Adicionadas`);
    })
}

const filtroAluno = (req, res) => {
    const { id } = req.body
    pool.query('SELECT * FROM atividades where id_atividade = ($1)', [id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

//comandos para aluno
//criar aluno
const inserirAluno = function (req, res) { //nome generico da função
    const { matricula, nome, horas_ac, curso, tipo, login, senha } = req.body;
    pool.query(`INSERT INTO usuarios (id_usuario, matricula, nome, horas_acum, tipo, login_user, senha_user, id_cursos_user ) 
     VALUES (default, $1, $2, $3, $4, $5, $6, $7)`, [matricula, nome, horas_ac, tipo, login, senha, curso], (error, results) => {
        if (error) {
            throw error
        }
        res.status(201).json(results.rows);
    })
}

//comandos para professor
//criar professor
const inserirProfessor = function (req, res) { //nome generico da função
    const { matricula, nome, tipo, login, senha, curso } = req.body;
    pool.query(`INSERT INTO usuarios (id_usuario, matricula, nome, tipo, login_user, senha_user, id_cursos_user ) 
     VALUES (default,$1,$2,$3,$4,$5,$6)`, [matricula, nome, tipo, login, senha, curso], (error, results) => {
        if (error) {
            throw error
        }
        res.status(201).json(results.rows);
    })
}

//Select com join
//SELECT atividades.nome_ativ, usuarios.nome FROM usuarios  inner JOIN atividades ON atividades.id_cursos_at = usuarios.id_cursos_user WHERE atividades.nome_ativ LIKE 'M%'
//SELECT AVG(carga_hor_max) FROM cursos 
const selectJoin = (req, res) => {
    pool.query('SELECT atividades.nome_ativ, usuarios.nome FROM usuarios inner JOIN atividades ON atividades.id_cursos_at = usuarios.id_cursos_user', (error, result) => {
        if (error) {
            throw error
        }
        res.status(200).json(result.rows)
    })
}
// Select Avg
const mediaHorCursos = function (req, res) {
    pool.query('SELECT AVG(carga_hor_max) FROM cursos', (error, result) => {
        if (error) {
            throw error
        }
        res.status(200).json(result.rows)
    })
}
// Select in 
const buscaIn = function(req,res){
    const {range1,range2} = req.body;
    pool.query('SELECT * FROM cursos WHERE carga_hor_max in($1,$2)', [range1,range2],(error,results)=>{
        if(error){
            throw error
        }
        res.status(200).json(results.rows)
    })
}

// Consultar aluno:
const getAluno = function(req,res){
    //const {range1,range2} = req.body;
    pool.query('select * from consultaAlunoCurso ', (error, result) => {
        if (error) {
            throw error
        }
        res.status(200).json(result.rows)
    })
}

// const getAluno2 = function(req,res){
//     const {idA, idC } = req.body;
//     pool.query('SELECT usuarios.nome, cursos.nome_curso FROM cursos inner JOIN usuarios ON  usuarios.id_cursos_user = cursos.id_cursos where (usuarios.id_usuario = ($1)) AND (cursos.id_cursos = ($2))', [idA, idC], (error, result) => {
//         if (error) {
//             throw error
//         }
//         res.status(200).json(result.rows)
//     })
// }


//Exportando a função
module.exports = {
    getCursos,
    getAtividade,
    getUsuario,
    setAtividade,
    getCursosOrder,
    inserirCurso,
    atualizaCurso,
    deletaCurso,
    inserirCoordenador,
    deleta_coor,
    filtroAluno,
    inserirAluno,
    inserirProfessor,
    selectJoin,
    mediaHorCursos,
    buscaIn,
    getAluno
}
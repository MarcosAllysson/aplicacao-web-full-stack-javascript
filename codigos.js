//inserir coordenador
function salvar_coor() {
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/usuario',
        data: {
            'matricula': $('#matricula_coor').val(),
            'nome': $('#nome_coor').val(),
            'curso': $('#curso_coor').val(),
            'tipo': $('#tipo_coor').val(),
            'login': $('#login_coor').val(),
            'senha': $('#senha_coor').val(),

        },
        success: function (dados) {
            console.log(dados);
            $('#saida_coor').text(`Coordenador inserido com sucesso`);
        },
        error: function (dados) {
            console.log(dados);
            $('#saida_coor').text(`Coordenador inserido sem sucesso`);
        }
    })
}
//consultar coordenador
function ver_coor() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/usuario',
        success: function (dados) {
            for (let i in dados) {
                $('#saida_coor').html('<table><tr><td>ID</td><td>Matrícula</td><td>Nome</td><td>Semestre</td><td>Tipo</td><td>Login</td></tr></table>')
                $('#saida_coor').append(
                    `<fieldset><table border='1'>
                        <tr>
                            <td>${dados[i].id_usuario}</td> 
                            <td>${dados[i].matricula}</td>
                            <td>${dados[i].nome}</td> 
                            <td>${dados[i].semestre}</td> 
                            <td>${dados[i].tipo}</td> 
                            <td>${dados[i].login_user}</td> 
                            <td>${dados[i].id_cursos_user}</td>
                        
                        </tr>
                    </table></fieldset>`)
                //dados do banco de dados
                console.log(dados[i]);
            }
        },
        error: function (dados) {
            console.log(dados);
        }
    })
}
//deletar coordenador
function del_coor() {
    $.ajax({
        type: 'DELETE',
        url: 'http://localhost:3000/usuario',
        data: {
            'id': $('#curso_coor').val(),
        },
        success: function (dados) {
            console.log(dados);
            $('#saida_coor').text(`Coordenador Removido com sucesso`);
        },
        error: function (dados) {
            console.log(dados);
            $('#saida_coor').text(`Coordenador Removido sem sucesso`);
        }
    })
}


//cursos
function verCursos() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/cursos',
        success: function (dados) {
            for (let i in dados) {
                $('.tCurso').eq(0).html('<table><tr><td>Nome do Curso</td><td>Carga Horária Máxima</td></tr></table>')
                $('.tCurso').eq(1).append(
                    `<fieldset><table>
                        <tr>
                            <td>${dados[i].nome_curso}</td>
                            <td>${dados[i].carga_hor_max}</td>
                        </tr>
                    </table></fieldset>`)
                console.log(dados[i]);
            }
        },
        error: function (dados) {
            console.log(dados);
        }
    })
}
function ordernarCursos() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/cursosOrder',
        success: function (dados) {
            for (let i in dados) {
                $('.tCurso').eq(1).append(
                    `<table>
                        <tr>
                            <td>${dados[i].id_cursos}</td>
                            <td>${dados[i].nome_curso}</td>
                            <td>${dados[i].carga_hor_max}</td>
                        </tr>
                    </table>`)
                console.log(dados[i]);
            }
        },
        error: function (dados) {
            console.log(dados);
        }
    })
}
function inserirCursos() {
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/cursos',
        data: {
            'id': $('#id_cursos').val(),
            'nome': $('#nome_curso').val(),
            'carga': $('#carga_hor_max').val(),
        },
        success: function (dados) {
            console.log(dados);
            $('#mensagem').text(`Curso inserido com sucesso`);
        },
        error: function (dados) {
            console.log(dados);
            $('#mensagem').text(`Curso inserido sem sucesso`);
        }
    })
}
function atualizarCurso() {
    $.ajax({
        type: 'PUT',
        url: 'http://localhost:3000/cursos',
        data: {
            'id': $('#id_cursos').val(),
            'nome': $('#nome_curso').val(),
            'carga': $('#carga_hor_max').val(),
        },
        success: function (dados) {
            console.log(dados);
            $('#mensagem').text(`Curso Atualizado com sucesso`);
        },
        error: function (dados) {
            console.log(dados);
            $('#mensagem').text(`Curso Atualizado sem sucesso`);
        }
    })
}

function removerCurso() {
    // ,
    //         'nome': $('#nome_curso').val(),
    //         'carga': $('#carga_hor_max').val(),
    $.ajax({
        type: 'DELETE',
        url: 'http://localhost:3000/cursos',
        data: {
            'id': $('#id_cursos').val()
        },
        success: function (dados) {
            console.log(dados);
            $('#mensagem').text(`Curso Removido COM sucesso`);
        },
        error: function (dados) {
            console.log(dados);
            $('#mensagem').text(`Curso Removido SEM sucesso`);
        }
    })
}
function searchIn() {
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/buscaIn',
        data:{
            "range1":$('#range1').val(),
            "range2":$('#range2').val(),
        },
        success: function (dados) {
                $('.tCurso').eq(0).html(`<p>SELECT * FROM cursos WHERE carga_hor_max in(${$('#range1').val()},${$('#range2').val()})</p>`)
                for(let i in dados){
                $('.tCurso').eq(1).append(
                    `<table>
                        <tr>
                            <td>${dados[i].nome_curso}</td>
                            <td>${dados[i].carga_hor_max}</td>
                        </tr>
                    </table>`)
                console.log(dados);
            }
        },
        error: function (dados) {
            console.log(dados);

        }
    })
}
function reload(){location.reload();}
//Códigos referentes a aluno.html
//Inserir aluno


function salvar_al() {
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/usuario2',
        data: {
            'matricula': $('#matricula_al').val(),
            'nome': $('#nome_al').val(),
            'horas_ac': $('#horas_add').val(),
            'curso': $('#curso_al').val(),
            'tipo': $('#tipo_al').val(),
            'login': $('#login_al').val(),
            'senha': $('#senha_al').val()

        },
        success: function (dados) {
            console.log(dados);
            $('#saida_al').text(`Aluno inserido com sucesso`);
        },
        error: function (dados) {
            console.log(dados);
            $('#saida_al').text(`ERRO!!!, Aluno inserido sem sucesso`);
        }
    })
}

//Códigos referentes a professor.html
//Inserir professor
function salvar_prof() {
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/usuario',
        data: {
            'matricula': $('#matricula_prof').val(),
            'nome': $('#nome_prof').val(),
            'curso': $('#curso_prof').val(),
            'tipo': $('#tipo_prof').val(),
            'login': $('#login_prof').val(),
            'senha': $('#senha_prof').val()

        },
        success: function (dados) {
            console.log(dados);
            $('#saida_prof').text(`Professor inserido com sucesso`);
        },
        error: function (dados) {
            console.log(dados);
            $('#saida_prof').text(`ERRO!!!, Professor inserido sem sucesso`);
        }
    })
}

// consultar aluno
function consultarAluno() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/aluno',
        success: function (dados) {
            for (let i in dados) {
                $('.tableAluno').html('<table><tr><td>Nome do Aluno | </td><td>Cursando </td> </tr></table>')
                $('.tableHora').append(
                    `<table>
                        <tr>
                            <td>${dados[i].nome} | </td>
                            <td>${dados[i].nome_curso}</td>
                        </tr>
                    </table>`)
                console.log(dados[i]);
            }
        },
        error: function (dados) {
            console.log(dados);
        }
    })
}

// function consultarAluno2() {
//     $.ajax({
//         type: 'POST',
//         url: 'http://localhost:3000/aluno',
//         data: { 'idA': $('#nomeAluno').val(), 'idC': $('#cargaHoraria').val() },
//         success: function (dados) {
//             for (let i in dados) {
//                 $('.tableAluno').html('<table><tr><td>Nome do Aluno | </td><td>Cursando </td> </tr></table>')
//                 $('.tableHora').append(
//                     `<table>
//                         <tr>
//                             <td>${dados[i].nome} | </td>
//                             <td>${dados[i].nome_curso}</td>
//                         </tr>
//                     </table>`)
//                 console.log(dados[i]);
//             }
//         },
//         error: function (dados) {
//             console.log(dados);
//         }
//     })
// }


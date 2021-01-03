--Criando o Banco de dados Horas Complementares
--CREATE DATABASE horasComplementares;

--Criando a tabela cursos
CREATE TABLE cursos(
    id_cursos int primary key,
    nome_curso varchar(100),
    carga_hor_max int
);
-- Criando a tabela Usuarios
CREATE TABLE usuarios(
    id_usuario serial primary key,
    matricula varchar(20),
    nome varchar(50),
    semestre varchar(12),
    horas_acum int,
    tipo varchar(100), -- adm, aluno, coordenador
    CPF varchar(15),
    login_user varchar(50),
    senha_user varchar(50),
    id_cursos_user int references cursos(id_cursos)
);
--Criando a tabela atividades
CREATE TABLE atividades(
    id_atividade serial primary key,
    nome_ativ varchar(100),
    id_cursos_at int references cursos(id_cursos)
);

-- Inserindo valores na tabela cursos
insert into cursos values 
	(1,'Tecnologia em Sistemas Para Internet',100),
	(2,'Tecnologia em Processos Gerenciais',100),
	(3,'Tecnologia em Gestão Pública',100),
	(4,'Tecnologia em Eventos',100),
	(5,'Licenciatura em Dança',300),
	(6,'Licenciatura em Letras - Língua Espanhola',300),
	(7,'Licenciatura em Matemática',300),
	(8,'Bacharel em Administração',300),
	(9,'Licenciatura em Química',300),
	(10,'Tecnologia em Alimentos',100),
	(11,'Tecnologia em Logística',100),
	(12,'Licenciatura em Biologia',300),
	(13,'Tecnologia em Agroecologia',100),
	(14,'Tecnologia em Gastronomia',100),
	(15,'Licenciatura em Geografia',300),
	(16,'Licenciatura em Letras - Lingua Ingles',300),
	(17,'Licenciatura em Letras - Lingua Português',300),
	(18,'Licenciatura em Pedagogia',300),
	(19,'Tecnologia em Secretariado',100),
	(20,'Bacharel em Ciências da Computação',300),
	(21,'Licenciatura em Ciências da Computação',300),
	(22,'Tecnologia em Automação Industrial',100),
	(23,'Tecnologia em Design de Moda',100),
	(24,'Licenciatura em Física',300),
	(25,'Banco de dados 2',1324);--Excluir 
	
-- Inserindo Valores na Tabela Atividades 
INSERT INTO atividades VALUES 
	(1,'Monitoria',1),
    (2,'Monitoria',2),
    (3,'Monitoria',3),
    (4,'Monitoria',4),
    (5,'Monitoria',5),
    (6,'Monitoria',6),
	(7,'Monitoria',7),
    (8,'Monitoria',8),
    (9,'Monitoria',9),
    (10,'Monitoria',10),
    (11,'Monitoria',11),
    (12,'Monitoria',12),
    (13,'Monitoria',13),
    (14,'Monitoria',14),
    (15,'Monitoria',15),
    (16,'Monitoria',16),
    (17,'Monitoria',17),
    (18,'Monitoria',18),
    (19,'Monitoria',19),
    (20,'Monitoria',20),
    (21,'Monitoria',21),
    (22,'Monitoria',22),
    (23,'Monitoria',23),
    (24,'Monitoria',24),
    (25,'Congresso',1),
    (26,'Congresso',2),
    (27,'Congresso',3),
    (28,'Congresso',4),
    (29,'Congresso',5),
    (30,'Congresso',6),
    (31,'Congresso',7),
    (32,'Congresso',8),
    (33,'Congresso',9),
    (34,'Congresso',10),
    (35,'Congresso',11),
    (36,'Congresso',12),
    (37,'Congresso',13),
    (38,'Congresso',14),
    (39,'Congresso',15),
    (40,'Seminário',16),
    (41,'Seminário',17),
    (42,'Seminário',18),
    (43,'Seminário',19),
    (44,'Seminário',20),
    (45,'Seminário',21),
    (46,'Seminário',22),
    (47,'Seminário',23),
    (48,'Seminário',24),
    (49,'Seminário',1),
    (50,'Seminário',2),
    (51,'Seminário',3),
    (52,'Seminário',4),
    (53,'Seminário',5),
    (54,'Seminário',6),
    (55,'Seminário',7),
    (56,'Seminário',8),
    (57,'Seminário',9),
    (58,'Seminário',10),
    (59,'Seminário',11),
    (60,'Seminário',12),
    (61,'Seminário',13),
    (62,'Seminário',14),
    (63,'Seminário',15),
    (64,'Seminário',16),
    (65,'Seminário',17),
    (66,'Seminário',18),
    (67,'Seminário',19),
    (68,'Seminário',20),
    (69,'Seminário',21),
    (70,'Semanas Acadêmicas',10),
    (71,'Semanas Acadêmicas',11),
    (72,'Semanas Acadêmicas',12),
    (73,'Semanas Acadêmicas',13),
    (74,'Semanas Acadêmicas',14),
    (75,'Semanas Acadêmicas',15),
    (76,'Semanas Acadêmicas',16),
    (77,'Semanas Acadêmicas',17),
    (78,'Semanas Acadêmicas',18),
    (79,'Semanas Acadêmicas',19),
    (80,'Semanas Acadêmicas',20),
    (81,'Semanas Acadêmicas',21),
    (82,'Semanas Acadêmicas',22),
    (83,'Semanas Acadêmicas',23),
    (84,'Semanas Acadêmicas',24),
    (85,'Semanas Acadêmicas',1),
    (86,'Semanas Acadêmicas',2),
    (87,'Semanas Acadêmicas',3),
    (88,'Semanas Acadêmicas',4),
    (89,'Semanas Acadêmicas',5),
    (90,'Semanas Acadêmicas',6),
    (91,'Semanas Acadêmicas',7),
    (92,'Semanas Acadêmicas',8),
    (93,'Semanas Acadêmicas',9),
    (94,'Semanas Acadêmicas',10),
    (95,'Semanas Acadêmicas',21),
    (96,'Semanas Acadêmicas',22),
    (97,'Semanas Acadêmicas',23),
    (98,'Semanas Acadêmicas',24);

-- entering users into users table
insert into usuarios values
	(default, 01, 'Andre', '4', 50, 'aluno', 123321123, 'login1', 'senha1', 1),
    (default, 02, 'Andre', '4', 50, 'aluno', 122321123, 'login2', 'senha2', 2),
	(default, 03, 'Luiz', '5', 50, 'adm', 123087123, 'login3', 'senha3', 3),
	(default, 04, 'Douglas', '7', 50, 'coordenador', 098321123, 'login4', 'senha4', 4),
	(default, 05, 'Seidi', '2', 50, 'aluno', 123321123, 'login5', 'senha5', 5),
	(default, 06, 'Marcos', '3', 50, 'aluno', 123321673, 'login6', 'senha6', 6),
	(default, 07, 'Allysson', '2', 50, 'coordenador', 872321123, 'login7', 'senha7', 7),
	(default, 08, 'Luiz Andre', '6', 50, 'aluno', 412321123, 'login8', 'senha8', 8),
	(default, 09, 'Douglas Seidi', '3', 50, 'adm', 512321123, 'login9', 'senha9', 9),
	(default, 10, 'Marcos Allysson', '2', 50, 'aluno', 612321123, 'login10', 'senha10', 10);

/*
create view nomeQualquer as 
(SELECT cursos.nome_curso, usuarios.nome, usuarios.horas_acum FROM usuarios  inner JOIN cursos ON cursos.id_cursos = usuarios.id_cursos_user );

select * from nomeQualquer
*/

/*CREATE VIEW vwCurso_At as SELECT nome_curso, carga_hor_max, nome_ativ FROM cursos inner join atividades on cursos.id_cursos = atividades.id_curso_at
DROP VIEW vwCurso_at
SELECT * FROM vwCurso_At; */


-- tabela backup cursos
--------------- TRIGGER
CREATE TABLE bk_cursos(
    id_cursos int primary key,
    nome_curso varchar(100),
    carga_hor_max int
);

-- criando função de trigger
create or replace function backupCurso()
returns trigger as 
$BODY$ begin -- começo da função
insert into bk_cursos values (old.id_cursos, old.nome_curso, old.carga_hor_max); -- old é o dado que estão sendo excluídos
return null; -- porque é uma função que exige retorno
end $BODY$ -- fim da função
language 'plpgsql'

-- criando trigger pra tabela cliente
create trigger exclusao_curso -- nome da trigger
after delete -- após deletar dados
on cursos -- na tabela cliente 
for each row -- pra cada linha
execute procedure backupCurso(); -- chama a função 




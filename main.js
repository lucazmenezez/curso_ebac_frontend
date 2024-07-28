// function Objeto(nomeAluno, notaAluno) {
//     this.nome = nomeAluno;
//     this.nota = notaAluno;
// }
// FORMA ANTIGA

class Objeto {
    constructor(nomeAluno, notaAluno) {
        this.nome = nomeAluno;
        this.nota = notaAluno;
    }
}

const aluno1 = new Objeto("Marcio", 6);
const aluno2 = new Objeto("Igor", 2);
const aluno3 = new Objeto("Edson", 9);
const aluno4 = new Objeto("Ana", 5);
const aluno5 = new Objeto("Carlos", 8);

const arrayAlunos = [aluno1, aluno2, aluno3, aluno4, aluno5];

const alunosAprovados = arrayAlunos.filter((aluno => aluno.nota >= 6));

alunosAprovados.forEach(aluno => console.log(`O aluno ${aluno.nome} foi aprovado.`));
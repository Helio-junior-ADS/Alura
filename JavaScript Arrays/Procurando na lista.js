// Crie uma funcao que recebe como argumento o nome de um aluno.
// Verifique se o aluno está presente na lista e retorne a média final que se encontra no mesmo indice.
// Caso o nome do aluno não esteja na lista, retorne uma mensagem indicando que o aluno não foi encontrado.

const Alunos = ['João','Juliana', 'Caio', 'Ana'];
const MediaDosAlunos = [10,7,9,6];

const listaDeNotasEalunos = [Alunos,MediaDosAlunos];

// includes -> Retorna um booleano
//IndexOF -> Rertorna um number

const exibeNomeNota = (nomeDoAluno) => {
  if(listaDeNotasEalunos[0].includes(nomeDoAluno)){ // 'includes' retorna verdadeiro ou falso ou seja verifica se o dado informado consta na lista.
   let indice = listaDeNotasEalunos[0].indexOf(nomeDoAluno) // indexOF retorna um numero. Ou seja verifica qual posicao no index estar o parâmetro informado. 
    return listaDeNotasEalunos[0][indice] + ', Sua media é ' + listaDeNotasEalunos[1][indice] // Como indexOf retorna um numero ele é passado como array []
  } else{
    return "Aluno não esta cadastrado"
  }
}

console.log(exibeNomeNota('Ana'));

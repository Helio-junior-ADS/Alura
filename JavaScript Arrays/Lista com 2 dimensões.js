const Alunos = ['João','Juliana', 'Caio', 'Ana'];
const MediaDosAlunos = [10,7,9,6];

const listaDeNotasEalunos = [Alunos,MediaDosAlunos]; // Cria um novo array com uma nova variavel para juntar os dois arrays

console.log(`${listaDeNotasEalunos[0][0]} sua media é ${listaDeNotasEalunos[1][0]}`); // Primeiro cochete [0] acessar a primeira lista 'Alunos', segundo cochete acessa o index '0'. // sainda 'João'.  Primeiro cochete [1] acessar o array 2 'MediaDosAlunos', segundo cochete acessa o index [0]. // saida '10'  
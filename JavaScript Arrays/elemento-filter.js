const nome = ['Ana', 'Marcos', 'Maria', 'Mauro']
const nota = [7, 4.5, 8, 7.5];

// filter retorna booleano.
// Quando a função callback retorna verdadeiro, ou true, o elemento é adicionado no array de retorno, e quando ela retorna falso, ou false, o elemento é descartado.


const reprovados = nome.filter((aluno, indice) => nota[indice] < 5)
  console.log(`reprovados: ${reprovados}`)
  
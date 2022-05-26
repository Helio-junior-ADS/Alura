const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinicius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const sala1 = nomes.slice(0, nomes.length/2); // Dois paramentros = Comeco e fim 
const sala2 = nomes.slice(nomes.length/2); // Quando voce coloca so uma paramentro ele vai comecar e ir ater o final do array 

console.log(`Alunos da Sala 1: ${sala1}`);
console.log(`Alunos da Sala 1: ${sala2}`);

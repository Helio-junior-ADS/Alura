const notas = [10, 9, 8, 7, 6];

// Uma função callback é uma função passada a outra função como argument
// O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++ nota );

console.log(notasAtualizadas);

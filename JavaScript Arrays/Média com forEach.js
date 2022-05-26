// Calcular a média entre as seguintes Notas usando o ForEach.

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

// notas.forEach(nota => {
//   somaDasNotas += nota;
// })


notas.forEach(nota =>{ // ForEach usa uma funcao callback
   somaDasNotas += nota;
})

let media = somaDasNotas/notas.length;

console.log(media);
// Calcule a média entre as seguintes notas usando o 'FOR'.

const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;

for(i = 0; i < notas.length; i++){
  somaDasNotas += notas[i]
  
};

let media = somaDasNotas / notas.length;

console.log(media);
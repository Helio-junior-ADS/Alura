const notas = [5, 12, 8, 130, 44];

const MetodoFind = notas.find(notas => notas > 10); // O método find() retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. Caso contrario, undefined é retornado.

console.log(MetodoFind);
function Menor (valor){ 
  return valor >= 10;
}

const notas = [8, 9, 5, 10].filter(Menor) // Faz um filtro para retorno baseado em uma funcao 'Filter'


console.log(notas);
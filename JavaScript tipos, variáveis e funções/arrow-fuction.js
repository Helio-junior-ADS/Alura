function apresentar (nome){
  return `Meu nome é ${nome}`
}

// arrow function com uma linha 
const ArrowApresentar = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

// Arrow function com duas linhas 

const somaDeNumeroPequenos = (num1, num2) => {
  if (num1 || num2 > 10){
    return 'Somente numero de 1 a 9'
  }else {
    return num1 + num2;
  }
}




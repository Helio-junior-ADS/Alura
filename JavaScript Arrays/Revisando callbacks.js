

// function imprimeNome(nome){
//   console.log(nome);
// };


// function soma (callback){
// let nome = ['Helio','Junior','Francisco']
// callback(nome); 
// }


// soma(array => {
//   console.log(array);
// });


function exibe(num){
  console.log("A operação resultor em:",num)
}


function soma (x, y, callback){
  op = x + y;
  callback(op);
}

function multi (x, y, callback){
  op = x * y;
  callback(op);
}

multi(2, 3, exibe);
soma(70,5, exibe)

function divisao (x, y, callback){
  op = x / y;
  callback(op);
}

divisao(100,20, exibe)


function valor (callback){
  let resultado = 10;
  callback(resultado);
}

valor((x)=>{
  console.log(x);
})


const ListaDeChamadas = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

// ListaDeChamadas.splice(1,2,'Rodrigo'); // 3 paramentros: 1 paramentro indica o indice da extração, 2 paramentro indica o fim da extração, 3 paramentro é opcional caso voce queira colocar um elemento dentro de um array.

ListaDeChamadas.splice(2, 0,'Rodrigo' ); // Coso vc nao queira tirar algum elemento é só colocar 0 no Segundo parametro ai sera add o elemento 'Rodrigo' no indice 2 

console.log(ListaDeChamadas);
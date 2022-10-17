
//PARTE 1 - CRIAÇÃO DE ARRAYS

const pets = ['gato', 'cachorro', 'gavião']
const numeros = [7,5,9]
const arrayMisto = [10, 'Olá', true]
const umItem = [1]
const vazio = []

//PARTE 2 - OBSERVAÇÃO DE ARRAYS

console.log(pets.length);
console.log(pets[2]);
console.log(arrayMisto.includes(10));
console.log(arrayMisto.includes('Olá'));
console.log(arrayMisto.includes(true));
console.log(umItem);
console.log(umItem.length);

//PARTE 3 - MANIPULAÇÃO DE ARRAYS

/*const copiaPets = pets
console.log(copiaPets, pets);
copiaPets.push('tigre')
console.log(copiaPets, pets);*/

const copiaPets = pets.slice()
// Slice cria uma cópia do array para que as alterações feitas na cópia não alterem a original.
console.log(copiaPets, pets);
copiaPets.push('tigre')
console.log(copiaPets, pets);

copiaPets.splice(2,2)
// Splice (índice, quantidade). Splice remove à partir do índice escolhido a quantidade escolhida de indíces na sequência
console.log(copiaPets, pets);
console.log(pets.sort()); //Reordena o array de strings em ordem crescente alfabética e/ou também pela primeira letra da string maiúscula. Já para o number precisa de uma função atrelada para organizá-lo corretamente em ordem crescente. 
console.log(numeros);
console.log(numeros.sort());

//EXERCÍCIO DE FIXAÇÃO

//1. Crie um novo array. Ele deve possuir apenas números, e estes números não devem seguir nenhuma ordem específica.
const arrayNumeros = [5, 2, 7, 4, 9]

//2. Imprima no console o array original, depois imprima-o ordenado em ordem crescente e invertida.
console.log(arrayNumeros);
console.log(arrayNumeros.sort());
console.log(arrayNumeros.reverse());

//3. Remova o último item do array, e em seguida, adicione o número 6.
const copiaArrayNumeros = arrayNumeros.slice();
copiaArrayNumeros.splice(4,1)
console.log(copiaArrayNumeros);
copiaArrayNumeros.push(6)
console.log(copiaArrayNumeros);

// Depois, remova o número que está no índice 2 do array. Em seguida, remova o último número. Por fim, imprima os 2 arrays.
copiaArrayNumeros.splice(2,1)
console.log(copiaArrayNumeros);

copiaArrayNumeros.pop();
console.log(copiaArrayNumeros, arrayNumeros);

//ALGUMAS PROPRIEDADES E MÉTODOS DO ARRAY

/*variavel.length - A propriedade length Diz qual é a quantidade de itens de um array.

variavel.pop() - O método pop remove o último item do array.

variavel.push(elemento) - O método push adiciona um ou mais elementos ao final de um array

variavel.includes(elemento) - O método includes determina se um array contém um determinado elemento, retornando true ou false

variavel.splice(índice, quantidade) - remove quantidade de elementos à partir da posição índice do array. Todo índice de um array começa por zero.

unshift() - adiciona novo item como primeiro item do array (índice 0)

shift() - remove o primeiro item do array (índice 0)

join() Devolve os itens do array concatenados como uma string 

indexOf(valor) - Devolve o primeiro índice que tenha valor igual ao passado entre parênteses

sort() - Organiza os itens de um array

reverse() - Reverte a ordem dos itens de um array








































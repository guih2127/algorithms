// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.


// rotacionar o array pra DIREITA k vezes.
// input
// nums = [1,2,3,4,5,6,7], k = 3
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
function rotate(nums, k) {
    if (nums.length == 1)
        return nums;

    const numberOfIndexes = nums.length - 1;
    const numberOfRotations = k;

    for (let i = 0; i < numberOfRotations; i++) {
        const lastNumber = nums[numberOfIndexes];

        for (let j = numberOfIndexes - 1; j >= 0; j--) {
            nums[j + 1] = nums[j];
        }

        nums[0] = lastNumber;
    }

    return nums;
}

function rotate2(nums, k) {
    const rotations = k % nums.length;
    if (rotations === 0) {
        return nums;
    }
    // com o %, pegamos o resto da divisão de k pelo tamanho do array.
    // ou seja, pra um k de 3 e array de 7 items, teremos um resto de 3,
    // ja que a divisão não acontece.
    // pra um array de 4 itens e 4 k, o numero de rotations será 0, 
    // e não precisamos rotacionar o array.
    // além disso, pra um array de 4 elementos e 8 k, tambem teremos 0
    // rotations, e nao precisaremos rotacionar o array
    // fazendo dessa forma, tambem garantimos que k não será maior que nums.length.

    // com o splice, deletamos os ultimos x elementos da array e adicionamos em uma nova array
    // chamada removedElements. no caso de um array com k de 3 e array de 7 itens, pegaremos todos os itens
    // a partir do index 4 do array, ou seja, os últimos 3 itens.
    const removedElements = nums.splice(nums.length - rotations);

    // por  ultimo, o unshift adiciona os elementos removidos no inicio do array
    nums.unshift(...removedElements);

    // a solução obtendo o resto é boa porque, se k > arr.length, quer dizer que vamos dar uma volta no array,
    // voltando ela pro estado inicial. assim, detectamos quantas vezes isso vai acontecer e pegamos apenas as 
    // alterações que vão acontecer no array após essas voltas.
}

console.log(rotate2([1, 2, 3, 4], 8))

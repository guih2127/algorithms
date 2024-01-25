// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

function moveZeros(nums) {
    let countOfNonZeroElements = 0;

    // fazemos um loop no array ao mesmo tempo que mantemos a contagem dos elementos DIFERENTES de zero
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) { 
            // se o elemento for diferente de 0, atribuimos o elemento do array com indice = count ao elemento do array que está sendo iterado
            // ou seja, enquanto o elemento nao for zero, o array nao vai mudar, mas quando iterarmos um elemento = 0, não entraremos nesse loop,
            // fazendo com que i se diferencie do nosso count, sendo assim, iremos fazer, por exemplo, nums[2] = nums[3], trazendo o elemento
            // para o início do array, APENAS quando ele não for 0.
            nums[countOfNonZeroElements] = nums[i];
            countOfNonZeroElements++;
        }
    }

    // no final, fazemos apenas um loop no nosso contador para trocarmos os itens do fim para 0
    for (let i = countOfNonZeroElements; i < nums.length; i++) {
        nums[i] = 0;
    }

    return nums;
}

console.log(moveZeros([0,1,0,3,12]));
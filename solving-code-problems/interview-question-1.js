// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false


// input: 2 arrays. output: boolean (true, false) -> sem limite de tamanho
// obs: é importante perguntar se existe um limite de tamanho para os arrays: isso pode alterar a solução
// podemos perguntar tambem se o mais importante é a complexidade do tempo ou espaço. ou se ele quer a solução
// mais eficiente considerando arrays sem limite de tamanho.

// solução ruim -> o(n^2) = pouco escalável
// podemos começar com a solução mais inocente/bruta possível. uma solução fácil que não é a mais eficiente
// é importante dizer o por que essa solução pode não ser a melhor ---> O(n^2)
function hasAnyCommonItems(array1, array2) {
    for (i = 0; i < array1.length; i++) {
        for (j = 0; j < array2.length; j++) {
            if (array1[i] == array2[j]) {
                return true;
            }
        }
    }

    return false;
};

// podemos tentar uma solução diferente
// loop no primeiro array e criar objeto onde propriedades = itens no array
// depois disso, loop no segundo array e checar se o item no segundo array existe no objeto criado
// já podemos ver que vamos ter uma performance melhor que a primeira solução, já que serão dois loops que não estão alinhados
// dessa forma, teremos uma função O(a + b)
// é importante mostrar o nosso processo de pensamento para o entrevistador
function hasAnyCommonItemsGood(array1, array2) {
    let map = {};
    for (let i = 0; i < array1.length; i++) {
        if (!map[array1[i]]) {
            const item = array1[i];
            map[item] = true;
        }
    }
    
    for (let i = 0; i < array2.length; i++) {
        if (map[array2[i]]) {
            return true;
        }
    }

    return false;
};

var hasCommonItens = hasAnyCommonItemsGood([1, 2, 3, 4], [1, 6, 7, 8]);
console.log(hasCommonItens);
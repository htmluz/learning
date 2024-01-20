function quicksort(arr, left = 0, right = arr.length - 1) {
    if(left < right) { //valido se os pointers se encostam, 0 ou 1 items
        let pivotIndex = pivot(arr, left, right); //retorna o idx do pivot
        quicksort(arr, left, pivotIndex - 1); //chamando pra parte esquerda da array
        quicksort(arr, pivotIndex + 1, right); //chamando pra parte direita
    }
    return arr;
}

function swap (arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

function pivot(arr, strt = 0, end = arr.length + 1) {
    let pivot = arr[strt];
    let swapIdx = strt;

    for (let i = strt + 1; i < arr.length; i++) { 
        if (pivot > arr[i]) { //se o pivot for maior que o pointer i temos que fazer o swap
            swapIdx++; //incrementa o swapIdx pra ter uma ref do que vai ser trocado
            swap(arr, swapIdx, i); //troca o swapidx pelo i
        }
    }
    swap(arr, strt, swapIdx); //no fim troca o strt pelo swapIdx pra colocar no lugar o pivot
    return swapIdx; //retorno onde foi parar o pivot
}

console.log(quicksort([9, 1, 4, 12, 3, -12, 982, 23, -21212]))
function insertionsort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i]; //aqui seto o curr 
        for (var j = i - 1; j >= 0 && arr[j] > curr; j--) { //compara o curr com os valores anteriores
            console.log(j)
            arr[j + 1] = arr[j]; //se ele for maior vai mover ele pra frente
        }
        arr[j + 1] = curr; //aqui o que eu copiei vira o curr, indo 1 pra tras
    }
    return arr;
}
console.log(insertionsort([4,1,87,32,12]))
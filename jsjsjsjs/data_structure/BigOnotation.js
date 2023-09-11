const unique = (array) => {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        const ele = array[i];
        if (!newArray.includes(ele)) {
            newArray.push(ele);
        }
    }
    return newArray;
}



console.log(unique(['cat', 'dog', 'rat', 'dog', 'cat', 'bird']));

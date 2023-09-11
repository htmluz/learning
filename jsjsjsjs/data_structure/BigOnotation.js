const unique = (array) => {
    const onlyUniques = new Set();

    for (let i = 0; i < array.length; i++) {
        const ele = array[i];
        onlyUniques.add(ele);
    }
    return Array.from(onlyUniques);
}



console.log(unique(['cat', 'dog', 'rat', 'dog', 'cat', 'bird']));
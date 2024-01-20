function findLongestSubstring(str) {
    let longest = 0; //vou salvando o tamanho da substr
    let seen = {};
    let start = 0; //marca o inicio da substr

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (seen[char]) { //se a key existir no objeto
            start = Math.max(start, seen[char]) //atualizo o start para o max entre start e o index, pro start n retroceder
        }
        longest = Math.max(longest, i - start + 1); //aqui comparo o tamanho da substr atual com a maior
        seen[char] = i + 1; //aqui atualiza com o index mais recente + 1
    }
    return longest;
}





console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6

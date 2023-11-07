class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;


const reverse = (head) => {
    let prev = null;
    let curr = head;
    
    while (curr !== null) { 
        const next = curr.next;             //placeholder pra salvarmos o next
        curr.next = prev;                   //apontando o next para o previous
        prev = curr;                        //ai o previous node começa com o valor do node atual, antes era null dps a -> b -> c
        curr = next;                        //o curr vira o node que salvamos, que seria o next, pra ele entrar no loop e fazer o msm processo
    }               //um jeito melhor de entender é: Os nodes não mudam de lugar, apenas os pointers, então quando a -> b -> c -> d passa ele vira
                    //                                                                                             a <- b <- c <- d
    return prev;
}; //Time O(n)
   //Space O(n)


const reverseRecursive = (curr, prev = null) => {           //segundo argumento trabalha com um valor default
    if (curr === null) {
        return prev;
    } 
    const next = curr.next;
    curr.next = prev;
    return reverseRecursive(next, curr)                       //passando pra proxima iteracao o prox node e o prev o node que estou 
}

const print = (head) => {                   //função recursiva basica de print
    if (head === null) return;
    console.log(head.val);
    print(head.next);
}

print(a);
const newHead = reverseRecursive(a);
console.log("~~~~~");
print(newHead);

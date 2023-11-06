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



const deleteValue = (head, target) => {     //recebemos head e targe
    if (head.val === target) {              //se o valor do head for igual o target retornamos o next pra virar o head
        return head.next;
    }

    let prev = null;
    let curr = head;
    while (curr !== null) {                 //enquanto existir um node roda o loop
        if (curr.val === target) {          //se o val for igual o target
            prev.next = curr.next;          //setamos o pointer da prev que estava acompanhando um node atrás pro prox node, em vista do node que estamos  
        }
        prev = curr;                        //seta o prev como o curr
        curr = curr.next;                   //deleta o curr, trazendo o proximo node pra ele
    }

    return head;                            //retorna o head da linked list atualizado
}; //Time O(n) pq, no pior dos casos, se um target não existir vai ter que ir toda a linked list, sendo n o tamanho dela
   //Space O(1) pq é criado um número constante de variáveis e tá modificando uma linked list já existente, não copia ela

const print = (head) => {                   //função recursiva basica de print
    if (head === null) return;
    console.log(head.val);
    print(head.next);
}

const deleteValue2 = (head, target) => {
    if (head.val === target) {
        return head.next;                         //se quiser deletar o head só retorna o head.next e vira o novo head
    }
    _deleteValue2(head, null, target);            //estou passando esse null porque ainda não existe prev
    return head;
}

const _deleteValue2 = (curr, prev, target) => {   //criando uma helper pra receber mais argumentos na chamada
    if (curr === null) {                          //rodou a linked list e n achou nada, return
        return;
    }
    
    if (curr.val === target) {                    //se val for o target
        prev.next = curr.next;                    //prev pointer vira o pointer do node atual pulando o node atual
        return;
    }

    _deleteValue2(curr.next, curr, target)
}; //Time O(n)
   //Space O(n)

const newHead = deleteValue2(a, "d")         //deletamos o head e salvamos na nova variável o head
print(newHead)                              //com o retorno do head conseguimos printar a nova lista passando o head

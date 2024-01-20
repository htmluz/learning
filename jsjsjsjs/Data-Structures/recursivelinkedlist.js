class Node {
    constructor(val) { 
        this.val = val;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
    }

    append(val) {                       
        if (this.head === null) {
            this.head = new Node(val);
            return;
        }                               //como estamos fazendo uma linked list recursiva não podemos usar loops 

        this._append(val, this.head);
    }

    _append(val, curr) {                //helper function que vai receber o valor e também um curr 
        if (curr.next === null) {       //base case é, se n tem next vc tá no fim
        curr.next = new Node(val);      //adicionamos um next ao curr com um novo node, criando um novo tail
        return;
    }

        this._append(val, curr.next);   //aqui chamamos recursivamente passando o valor que queremos dar append, se next n for null vai continuar até ser 
    }

    print() {
        const output = this._print(this.head);      //usamos a helper pro usuário não precisar chamar a função passando o curr
        console.log(output);
    }

    _print(curr) {
        if (curr === null) return '';                      //se curr == null ou tá vazia ou chegou no fim 
        return curr.val + '->' + this._print(curr.next);   //se não, retornar o curr.val e chama novamente concatenando até ficar null
    }

    contains(target) {
        return this._contains(target, this.head);                  //chamo a helper com target e this.head como curr
    }

    _contains(target, curr) {                               //passo o target q to procurando e o curr
        if (curr === null) return false;                    //se tá vazia ou fui até o fim retorno false
        if (curr.val === target) return true;               //base case
        return this._contains(target, curr.next);           //se eu não encontrei ainda vou rodar de novo passando o curr o próximo node
    }


}


const list = new LinkedList();
list.append(11);
list.append(7);
list.append(10);
list.append(2);
list.print();


const sumList1 = (head) => {
    let sum = 0;
    let curr = head;
    while (curr !== null) {
        sum += curr.val;
        curr = curr.next;
    }
    return sum;
};
 //O(n) time, O(1) space

const sumList = (head) => {
    if (head === null) return 0;
    return head.val + sumList(head.next);
} //O(n) time, O(n) space



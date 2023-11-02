class Node {                //criando uma classe de nó
    constructor(val) {      //recebo o valor
        this.val = val;     //seto o valor do nó para o valor que foi passado
        this.next = null;   //inicio o nó com um valor default de null
    }
}

class LinkedList {                          //criando uma classe de Linked List
    constructor() {                         //
        this.head = null;                   //crio ela vazia
    }

    append(val) {                           //criando a função append pra adicionar um nó
        if (this.head === null) {           //se n tiver um head eu crio
            this.head = new Node(val);      //criando o primeiro nó em head
            return;                         //retorno ele
        }

        let curr = this.head;               //se já existir o head, seto o current local e começo a percorrer a linked list
        while (curr.next !== null) {        //enquanto next não for vazio continuo até chegar no final
            curr = curr.next;               //pego o meu current e seto pro current.next até achar o final
        }
        curr.next = new Node(val)           //setando o next do curr que pela validação do loop é vazio como o valor do próximo nó
    }

}


const list = new LinkedList();
list.append('a');
list.append('b');
list.append('c');
list.append('d');
console.log(list.head);
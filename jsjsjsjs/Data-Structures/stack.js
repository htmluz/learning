// using an array
/* 
const myStack = [];
myStack.push("a");
console.log(myStack)
myStack.push("b")
console.log(myStack)
myStack.pop()
console.log(myStack)
 */


class StackNode {           // crio uma classe que serve como placeholder
    constructor(val) {      // aqui uso meu constructor 
        this.val = val;     // aqui recebo o parâmetro passado pelo usuário
        this.next = null;   // aqui crio a key next dentro do objeto
    }
}

class Stack {               // crio a classe propriamente dita do stack
    constructor() {         // constructor
        this.top = null;    // key top inicia em null
        this.size = 0;      // key size inicia em 0 pois n tenho nada
    }

    push(val) {                                     // método pra adicionar elementos ao stack
        if (this.size === 0) {                      // aqui eu to vendo se é uma nova stack
            this.top = new StackNode(val);          // se for, passo meu dado dentro do top pra ele ser o primeiro da pilha
        } else {                                    
            const pushedNode = new StackNode(val);  // se não for crio uma variável chamando a classe placeholder
            pushedNode.next = this.top;             // o novo nó atualiza a key next dentro dele recebendo o valor do top atual
            this.top = pushedNode;                  // o novo top recebe o último parâmetro, dentro da variável 
        }

        this.size++;        // incrementa o size
    }

    
    pop() {                                         // método pra tirar elementos do stack
        if (this.size === 0) return null;           // se tamanho for 0 volta nada, n tem nada no stack
        const poppedNode = this.top;                // crio uma variavel pra colocar o top atual
        this.top = this.top.next;                   // o top atual recebe o next dele
        this.size--;                                // diminuo o size do meu stack
        return poppedNode.val;                      // retorno o valor removido
    }

    getTop () {
        return this.top.val;
    }

    
}

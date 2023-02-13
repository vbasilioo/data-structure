/******************* PILHAS ************************* */

/* METODOS DAS PILHAS */
function Stack(){
    var items = []

    this.push = function(element){
        // adiciona um novo item a pilha
        items.push(element)
    }

    this.pop = function(){
        //remover o item do topo da pilha
        return items.pop()
    }

    this.peek = function(){
        //devolve o elemento que esta no topo da pilha
        return items[items.length - 1]
    }

    this.isEmpty = function(){
        //informar se a pilha está vazia ou nao
        return items.length === 0
    }

    this.clear = function(){
        //limpa a pilha
        items = []
    }

    this.size = function(){
        //informa o tamanho da pilha
        return items.length
    }

    this.print = function(){
        // imprime a pilha no console
        //console.log(items.toString())
    }
}

var pilha = new Stack()

// exercicio decimal para binario

function dec2Bin(decNumber){
    var restStack = [],
    rest,
    binaryString = ''

    while(decNumber > 0){
        rest = Math.floor(decNumber % 2)
        restStack.push(rest)
        decNumber = Math.floor(decNumber / 2)
    }

    while(restStack.length > 0){
        binaryString += restStack.pop().toString()
    }

    return binaryString
}

//console.log(dec2Bin(25))
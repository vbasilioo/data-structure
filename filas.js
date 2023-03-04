/******************* FILAS ************************* */

function Queue(){
    var items = []

    this.enqueue = function(element){
        //adiciona um novo item
        items.push(element)
    }

    this.dequeue = function(){
        //remover um item da frente
        return items.shift()
    }

    this.front = function(){
        //retorna o primeiro elemento da fila
        return items[0]
    }

    this.isEmpty = function(){
        //verificar se a fila está vazia ou nao
        return items.length === 0
    }

    this.size = function(){
        //retorna tamanho da fila
        return items.length
    }

    this.print = function(){
        //imprimir a fila no console
        console.log(items.toString())
    }
}

//fila de prioridades
function PriorityQueue(){
    var items = []

    function QueueElement(element, priority){
        this.element = element
        this.priority = priority
    }   

    this.enqueue = function(element, priority){
        var queueElement = new QueueElement(element, priority)
        var added = false

        for(var i=0;i<items.length;i++){
            if(queueElement.priority < items[i].priority){
                items.splice(i, 0, queueElement)
                added = true
                break
            }
        }

        if(!added){
            items.push(queueElement)
        }
    }

    this.dequeue = function(){
        return items.shift()
    }

    this.print = function(){
        for(var i=0;i<items.length;i++){
            console.log(items[i].element + ' ' + items[i].priority)
        }
    }
}
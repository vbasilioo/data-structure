function DoubleLinkedList(){
    
    var Node = function(element){
        this.element = element
        this.next = null
        this.prev = null
    }

    var lenght = 0
    var head = null
    var tail = null

    this.append = function(element){
        //adiciona um elemento no final da lista
        var node = new Node(element),
        current

        if(head === null){
            head = node
        }else{
            current = head

            while(current.next){
                current = current.next
            }

            current.next = node
        }

        lenght++
    }

    this.insert = function(position, element){
        //adiciona um elemento em uma posicao especifica
        // listas duplamente ligadas
        if(position >= 0 && position <= lenght){
            var node = new Node(element),
            current = head,
            previous,
            index = 0

            if(position === 0){
                if(!head){
                    head = node
                    tail = node
                }else{
                    node.next = current
                    current.prev = node
                    head = node
                }
            }else if(position === lenght){
                current = tail
                current.next = node
                node.prev = current
                tail = node
            }else{
                while(index++ < position){
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node
                current.prev = node
                node.previous = previous
            }
            lenght++
            return true
        }else{
            return false
        }
    }

    this.removeAt = function(position){
        //remove o elemento de uma posiçao especifica
        // listas duplamente ligadas
    }

    this.remove = function(element){
        //remove o elemento 'element'
        var index = this.indexOf(element)
        return this.removeAt(index)
    }

    this.indexOf = function(element){
        //retorna a posicao do elemento
        var current = head,
        index = 0
        
        while(current){
            if(element === current.element){
                return index
            }
            index++
            current = current.next
        }
        return - 1
    }

    this.isEmpty = function(){
        //retorna se esta vazia ou nao a instancia
        return lenght === 0
    }

    this.size = function(){
        //retorna o tamanho da instancia
        return lenght
    }

    this.getHead = function(){
        return head
    }

    this.toString = function(){
        //converte em string
        var current = head,
        string = ''

        while(current){
            string += current.element + ' '
            current = current.next
        }

        return string
    }

    this.print = function(){
        //imprime no console
        console.log(this.toString())
    }
}
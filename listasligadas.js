function LinkedList(){
    
    var Node = function(element){
        this.element = element
        this.next = null
    }

    var lenght = 0
    var head = null

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
        if(position >= 0 && position <= lenght){
            var node = new Node(element),
            current = head,
            previous,
            index = 0

            if(position === 0){
                node.next = current
                head = node
            }else{
                while(index++ < position){
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node
            }
            lenght++
            return true
        }else{
            return false
        }
    }

    this.removeAt = function(position){
        //remove o elemento de uma posiçao especifica
        if(position>-1 && position<lenght){
            var current = head,
            previous,
            index = 0

            if(position === 0){
                head = current.next
            }else{
                while(index++ < position){
                    previous = current
                    current = current.next
                }
                previous.next = current.next
            }
            lenght--
            return current.element
        }else{
            return null
        }
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

var ll = new LinkedList()
ll.append('João') // adicionando joao nal ista
ll.append('Maria')
ll.append('Roberto')
ll.print()
ll.removeAt(1) //removendo o membro da posicao 1
ll.insert(0, 'Carlos') // adicionando Carlos na posicao 0
ll.insert(2, 'Ana')
ll.print()
console.log(ll.indexOf("Ana"))
console.log(ll.indexOf("João"))
ll.remove('Carlos')
ll.print()
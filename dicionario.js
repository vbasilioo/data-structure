function Dictionary(){
    var items = {}

    this.set = function(key, value){
        // adiciona um novo item ao dicionario
        items[key] = value
    }

    this.delete = function(key){
        // deleta o item do dicionario
        if(this.has(key)){
            delete items[key];
            return true;
        }
        return false;
    }

    this.has = function(key){
        // verifica se a chave existe e retorna um booleano
        return items.hasOwnProperty(key)
    }

    this.get = function(key){
        // devolve um valor especifico a partir da chave
        return this.has(key) ? items[key] : undefined
    }

    this.clear = function(){
        // remove todos os itens do dicionario
        items = {}
    }

    this.size = function(){
        // retorna a quantidade de elementos contidos no dicionario
        return Object.keys(items).length
    }

    this.keys = function(){
        // devolve um array com todas as chaves do dicionario
        return Object.keys(items)
    }

    this.values = function(){
        // devolve um array com todos os valores do dicionario
        var values = [],
        keys = Object.keys(items)

        for(var i=0;i<keys.length;i++){
            values.push(items[keys[i]])
        }

        return values;
    }

    this.getItems = function(){
        // retorna os itens do objeto cru
        return items
    }
}

var dic = new Dictionary()
dic.set('Harry', 'harry@potter.com')
dic.set('Lilian', 'lilian@potter.com')
dic.set('Tiago', 'tiago@potter.com')
// dic.delete('Tiago') // remove o tiago da lista
// dic.clear() // remove todos da lista

console.log(dic.has('Robert'))
console.log(dic.size())
console.log(dic.get('Harry'))
console.log(dic.keys())
console.log(dic.values())
console.log(dic.getItems())

/*************** ARRAYS ***************/

// Criando Array, acessando de maneira manual

var avgTemp = []

avgTemp[0] = 31.9
avgTemp[1] = 35.3
avgTemp[2] = 42
avgTemp[3] = 38
avgTemp[4] = 25.5

//console.log(avgTemp[0])

// ACESSANDO ARRAY COM LAÇO DE REPETIÇÃO

var daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 
'Thursday', 'Friday', 'Saturday')

for(var i=0;i<daysOfWeek.length;i++){
    //console.log(daysOfWeek[i])
}

// Sequência de Fibonacci com Array

var fibonacci = []
fibonacci[0] = 0
fibonacci[1] = 1
fibonacci[2] = 1

for(var i=3;i<20;i++){
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
}

//console.log(fibonacci)

// INSERINDO VALORES DENTRO DO ARRAY

//(Não é a melhor coisa a se fazer)

var numbers = [0,1,2,3,4,5,6,7,8,9]
numbers[numbers.length] = 10
numbers[numbers.length] = 11
numbers[numbers.length] = 12

// (Melhor coisa a se fazer)

numbers.push(13)
numbers.push(14)
numbers.push(15)

// Inserindo números antes

numbers.unshift(-1)
numbers.unshift(-2)
numbers.unshift(-3)

// Removendo números do final da Array

numbers.pop()
numbers.pop()
numbers.pop()
numbers.pop()
numbers.pop()

// Removendo números do começo da Array

numbers.shift()
numbers.shift()
numbers.shift()

// Inserindo elementos numa posição específica 

numbers.splice(3, 3) // a partir da posição 3, ele vai remover 3 elementos
// (posição, quantidade de elementos)

// Inserindo os elementos retirados pelo splice anterior

numbers.splice(3, 0, 3, 4, 5) // a partir da posiçao 3, ele vai remover 0 elementos
// e vai adicionar os numeros depois [3, 4, 5]
// (posição, quantidade de elementos a serem retirados, numeros que devem ser adicionados)

// console.log(numbers)


// ARRAYS BIDIMENSIONAIS

var avgTempWeek = []

var avgTempWeek1 = [33, 25.2, 19, 27, 23.4, 41.6, 25]
var avgTempWeek2 = [41, 29, 33, 21.2, 19.5, 17, 33.8]
var avgTempWeek3 = [18, 91.2, 3, 4, 10.4, 20.6, 22]
var avgTempWeek4 = [1000, 33, 32, 31.2, 30.5, 16, 18.8]

// console.log(avgTempWeek[0][4]) // acessa o índice 0, posiçao 4

for(var i = 0; i<avgTempWeek.length ; i++){ // acessando todos os valores
    for(var j = 0; j<avgTempWeek[i].length ; j++){
        //console.log(avgTempWeek[i][j])
    }
}

// ARRAYS TRIDIMENSIONAIS (usando o var = avgTempWeek)

var month = []
var firstWeeks = []
var lastWeeks = []

firstWeeks = [avgTempWeek1, avgTempWeek2]
lastWeeks = [avgTempWeek3, avgTempWeek4]

month = [firstWeeks, lastWeeks]

// console.log(month[1][1][4]) // chamando lastweeks > índice 1 > temperatura 4

for(var x=0;x<month.length;x++){ // acessando todos os valores armazenados no month[][][]
    for(var y=0;y<month[x].length;y++){
        for(var z=0;z<month[x][y].length;z++){
            console.log(month[x][y][z])
        }
    }
}

/*************** PILHAS ***************/
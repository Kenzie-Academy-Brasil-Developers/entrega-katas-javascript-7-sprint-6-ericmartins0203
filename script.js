//forEach()
// const callback=((a)=> console.log(a))
Array.prototype.newForEach = function(callback) {
    for (let contador = 0; contador<this.length; contador++){
        callback(this[contador])
    }
};
// arr = [1,2,3,4]
// arr.newForEach(callback)
//  1
//  2
//  3
//  4

//fill()
Array.prototype.newFill = function(valor, inicio, fim) {
    let output = []
    for (let contador = inicio; contador<fim; contador++){
        output.push(valor)
    }
    return output 
};
// arr = []
//arr.newFill(0,0,5) === [0, 0, 0, 0, 0]

//map()
// const callback = ((a)=>a+1)
Array.prototype.newMap = function(callback) {
    let output = []
    for (let contador = 0; contador<this.length; contador++){
        let element = callback(this[contador])
        output.push(element)
    }
    return output
};
// arr = [1,2,3,4]
// arr.newMap(callback)
// [2, 3, 4, 5]

//some()
// const callback = ((a)=>a<10)
Array.prototype.newSome = function(callback) {
    for (let contador = 0; contador<this.length; contador++){
        if (callback(this[contador]) === true){
            return true
        }
    }
    return false
};
// arr = [1,2,3,4]
// arr.newSome(callback)
// true

//find()
// const callback = ((a)=>a<10)
Array.prototype.newFind = function(callback) {
    for (let contador = 0; contador<this.length; contador++){
        if (callback(this[contador]) === true){
            return this[contador]
        }
    }
    return undefined
};
// arr = [1,2,3,4]
// arr.newFind(callback)
// 1

//findIndex()
// const callback = ((a)=>a ===4)
Array.prototype.newFindIndex = function(callback) {
    for (let contador = 0; contador<this.length; contador++){
        if (callback(this[contador]) === true){
            return contador
        }
    }
    return -1
};
// arr = [1,2,3,4]
// arr.newFindIndex(callback)
// 3

//every()
Array.prototype.newEvery = function(callback) {
    for (let contador = 0; contador<this.length; contador++){
        if (callback(this[contador]) === false){
            return false
        }
    }
    return true
};

//filter()
Array.prototype.newFilter = function(callback) {
    let output = []
    for (let contador = 0; contador<this.length; contador++){
        if (callback(this[contador]) === true){
            output.push(this[contador])
        }
    }
    return output
};

//concat()
Array.prototype.newConcat = function(array) {
    let output =[...this, ...array]
    return output
};

//includes()
Array.prototype.newIncludes = function(value) {
    for (let contador = 0; contador<this.length; contador++){
        if (this[contador] === value){
            return true
        }
    }
    return false
};
//indexOf()
Array.prototype.newIndexOf = function(value) {
    for (let contador = 0; contador<this.length; contador++){
        if (this[contador] === value){
            return contador
        }
    }
    return -1
};
//join()
Array.prototype.newJoin = function(separator){
    let output = ''
    if (separator === null){
        separator = ','
    }
    for (let contador = 0; contador<this.length; contador++){
        output+= this[contador] + separator
    }
    return output
};

//reduce()
Array.prototype.newReduce = function(initialValue) {
    let output = initialValue
    for (let contador = 0; contador<this.length; contador++){
        output += this[contador]
    }
    return output
};

//slice()
Array.prototype.newSlice = function (inicio, fim){
    let output = []
    if (inicio === null){
        inicio =0
    }
    if (fim === null){
        fim = this.length
    }
    for (let contador = inicio; contador< fim; contador++){
        output.push(this[contador])
    }
    return output
};

//flat()
Array.prototype.newFlat = function () {
    let output = []
    for (let i=0;i<this.length;i++){
        if (this[i].length>1){
            for (let j=0;j<this[i].length;j++){
                if (this[i][j].length>1){
                    for (let k=0;k<this[i][j];k++){
                        output.push(this[i][j][k])
                    }
                }
                else{
                    output.push(this[i][j])
                }
            }
        }
        else{
            output.push(this[i])
        }
        
    }
    return output
};

//flatMap()
Array.prototype.newFlatMap = function(callback) {
    let output = []
    let realoutput = []
    for (let contador = 0; contador<this.length; contador++){
        let element = callback(this[contador])
        output.push(element)
    }
    for (let i=0;i<this.length;i++){
        if (this[i].length>1){
            for (let j=0;j<this[i].length;j++){
                realoutput.push(this[i][j])
            }
        }
        else{
            realoutput.push(this[i])
        }
    
    }
    return realoutput
};

//Array.of()
Array.prototype.newArrayOf = function(value1,value2, value3){
    let output = []
    let values = arguments
    for (let contador = 0;contador<values.length; contador++){
        output.push(values[contador])
    }
    return output
}
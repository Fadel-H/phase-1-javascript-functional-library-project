
function myEach(collection, callback){
    let collectionArray = []
    if(Array.isArray(collection)){
        collectionArray = collection
    }  else {
        collectionArray = Object.values(collection)    
    }
    for (let i=0; i<collectionArray.length; i++){
        callback(collectionArray[i])
    }
    return collection
}

function myMap(collection, callback){
    let collectionArray = []
    let collectionMap = []
    if(Array.isArray(collection)){
        collectionArray = collection
    }  else {
        collectionArray = Object.values(collection)    
    }
    for (let i=0; i<collectionArray.length; i++){
        collectionMap.push(callback(collectionArray[i]))
    }
    return collectionMap
}


function myReduce(collection, callback, acc){
    let collectionArray = []
    if(Array.isArray(collection)){
        collectionArray = collection
    }  else {
        collectionArray = Object.values(collection)    
    }
    if (acc === undefined){
        acc = collectionArray[0]
        for (let i=1; i<collectionArray.length; i++){
            acc = callback(acc,collectionArray[i],collection)
        }
    } else{
        for (let i=0; i<collectionArray.length; i++){
            acc = callback(acc,collectionArray[i],collection)
        } 
    }
    return acc
}

function myFind(collection, predicate){
    let collectionArray = []
    if(Array.isArray(collection)){
        collectionArray = collection
    }  else {
        collectionArray = Object.values(collection)    
    }      
    for (let i =0; i<collectionArray.length;i++){
      if (predicate(collectionArray[i])){
          return collectionArray[i]
      }
    }
    return undefined
}

function myFilter(collection, predicate){
    let collectionArray = []
    let collectionFilter= []
    if(Array.isArray(collection)){
        collectionArray = collection
    }  else {
        collectionArray = Object.values(collection)    
    } 
    for (let i =0; i<collectionArray.length;i++){
        if (predicate(collectionArray[i])){
            collectionFilter.push(collectionArray[i])
        }
    }
return collectionFilter
}

function mySize(collection){
    let collectionArray = []
    if(Array.isArray(collection)){
        collectionArray = collection
    }  else {
        collectionArray = Object.values(collection)    
    } 
    return collectionArray.length
}

function myFirst(array, n){
    if (typeof n !== 'number') {
        return array[0]
    } else {
        return array.slice(0,n)  
    }
}

function myLast(array, n){
    if (typeof n !== 'number') {
        return array[array.length-1]
    } else {
        return array.splice(-n)  
    }
}

function myKeys(object) {
    return Object.keys(object)
}

function myValues(object) {
    return Object.values(object)
}



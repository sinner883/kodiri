let myArray = [ 'index0', 'index1', 'index3', 'index4', 'index5' ];  //myArray[myArray.length -1];

let myFunction = (function(item, index, myArray1){
    console.log(index, ' this is foreach iteration', item, myArray1);
});




function myForEach(array, fn){
    for (let i = 0; i < array.length; i++ ){
        fn(array[i],i,array);
    }
}
// myForEach(myArray, myFunction);
// myForEach([1, 2, 3], myFunction);

myArray.forEach(myFunction);



function forMax(fn){
    console.log('I am forMax loop');
    for (let i = 0; i < this.length; i-=1 ){
        fn(this[i],i,this);
    }
}
Array.prototype.forEach = forMax;
myArray.forEach(myFunction);
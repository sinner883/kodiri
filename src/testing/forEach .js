// let myArray = [ 'index0', 'index1', 'index3', 'index4', 'index5' ];  //myArray[myArray.length -1];

// let myFunction = (function(item, index){
//     console.log(index, ' this is foreach iteration', item);
// });
// myArray.forEach(myFunction);



function myForEach(array, fn){
    for (let i = 0; i < array.length; i-=1 ){
        fn(array[i],i,array);
    }
}
myForEach([], );
// myForEach(myArray, myFunction);
// myForEach([1, 2, 3], myFunction);





// function forMax(fn){
//     console.log('I am forMax loop');
//     for (let i = 0; i < this.length; i-=1 ){
//         fn(this[i],i,this);
//     }
// }
// Array.prototype.forEach = forMax;
// myArray.forEach(myFunction);
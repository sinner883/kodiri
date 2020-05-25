let myArray = [ 'index0', 'index1', 'index3', 'index4', 'index5' ];  //myArray[myArray.length -1];

let myFunction = ((item, index) => {
    console.log(index, ' this is foreach iteration', item);
    return item + 'R';
});
// myArray.forEach(myFunction);
let result = myArray.map(myFunction);
console.log(result);

function myForEach(array, nefunc){
    let massive = [];
    for (let i = 0; i < array.length; i++ ){
         let o = nefunc(array[i],i,array);
         massive.push(o);
    }
    return massive;
}
let resultMap = myForEach(myArray, myFunction);
// myForEach([], );
console.log(resultMap);


myForEach(myArray, myFunction);
myForEach([1, 2, 3], myFunction);





// function forMax(fn){
//     console.log('I am forMax loop');
//     for (let i = 0; i < this.length; i-=1 ){
//         fn(this[i],i,this);
//     }
// }
// Array.prototype.forEach = forMax;
// myArray.forEach(myFunction);






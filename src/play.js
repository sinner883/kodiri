function filter(fruits) {
    return fruits
        .filter(fruit => fruit === fruit.split('').reverse().join(''))
        .length; //method
}

// == chechk the eqallity of the expresssions 
// === chechk the eqallity of the expresssions 

// ====
// reason1: stricter
// reason2: performance 
// reason3: performance 

//how many palindrom -> 'ana' === 'ana' race car === rac ecar
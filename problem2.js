

function deleteInvalids(array) {
    if (Array.isArray(array) === false) {
        return 'Invalid Array'
    }
    let realNumber = [];
    for (const newArray of array) {
        if (typeof newArray === 'number' && isNaN(newArray) === false) {
            realNumber.push(newArray)
        }
    }
    return realNumber;
}

// const mixArray1 = [1, null, undefined, 18, -19, NaN, '12', [1, 2], { ob: 'lala' }];
// const mixArray2 = ['1', {num: 2}, NaN];
// const mixArray3 = [1, 2, -3];
// const mixArray4 = {num: [1, 2, 3]};
// const checkNumber = deleteInvalids(mixArray1, mixArray2, mixArray3, mixArray4);
// console.log('This is real number: ', checkNumber); 

console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, '12', [1, 2], { ob: 'lala' }]));
console.log(deleteInvalids(['1', {num: 2}, NaN]))
console.log(deleteInvalids([1, 2, -3]))
console.log(deleteInvalids({num: [1, 2, 3]}))

// console.log(Array.isArray({num: [1, 2, 3]}))


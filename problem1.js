
function checkName (name) {
     if (typeof name !== 'string') {
        return 'invalid'
    }
    let lastLetter = name[name.length - 1].toLowerCase();
    // let lastLetter = name.slice(-1);
    // let result = false;
    let checkArray = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];

    // for (const char of checkArray) {
    //     if (char === lastLetter) {
    //         result = true;
    //     }
    // }

    let result = checkArray.includes(lastLetter)

    return result ? 'Good Name' : 'Bad Name';
}

const check = checkName ('Rifat');
console.log(check);
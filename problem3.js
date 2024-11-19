

function password(obj) {
    if (obj.siteName === undefined || obj.name === undefined || obj.birthYear === undefined || obj.birthYear.toString().length !== 4) {
        return 'invalid';
    }
    let capitalization = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
    let pass_string = capitalization + '#' + obj.name + '@' + obj.birthYear;
    return pass_string
}

console.log(password({ name: 'kolimoddin', birthYear: 1999, siteName: 'google' }));
console.log(password({ name: 'rahat', birthYear: 2002, siteName: 'Facebook' }));
console.log(password({ name: 'toky', birthYear: 200, siteName: 'Facebook' }));
console.log(password({ name: 'toky', birthYear: 2003 }));
console.log(password({ name: 'rifat', siteName: 'Instagram' }));
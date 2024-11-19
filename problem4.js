

function monthly_saving(arr, living_cost) {
    if (Array.isArray(arr) === false || typeof living_cost !== 'number') {
        return 'Invalild input'
    };
    const push = [];
    let sum = 0;
    for (const array of arr) {
        if (array >= 3000) {
            let tax = array - ((array / 100) * 20);
            push.push(tax);
        }
        else if (array <= 3000) {
            push.push(array);
        }
    }
    for (const char of push) {
        sum = sum + char;
    }

    let total_savings = sum - living_cost;
    if (total_savings < 0) {
        return 'earn more';
    }
    return total_savings;
}

console.log(monthly_saving([1000, 2000, 3000], 5400));
console.log(monthly_saving([1000, 2000, 2500], 5000));
console.log(monthly_saving([900, 2700, 3400], 10000));
console.log(monthly_saving(100, [900, 2700, 3400]));
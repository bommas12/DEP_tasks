/**
 * This function calculates the totalCost of rent of a car
 * @param {number} numberOfDays
 * @returns {number} totalCost of the rent for the numberOfDays
 * 
 * @example rentalCarCost(7)
 */
function rentalCarCost(numberOfDays) {
    const COST_PER_DAY = 40;
    const DISCOUNT_FOR_7DAYS = 50;
    const DISCOUNT_FOR_3DAYS = 20;
    let totalCost = numberOfDays * COST_PER_DAY;
    if (numberOfDays >= 7) {
        totalCost -= DISCOUNT_FOR_7DAYS;
    }
    else if (numberOfDays >= 3) {
        totalCost -= DISCOUNT_FOR_3DAYS;
    }
    return totalCost;
}

console.log(rentalCarCost(1)); //expected 40
console.log(rentalCarCost(2)); //expected 80
console.log(rentalCarCost(3)); //expected 100, as discount 20 is deducted
console.log(rentalCarCost(4)); //expected 140, as discount 20 is deducted
console.log(rentalCarCost(5)); //expected 180, as discount 20 is deducted
console.log(rentalCarCost(6)); //expected 220, as discount 20 is deducted
console.log(rentalCarCost(7)); //expected 230, as discount 50 is deducted
console.log(rentalCarCost(8)); //expected 270, as discount 50 is deducted

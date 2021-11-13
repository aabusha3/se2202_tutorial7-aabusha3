/**
 * Given two arrays of distances and an offset:
 ** One array represents the distances traveled (in one direction).
 ** The other array represents the distances traveled back (in the opposit direction) 
 * We would like to know the total distance traveled in addition to the offset.
 */

let distancesInMeters_travel = [134, 6, 7, 83, 9, 1, 0, 9, 6, 17, 54, 16];
let distancesInInches_back = [5, 6, 13, 7, 200, 190, 9, 0, 10];
let offset = 50;

// use Array.prototyp.map to transform the meters in the travel array into inches
let distancesInInches_travel = distancesInMeters_travel.map(x => x * 39.37);

// use the Array.prototype.map to transform the values in the 'back' array to negatives
let distancesInInches_backInNegative = distancesInInches_back.map(x => x * -1);

// use the Array.prototype.concat method to merge the two arrays into one
let totalDistanceInInches = distancesInInches_travel.concat(distancesInInches_backInNegative);

// use the Array.prototype.reduce method to find the total distance travled in addition to the offset
// store the calculated distance in the variable 'total_inches_travled'
let total_inches_travled = totalDistanceInInches.reduce((previousValue, currentValue) => previousValue + currentValue, offset);

// Don't change this line
console.log(total_inches_travled);
"use strict";
let mag = ['Ron', 'Albus', 'Hermione', 'Harry'];
function copyArray(arr) {
    return [...arr];
}
function make_great(magArray) {
    for (let i = 0; i < magArray.length; i++) {
        magArray[i] = 'the great ' + magArray[i];
    }
}
function show_mag(mag) {
    mag.forEach(element => {
        console.log(element);
    });
}
const copymag = copyArray(mag);
make_great(copymag);
console.log('\n\nthis is my orignal array:');
show_mag(mag);
console.log('\n\nthis is my real array:');
show_mag(copymag);

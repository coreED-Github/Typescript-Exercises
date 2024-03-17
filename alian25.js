"use strict";
//creat a variable called alian_color
let alian_color = 'green';
if (alian_color === 'green') {
    console.log("player just earned 5 points !");
}
//fails
alian_color = 'red';
if (alian_color === 'green') {
    console.log("player just earned 5 points !");
}

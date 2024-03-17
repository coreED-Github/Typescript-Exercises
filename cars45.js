"use strict";
function creatCar(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
const mycar = creatCar("honda", "toyota", { color: "silver", year: "2024" });
console.log(mycar);

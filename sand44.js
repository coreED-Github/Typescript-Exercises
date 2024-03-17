"use strict";
function makeSandwich(item) {
    console.log('making a tasty sanwich:');
    item.forEach(element => console.log("-" + element));
    console.log('enjoy my tasty sandwiches !');
}
makeSandwich(['chees', 'chicken', 'lettuse']);
makeSandwich(['vegetable', 'khameer']);
makeSandwich(['becon', 'butter']);

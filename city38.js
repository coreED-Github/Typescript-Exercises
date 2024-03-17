"use strict";
function describe_city(city, country = 'default country') {
    console.log(`${city} is in ${country}`);
}
describe_city('karachi', 'pakistan');
describe_city('mumbai', 'indea');
describe_city('dhaka', 'bangladesh');

"use strict";
function Make_shirt(size = 'Large', text = 'i love typescript.') {
    console.log(`creating a ${size} shirt with the massage : ${text}`);
}
Make_shirt();
Make_shirt('medium');
Make_shirt('small', 'i love python');

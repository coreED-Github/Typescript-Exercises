let mag :string[] = ['Ron','Albus','Hermione','Harry'];

function copyArray(arr:string[]){
  return  [...arr]
}

function  make_great (magArray :string []) {
for ( let i=0; i<magArray.length; i++){
    magArray[i]='the great ' +  magArray[i]
}
}

function show_mag (mag :string[]){
    mag.forEach(element => {
console.log (element);
})

}
const copymag = copyArray (mag)

make_great(copymag);

console.log( '\n\nthis is my orignal array:')
show_mag(mag);

console.log( '\n\nthis is my real array:')


show_mag(copymag);



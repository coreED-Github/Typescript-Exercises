let Magicians :string[] = ['Ron','Albus','Hermione','Harry'];

function  make_great (magiciansArray :string []) {
for ( let i=0; i<magiciansArray.length; i++){
  Magicians[i] ='the great ' +  magiciansArray[i]
}
}

function show_Magicians (magicians :string[]){
    magicians.forEach(element => {
console.log (element);
})

}
make_great(Magicians);
show_Magicians(Magicians);
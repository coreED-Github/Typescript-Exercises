let PersonName :string ='';

PersonName = prompt('what is your name?') || '';

let lowercase :string = PersonName.toLowerCase();
let uppercase :string = PersonName.toUpperCase();
let titlecase :string = PersonName.split('').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('')

if(PersonName !== null && PersonName !== ''){
    alert(`hello ${PersonName}, Here are your name in:
    LowerCase: ${lowercase}
    UpperCase: ${uppercase}
    TitleCase: ${titlecase}`)
}
else{
    alert('please fill your name !')
}

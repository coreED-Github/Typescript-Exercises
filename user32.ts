let current_users :string[] =['Taha','Saira','Mahira','Tania','Saima'];

let new_users:string[]=['Bilal','Taha','Dawood','Hamza','Tania'];

new_users.forEach(newUsername => {
   let LowerCase:string = newUsername.toLowerCase();
if(current_users.map(c_user => c_user.toLowerCase()).includes(LowerCase)){
    console.log(`the username ${newUsername} is not available.please write a diffrent username`);
}
else {
    console.log(`username ${newUsername} is available.`)
}
})

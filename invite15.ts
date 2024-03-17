let Guest_list:string[] = ['saira','rafia','ahsan'] ;
for(let i=0; i<Guest_list.length; i++){
   console.log('Dear Mr.' + Guest_list[i] + ', \n\n it is our pleasure to invite you in our party.\n\nTank you!\n\n')
} 
let absent_Guest :string = 'rafia' ;
 let new_Guest :string = 'kamran' ;
 Guest_list[0] = new_Guest ;
 for(let i=0; i<Guest_list.length; i++){
   console.log('Dear Mr.' + Guest_list[i] + ', \n\n it is our pleasure to invite you in our party.\n\nTank you!\n\n')
}
console.log(`M.r ${absent_Guest} is not coming to the party.`)



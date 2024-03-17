let guest_List:string[] = ['saira','rafia','ahsan'] ;
// for(let i=0; i<guest_list.length; i++){
//    console.log('Dear Mr.' + guest_list[i] + ', \n\n it is our pleasure to invite you in our party.\n\nTank you!\n\n')
// } 
let absent_guest :string = 'rafia' ;
 let new_guest :string = 'kamran' ;
 guest_List[0] = new_guest ;
 for(let i=0; i<guest_List.length; i++){
   console.log('Dear Mr.' + guest_List[i] + ', \n\n it is our pleasure to invite you in our party.\n\nTank you!\n\n')
}
console.log(`Mr ${absent_guest} is not coming to the party.`);

console.log('good news !we find big table so we are inviting 3 more guest.')
// enter 3 guest add
guest_List.unshift('sirZIA');
guest_List.splice(2 ,0 , 'mahira') ;
guest_List.push('tania');
guest_List[0] = new_guest ;
// 6 guest array print.
 for(let i=0; i<guest_List.length; i++){
    console.log('Dear Mr.' + guest_List[i] + ', \n\n it is our pleasure to invite you in our party.\n\nThank you!\n\n')
}



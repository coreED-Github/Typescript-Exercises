let guesT_List:string[] = ['saira','rafia','ahsan'] ;
// for(let i=0; i<guest_list.length; i++){
//    console.log('Dear Mr.' + guest_list[i] + ', \n\n it is our pleasure to invite you in our party.\n\nTank you!\n\n')
// } 
let absent_guesT :string = 'rafia' ;
 let new_guesT :string = 'kamran' ;
 guesT_List[0] = new_guesT;
//  for(let i=0; i<guesT_List.length; i++){
//    console.log('Dear Mr.' + guesT_List[i] + ', \n\n it is our pleasure to invite you in our party.\n\nTank you!\n\n')
// }
console.log(`Mr ${absent_guesT} is not coming to the party.`);

console.log('good news !we find big table so we are inviting 3 more guest.')
// enter 3 guest add
guesT_List.unshift('sirZIA');
guesT_List.splice(2 ,0 , 'mahira') ;
guesT_List.push('tania');
guesT_List[0] = new_guesT ;
// 6 guest array print.
 for(let i=0; i<guesT_List.length; i++){
    console.log('Dear Mr.' + guesT_List[i] + ', \n\n it is our pleasure to invite you in our party.\n\nThank you!\n\n')
}

//sorry message to guest for inviting.
console.log('\nsorry we can not arrange a big table , only ow people will be invited');
// remove a guest
while(guesT_List.length > 2){
 let remove_guesT = guesT_List.pop()
 console.log(`sorry mr.${remove_guesT}, you are not invited for dinner.`)
}
// 2 other invited guest. 
for(let i=0; i<guesT_List.length; i++){
   console.log('Dear Mr.' + guesT_List[i] + ', \n\n you are still invited.\n\nThank you!\n\n')
}
// i remove guest in array
guesT_List.splice(0, 2);

console.log(guesT_List);


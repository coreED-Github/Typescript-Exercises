var gUesT_List = ['saira', 'rafia', 'ahsan'];
// for(let i=0; i<guest_list.length; i++){
//    console.log('Dear Mr.' + guest_list[i] + ', \n\n it is our pleasure to invite you in our party.\n\nTank you!\n\n')
// } 
var absent_gUesT = 'rafia';
var new_gUesT = 'kamran';
gUesT_List[0] = new_gUesT;
//  for(let i=0; i<guesT_List.length; i++){
//    console.log('Dear Mr.' + guesT_List[i] + ', \n\n it is our pleasure to invite you in our party.\n\nTank you!\n\n')
// }
// console.log(`Mr ${absent_gUesT} is not coming to the party.`);
// console.log('good news !we find big table so we are inviting 3 more guest.')
// // enter 3 guest add
gUesT_List.unshift('sirZIA');
gUesT_List.splice(2, 0, 'mahira');
gUesT_List.push('tania');
gUesT_List[0] = new_gUesT;
// 6 guest array print.
//  for(let i=0; i<gUesT_List.length; i++){
//     console.log('Dear Mr.' + gUesT_List[i] + ', \n\n it is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }
//sorry message to guest for inviting.
//console.log('\nsorry we can not arrange a big table , only ow people will be invited');
// remove a guest
while (gUesT_List.length > 2) {
    var remove_gUesT = gUesT_List.pop();
    //console.log(`sorry mr.${remove_gUesT}, you are not invited for dinner.`)
}
// 2 other invited guest. 
// for(let i=0; i<gUesT_List.length; i++){
//    console.log('Dear Mr.' + gUesT_List[i] + ', \n\n you are still invited.\n\nThank you!\n\n')
// }
// i remove guest in array
gUesT_List.splice(0, 2);
console.log(gUesT_List);
console.log("total number of guest are : ".concat(gUesT_List.length));

var Guest_list = ['saira', 'rafia', 'ahsan'];
for (var i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr.' + Guest_list[i] + ', \n\n it is our pleasure to invite you in our party.\n\nTank you!\n\n');
}
var absent_Guest = 'rafia';
var new_Guest = 'kamran';
Guest_list[0] = new_Guest;
for (var i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr.' + Guest_list[i] + ', \n\n it is our pleasure to invite you in our party.\n\nTank you!\n\n');
}
console.log("M.r ".concat(absent_Guest, " is not coming to the party."));

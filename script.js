var johnTeam =(89 + 120 + 103) /3;
var mikeTeam = (116 + 94 + 123) /3;
var maryTeam = (97 + 134 + 105) /3;

console.log(johnTeam, mikeTeam, maryTeam);

if (johnTeam > mikeTeam && johnTeam > maryTeam){
    console.log('John\'s sorry asses lost the game with ' + johnTeam + ' points!');
} else if (mikeTeam > johnTeam && mikeTeam > maryTeam){
    console.log('Mike\'s team won with ' + mikeTeam + ' points!');
} else if (maryTeam > johnTeam && maryTeam > mikeTeam){
    console.log('Mary\'s team won by ' + maryTeam + ' points!');
} else {
    console.log('It\'s a draw!');
}


/*

if (johnTeam > mikeTeam){
    console.log('John\'s sorry asses lost the game with ' + johnTeam + ' points!');
} else if (mikeTeam > johnTeam) {
    console.log('Mike\'s team won with ' + mikeTeam + ' points!');
} else {
    console.log('they have the same score!');
}

*/
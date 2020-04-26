$(document).ready(function() {

//vars
var wins = 0;
var losses  =0;


var userNumber = 0;


var diamondNumber = 0;
var rubyNumber = 0;
var emoraldNumber = 0;
var crystalNumber = 0;
var winningNumber = 0;

//random nums 

function beginGame(){
winningNumber = Math.floor(Math.random() * 102) + 19; 
console.log("winningNumber: " + winningNumber); 
$("#winningNumber").html(winningNumber); 


diamondNumber = Math.floor(Math.random() * 20)
console.log("diamond number: " + diamondNumber)

rubyNumber = Math.floor(Math.random() * 20)
console.log("ruby number: " + rubyNumber)

emoraldNumber = Math.floor(Math.random() * 20)
console.log("emorald number: " + emoraldNumber)

crystalNumber = Math.floor(Math.random() * 20)
console.log("crystal number: " + crystalNumber)
}

beginGame();


$("#diamond").click(function(){
    userNumber = userNumber + diamondNumber;
    $("#yourScore").text(" " + userNumber);
    checkScore();
});


$("#ruby").click(function(){
    userNumber = userNumber + rubyNumber;
    $("#yourScore").text(" " + userNumber);
    checkScore();
});

$("#emorald").click(function(){
    userNumber = userNumber + emoraldNumber;
    $("#yourScore").text(" " + userNumber);
    checkScore();
});

$("#crystal").click(function(){
    userNumber = userNumber + crystalNumber;
    $("#yourScore").text(" " + userNumber);
    checkScore();
});



function checkScore(){
if (userNumber === winningNumber){
        wins++;
        document.querySelector('#wins').innerHTML = 'Wins: ' + wins;
        alert("Congrats! You selected the right letter!");
        userNumber = 0;
        beginGame();

        
    }


else if (userNumber > winningNumber){
    losses++;
    document.querySelector('#losses').innerHTML = 'Losses: ' + losses;
    alert("Try Again!");
    userNumber = 0;
    beginGame();
 

}
}




});
var $ = function(id) {
    return document.getElementById(id);
};

//declare and initialize arrays
var game = ["HOME", "RENTAL", "CASHFLOW", "MORTGAGE", "LOAN", "BANK", "LENDER", "MONEY", "REHAB", "AUCTION", "TENANTS", "BUYER", "SELLER", "INVESTOR", "INVESTMENT", "LANDLORD", "FLIP"];
var choice = Math.floor(Math.random()*17);
var answer = game[choice];
var myLength = answer.length;
var display=[myLength];
var win = myLength;
var letters = answer.split('');
var attemptsLeft= 10;
var output="";
var userLetter="";
var hangImage = ["img10.png", "img09.png", "img08.png", "img07.png", "img06.png", "img05.png", "img04.png", "img03.png", "img02.png", "img01.png", "img00.png"];




var setup = function()
{
    for (var i = 0; i < answer.length; i++)
    {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("game").innerHTML = output;
}

var submit = function()
{
    output = "";
    userLetter = document.getElementById("letter").value;
    document.getElementById("letter").value = "";
    var found = false;

    for (var c = 0; c < answer.length; c++)
    {
        if (userLetter.toUpperCase() == letters[c])
        {

            display[c] = userLetter.toUpperCase();
            found = true;
            win--;
        }
        output = output + display[c] + " ";

    }

    document.getElementById("game").innerHTML = output;
    output="";
    if (!found) {
        attemptsLeft--;

    }

    if (win < 1)
    {
        document.getElementById("guesses").innerHTML ="YOU WIN!!!";
    }
    else if (attemptsLeft < 1)
    {
        document.getElementById("guesses").innerHTML ="YOU LOSE!!!";
    }
    else
    {
        document.getElementById("guesses").innerHTML ="You have " + attemptsLeft + " guesses left";

    }
    document.getElementById("hangimg").src = "images/" +hangImage[attemptsLeft];
}


window.onload = function()
{
    setup();
    document.getElementById("submit").onclick = submit;
}
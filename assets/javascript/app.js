$(document).ready(function() {

const ask1 = "Which warrior holds the record for most 3 pointers made in one game?"
const ask2 = "Which Golden State warriors player is always on bad behavior?"
const ask3 = "Which warrior is possibly the best shooter of All Time?"
const ask4 = "Which team beat Golden State in 2016 Finals?"

const answerArr1 = ["Klay Thompson", "Steph Curry", "Kevin Drant", "Draymond Green"]
const answerArr2 = ["Boston Celtics", "Chicago Bulls", "Cleveland Cavs", "Los Angles Lakers"]

let startB = $(".startbutton1")

Timer = 20;
Active = false;

$(".startbutton1").on("click", letsGo);

function letsGo(callback) {
    if (!Active) {
    Active = true;
    setInterval(Ticking, 1000);
}};


function Ticking() {
    if (Active = true && Timer !== 0) {
    Timer--
    $(".clock").html(Timer)
    $(".question").html(ask1)
    }}

function stop() {
    if (Timer===0){
    Active = False;
    }
}

function randAnswer() {
    for (var i=0; i<answerArr1.length; i++){
        console.log(answerArr1[i]);
    }
}

function reset() {
    $(".question").html("");
    $(".answer1").html("");
}
    
function questionA() {
    if (Active = true){
        $(".question").html(ask1)
    }
}

});









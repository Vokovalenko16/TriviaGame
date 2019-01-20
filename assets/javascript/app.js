$(document).ready(function() {

const questionArr1  = ["Which warrior holds the record for most 3 pointers made in one game?",
"Which Golden State warriors player is always on bad behavior?",
"Which warrior is possibly the best shooter of All Time?",
"Who is Golden States most hated player?"]

const answerArr1 = ["Klay Thompson", "Draymond Green","Steph Curry", "Kevin Durant",]

let startB = $(".startbutton1")

Timer = 5;
Active = false;
Score = 0;



$(".startbutton1").on("click", letsGo);

// function clickedAnswer() {
// console.log(this);
// }

function letsGo(callback) {
    if (!Active) {
    Active = true;
    let Timeout1 = setTimeout(randAnswer, 0);
    let Timeout2 = setTimeout(randAnswerA, 5000);
    let Timeout3 = setTimeout(randAnswerB, 10000);
    let Timeout4 = setTimeout(randAnswerC, 15000);
    let Timeout5 = setTimeout(Ending, 20000);
    let myLet = setInterval(Ticking, 1000);
    return;
}};
function Ticking() {
    if (Active = true) {
    Timer--
    if(Timer === 0) {
        Timer = 5; 
    }
    $(".clock").html(Timer)
    }}

   function regenerateAnswers(answers) {
for(var i=0; i<answerArr1.length; i++){
    let pickS = ".answer" + (i+1);
    $(pickS).html(answers[i]);
    $(pickS).on("click",yourpickS);
}};

function yourpickS() {
    console.log(this)
}

function randAnswer() {
    if (Active = true) {
        $(".question").html(questionArr1[0]);
        regenerateAnswers([answerArr1[0], answerArr1[1], answerArr1[2], answerArr1[3]]);
    }
}

    function randAnswerA() {
        if (Active = true) {
            $(".question").html(questionArr1[1]);
            regenerateAnswers([answerArr1[3], answerArr1[2], answerArr1[1], answerArr1[0]]);
        }}

        function randAnswerB() {
            if (Active = true) {
                $(".question").html(questionArr1[2]);
                regenerateAnswers([answerArr1[0], answerArr1[3], answerArr1[2], answerArr1[1]]);

            }}
            function randAnswerC() {
                if (Active = true) {
                    $(".question").html(questionArr1[3]);
                    regenerateAnswers([answerArr1[3], answerArr1[1], answerArr1[2], answerArr1[0]]);
                }}
                function Ending() {
                    $(".startbutton1").hide();
                    $(".timemessage").hide();
                    $(".clock").hide();
                     $(".answer1").hide();
                     $(".answer2").hide();
                     $(".answer3").hide();
                     $(".answer4").hide();
                     $(".question").hide();
                     $(".answers").html("<p> 1. Klay Thompson <p><br><p> 2. Draymound Green <p><br><p> 3. Steph Curry <p><br><p> 4. Kevin Durant <p><br>")
                    }

});









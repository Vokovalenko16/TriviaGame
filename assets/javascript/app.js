$(document).ready(function() {

const questionArr1  = ["Which warrior holds the record for most 3 pointers made in one game?",
"Which Golden State warriors player is always on bad behavior?",
"Which warrior is possibly the best shooter of All Time?",
"Who is Golden States most hated player?"]

const answerArr1 = ["Klay Thompson", "Draymond Green","Steph Curry", "Kevin Durant",]

let startB = $(".startbutton1")

Timer = 10;
Active = false;
Score = 0;
let Answers = [];
let tempvalA = [];
let tempvalB = [];
let tempvalC = [];
let tempvalD = [];
let tempvalE = [];


$(".startbutton1").on("click", letsGo);

function letsGo(callback) {
    if (!Active) {
    Active = true;
    var Timeout1 = setTimeout(randAnswer, 0);
    var Timeout2 = setTimeout(randAnswerA, 10000);
    var Timeout3 = setTimeout(randAnswerB, 20000);
    var Timeout4 = setTimeout(randAnswerC, 30000);
    var Timeout5 = setTimeout(Ending, 40000);
    var myLet = setInterval(Ticking, 1000);
    return;
}};
function Ticking() {
    if (Active = true) {
    Timer--
    if(Timer === 0) {
        Timer = 10; 
    }
    $(".clock").html(Timer)
    }}

   function regenerateAnswers(answers) {
for(var i=0; i<answerArr1.length; i++){
    let pickS = ".answer" + (i+1);
    $(pickS).html(answers[i]);
    $(pickS).off();
    $(pickS).on("click",yourpickS);
}};

function yourpickS() {
    let v = $(this).html()
    Answers.push(v)
    tempvalA.push(v)
    if (tempvalA.length === 1) {
        tempvalB.push(v)
        if (tempvalB == answerArr1[0]) {
            Score++
            $("#sc1").html(Score)
            $("#sc2").html(Score)
            tempvalB.pop();
        }
    }
    else if (tempvalA.length === 2){
            tempvalC.push(v)
            if (tempvalC == answerArr1[1]) {
                Score++
                $("#sc1").html(Score)
                $("#sc2").html(Score)
                tempvalC.pop();
    }}
    else if (tempvalA.length ===3){
        tempvalD.push(v)
        if (tempvalD == answerArr1[2]) {
            Score++
            $("#sc1").html(Score)
            $("#sc2").html(Score)
            tempvalD.pop();
    }}
    else if (tempvalA.length ===4){
        tempvalE.push(v)
        if (tempvalE == answerArr1[3]) {
            Score++
            $("#sc1").html(Score)
            $("#sc2").html(Score)
    }}
    console.log(tempvalA);
    console.log(tempvalB);
    console.log(tempvalC);
    console.log(tempvalD);
    console.log(tempvalE);
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
                    $("#sc1").hide();
                    $("#sc2").hide();
                    $(".startbutton1").hide();
                    $(".timemessage").hide();
                    $(".clock").hide();
                     $(".answer1").hide();
                     $(".answer2").hide();
                     $(".answer3").hide();
                     $(".answer4").hide();
                     $(".question").hide();
                     $(".answers").html( "<p> Correct Answers: </p><p>1. Klay Thompson </p><p> 2. Draymound Green </p><p> 3. Steph Curry </p><p> 4. Kevin Durant </p> <br> <span> <h1> You Got: " + Score + " Right! </h1></span>")
                    }
            
                       
});









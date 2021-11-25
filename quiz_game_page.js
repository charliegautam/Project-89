player1 = localStorage.getItem("player1");
player2 = localStorage.getItem("player2");
player1score = 0;
player2score = 0;

document.getElementById("player1_name").innerHTML = player1+":";
document.getElementById("player2_name").innerHTML = player2+":";
document.getElementById("player1_score").innerHTML = player1score;
document.getElementById("player2_score").innerHTML = player2score;
document.getElementById("player_question").innerHTML = "Question Turn -"+player1;
document.getElementById("player_answer").innerHTML = "Answer Turn -"+player2;

function send(){
number1 = document.getElementById("number_1").value;
number2 = document.getElementById("number_2").value;
actual_answer = parseInt(number1) * parseInt(number2);

question_number = "<h4>" + number1 + " x "+ number2 + "</h4>";
input = "<br> Answer: <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_number + input + check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("number_1").value = "";
document.getElementById("number_2").value = "";
}
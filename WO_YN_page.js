ScoreP1 = 0;

ScoreP2 = 0;


player_1 = localStorage.getItem("PLAYER-1");
document.getElementById("player1").innerHTML = player_1 + " : " + ScoreP1;

player_2 = localStorage.getItem("PLAYER-2");
document.getElementById("player2").innerHTML = player_2 + " : " + ScoreP2;


document.getElementById("player_question").innerHTML = "Turno para preguntar - " + player_1;
console.log("Le toca a preguntar a " + player_1);

document.getElementById("player_answer").innerHTML = "Turno para responder - " + player_2;
console.log("Le toca a responder a " + player_2);


function Logout()
{
    localStorage.removeItem("PLAYER-1");
    localStorage.removeItem("PLAYER-2");

    window.location.replace("index.html");
}

function Send()
{

    num1 = document.getElementById("player_turn").value;
    num2 = document.getElementById("player_turn1").value;

    CAnswer = parseInt(num1) * parseInt(num2);

    output_num = "<h4>" + num1 + " X " + num2 + "</h4>";
    output_input = "<h4>Respuesta:</h4> <input type='text' class='form-control' id='answer' placeholder='Ingresa el número correcto'> <br> <br>";
    output_button = "<button style='width: 18%;' class='btn btn-info' onclick='check()'>Comprobar</button>";

    row = output_num + output_input + output_button;

    document.getElementById("output").innerHTML = row;

    num1 = document.getElementById("player_turn").value = "";
    num2 = document.getElementById("player_turn1").value = "";
};

answer_turn = "PLAYER-2";
question_turn = "PLAYER-1";

function check()
{
    get_answer = document.getElementById("answer").value;

    if(get_answer == CAnswer)
    {
        if(answer_turn == "PLAYER-1")
        {
            ScoreP1 = ScoreP1 +1;
            document.getElementById("player1").innerHTML = player_1 + " : " + ScoreP1;
            console.log(player_1 + " Gano un punto");
        }
        else
        {
            ScoreP2 = ScoreP2 +1;
            document.getElementById("player2").innerHTML = player_2 + " : " + ScoreP2;
            console.log(player_2 + " Gano un punto");
        }
    }

    if(question_turn == "PLAYER-1")
    {
        question_turn = "PLAYER-2";
        document.getElementById("player_question").innerHTML= "Turno para preguntar: " + player_2;
        console.log("Le toca a preguntar a " + player_2);
    }
    else
    {
        question_turn = "PLAYER-1";
        document.getElementById("player_question").innerHTML= "Turno para preguntar: " + player_1;
        console.log("Le toca a preguntar a " + player_1);
    }

    if(answer_turn == "PLAYER-1")
    {
        answer_turn = "PLAYER-2";
        document.getElementById("player_answer").innerHTML= "Turno para responder: " + player_2;
        console.log("Le toca responder a " + player_2);
    }
    else
    {
        answer_turn = "PLAYER-1";
        document.getElementById("player_answer").innerHTML= "Turno para responder: " + player_1;
        console.log("Le toca responder a " + player_1);
    }

    document.getElementById("output").innerHTML= "";
}
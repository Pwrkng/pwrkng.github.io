let character = document.getElementById("character");
let block = document.getElementById("block");
let score = document.getElementById("score");
let scoreCounter = 0;
let dead = false;

function jump(){
    if(!dead){
        addScore();

        if(character.classList != "animate"){
            character.classList.add("animate");
        }
        character.classList.add("animate");
        setTimeout(function(){
            character.classList.remove("animate");
        },500);   
    }
}

function addScore(){
    let scoreText = 'SCORE: ';
    scoreCounter++;
    score.innerHTML = scoreText+scoreCounter;
}

var checkDead = setInterval(function(){
    var characterTop =
    parseInt(window.getComputedStyle(character).
    getPropertyValue("top"));

    var blockLeft =
    parseInt(window.getComputedStyle(block).
    getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 &&
        characterTop>=130){
            block.style.animation = "none";
            block.style.display = "none";
            score.innerHTML = 'LoL your TRASH🚮And doo doo💩.';
            dead = true;
        }
},10);

let user_score = 0;
let comp_score = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");           
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score")


const gencompchoice = () => {
    let options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawgame = () => {
    msg.innerText = "game was draw, play again.";
    msg.style.backgroundColor = "black";
};

const showWinner = (userwin,userchoice,compchoice) => {
       if(userwin){
        user_score++;
        userscorepara.innerText = user_score;
        msg.innerText = `You Win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
   }else{
    comp_score++;
    compscorepara.innerText = comp_score;
    msg.innerText = `you lose ${compchoice} beats your ${userchoice}`;
    msg.style.backgroundColor = "red";
   }
};

const playgame = (userchoice) => {
    let compchoice = gencompchoice();
    if(userchoice === compchoice){
        drawgame();
   }else{
    let userwin = true;
    if(userchoice === "rock"){
        userwin = compchoice === "paper" ? false : true;
   }else if(userchoice === "paper"){
    userwin = compchoice === "rock" ? true : false;
   } else{
    userwin = compchoice == "rock" ? false : true;
   }
   showWinner(userwin,userchoice,compchoice);
}
};
  


choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });

});


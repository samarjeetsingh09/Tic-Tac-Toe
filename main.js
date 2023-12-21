let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset-btn");
let new_btn=document.querySelector(".new-game");
let msgClass=document.querySelector(".msg");
let msg=document.querySelector("#message");

let player=true;

// var typed = new typed(".text", {
//     strings: ["TIC TAC TOE"],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 1000,
//     loop: true
// });

const winningPatters=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("success");
        if(player)
        {
            box.innerText ="O";
            player=false;
        }
        else
        {
            box.innerText='X';
            player=true;
        }
        box.disabled=true;

        checkWinner();
    });
});
const disable_btn=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
const enable_btn=()=>{
    for(let box of boxes)
    {
        box.disabled= false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
   msg.innerText=`Congratulation Winner is :-  ${winner}`;
   msgClass.classList.remove("hide");
   disable_btn();
};


const checkWinner=()=>{
    for(let check of winningPatters)
    {
        let pos1= boxes[check[0]].innerText;
        let pos2= boxes[check[1]].innerText;
        let pos3= boxes[check[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != "")
        {
            if(pos1===pos2 && pos2===pos3)
            {
                // console.log("winner",pos1);
        
                showWinner(pos1);
            }
        }
    }//in check variable we have a rows and inside check[0] contains the column number so -- finally is winningPatters[0][0];
};
const resetgame=()=>{
    player=true;
    enable_btn();
    msgClass.classList.add("hide");
}

new_btn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);
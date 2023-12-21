let boxes = document.querySelectorAll(".box");
let msg=document.querySelector("#message");
let msgclass =document.querySelector(".msg");
let new_btn=document.querySelector(".new-game");
let reset=document.querySelector("#reset-btn");

const winning_patters = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8], 
    [3, 4, 5], 
    [6, 7, 8], 
    [1, 4, 7], 
    [2, 5, 8], 
    [2, 4, 6]
];
const newgame=()=>{
        enable_btn();
        msgclass.classList.add("hide");
};

reset.addEventListener("click",newgame);

let player=true;

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
    if(player)
    {
        box.innerText="O";
        player=false;
    }
    else
    {
        box.innerText="X";
        player=true;
    }
     box.disabled=true;
     checkwinner();
    })
   
});


const checkwinner=()=>{
    for(let check of winning_patters)
    {
        let p1=boxes[check[0]].innerText;
        let p2=boxes[check[1]].innerText;
        let p3=boxes[check[2]].innerText;
        if(p1!="" && p2!="" && p3!="")
        {
           if(p1===p2 && p2===p3)
           {
            // console.log("winner is ",p1);
            winner(p1);
            return true;
           }
        }
        // return false;
    }
};

const winner=(p1)=>{
   msg.innerText=`the winner is ${p1}`;
   msgclass.classList.remove("hide");
   disable_btn();
};
const disable_btn=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    });
};
const enable_btn=()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerText="";
    });
};

new_btn.addEventListener("click",newgame);

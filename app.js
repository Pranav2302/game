let buttons=document.querySelectorAll('.box')
let reset=document.querySelector('#reset')
let msg=document.querySelector('.msg')
let msgcontainer = document.querySelector(".msg-container");
let turn0=true;  //player x,play 0

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]];

buttons.forEach((btn)=>{
    btn.addEventListener('click',()=>{
     console.log('you clicked button') 
    if(turn0){                 //player O turn
        btn.innerText='O';
        turn0=false;

    }
    else{                       //player X turn
        btn.innerText='X';
        turn0=true
    }
    btn.disabled=true;    // this is for not change the value O and X

    checkwinner();
})

});

const checkwinner=() =>{
    for(let pattern of winPatterns){
       
       let posvalue0=  buttons[pattern[0]].innerText;
       let posvalue1 = buttons[pattern[1]].innerText;
       let posvalue2 = buttons[pattern[2]].innerText;
      
       if(posvalue0!=""&& posvalue1!=""&& posvalue2!=""){
          if(posvalue0===posvalue1 && posvalue0===posvalue2){
             buttondisable();
            console.log("winner",posvalue1)
            showwinner(posvalue0);
          }  
       }
    }

}

const resetgame=()=>{
    turn0=true;
    enablebutton();
    msgcontainer.classList.add("hide")
}
function buttondisable(){
    for(let btn of buttons){
    btn.disabled=true;
}
}

reset.addEventListener('click',resetgame)

const enablebutton=()=>{
    for (let btn of buttons){
        btn.disabled=false;
        btn.innerText="";
    }
}
const showwinner =(posvalue0)=>{
    msgcontainer.classList.remove('hide');
    msg.innerText = `${posvalue0}   Wins the game`;
}
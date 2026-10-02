let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let h2=document.querySelector("h2");
let colors=["yellow","pink","red","purple"]

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;

    levelup()
    };
})
function btnFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}
function userFlash(btn){
    btn.classList.add("userflash")
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);
}


function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randIdx=Math.floor(Math.random()*4);
    let randbtn=colors[randIdx];
    let randbtns=document.querySelector(`.${randbtn}`)
    gameseq.push(randbtn);
    btnFlash(randbtns)
}

function checkAns(idx){
    // console.log("curr level:",level);
    if(userseq[idx]==gameseq[idx]){
       if(userseq.length==gameseq.length){
        setTimeout(levelup,1000);
       }
    }else{
        h2.innerHTML=`GAME OVER! Your score was <b>${level}</b> <br> Press any key to start.`;
    }
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },150);

    reset();
}

function btnpress(){
    console.log(this);
    let btn=this;
    userFlash(btn);

    let userColor=btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);

}

let allbtn=document.querySelectorAll(".btn");
for(let btn of allbtn){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
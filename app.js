const start =document.getElementById("start");
const instructions=document.getElementById("instructions");
const about1=document.getElementById("redsquare");
const about2=document.getElementById("bluesquare");
let username=document.getElementById("playerName");
//const checkSubmit=document.getElementById("submitted");
// checkSubmit.onclick=()=>{
//     storename();
// }
start.onclick=()=>{
    storename();
    location.href = "./game.html";
}
instructions.onclick=()=>{
    storename();
    location.href = "./instructions.html";
   
}
about1.onclick=()=>{
    storename();
    location.href="./about.html"
    
}
about2.onclick=()=>{
    storename();
    location.href="./about.html"
    
}

function storename(){
    console.log(username) 
    localStorage.setItem('userId',username.value);
}
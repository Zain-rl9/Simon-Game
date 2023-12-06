let game=[]
let user=[]
let btns=["yello","purpl","green","red"]

let start=false;
let level=0;
let h2=document.querySelector("h2")
document.addEventListener("keypress",function(){
  if(start==false){
    console.log("start")
    start=true;
    levelup();
  }
})
 function gameflash (btn){
   btn.classList.add("flash")
   setTimeout(function(){
    btn.classList.remove("flash")
   },300)
 }
 
 function userflash (btn){
   btn.classList.add("userflash")
   setTimeout(function(){
    btn.classList.remove("userflash")
   },300)
 }
function levelup(){
  user=[]
  level++;
  h2.innerText=`Level ${level}`;

  let rand=Math.floor(Math.random()*3);
  let randcol=btns[rand]
  let rndbtn=document.querySelector(`.${randcol}`)
   game.push(randcol)
   console.log(game)
  gameflash(rndbtn)
}
function checkans(idx){
// console.log("curr",level)
 
 if(user[idx]===game[idx]){
  if(user.length==game.length){
     setTimeout(levelup,1000)
  }
 }else{
   h2.innerHTML=`game over!<b>Your score${level}</b>`;
   document.querySelector("body").style.backgroundColor="red";
   setTimeout(function(){
   document.querySelector("body").style.backgroundColor="white"
   },550)
   reset();
 }
}
function  btnpres(){
let btn=this;
userflash(btn)
usercolor=btn.getAttribute("id");
user.push(usercolor)
checkans(user.length-1)
}
let allbtn =document.querySelectorAll(".btn")
for(i of allbtn){
  i.addEventListener("click",btnpres)
}
function reset(){
  start=false;
  game=[]
  user=[]
  level=0;
}

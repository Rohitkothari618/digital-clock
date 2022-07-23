const min=document.querySelector(".min");
const hour=document.querySelector(".hour");
const sec=document.querySelector(".sec");
const audio=new Audio("./sound/tic.mp3");
const audio1=new Audio("./sound/min.mp3");
const body=document.body;

console.log(min,hour,sec);

function setdate(){
    const date=new Date();
const second=date.getSeconds();
console.log(second);
sec.innerHTML=`<h2>${second}</h2>`


audio.currentTime=0;

audio.play();


const minute=date.getMinutes();
min.innerHTML=`<h2>${minute}:</h2>`;
if(second==0){
    audio1.currentTime=0;
    audio1.play();

}
else{
    audio1.pause();
}
const hour1=date.getHours();




hour.innerHTML=`<h2>${hour1}:</h2>`;

}

setInterval(setdate, 1000);

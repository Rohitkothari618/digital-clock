const minute=document.querySelector(".min");
const sec=document.querySelector(".sec");
const hour=document.querySelector(".hour");

function setDate(){
    const now=new Date();
   const seconds=now.getSeconds();
   const secondIndegree=((seconds/60)*360);
   sec.style.transform=`rotate(${secondIndegree}deg)`
   
const minute1=now.getMinutes();
const minuteDegree=((minute1/60)*360);
minute.style.transform=`rotate(${minuteDegree}deg)`

const hour1=now.getHours();
const hourDegree=((hour1/60)*360);
minute.style.transform=`rotate(${hourDegree}deg)`


}


setInterval(setDate,1000);





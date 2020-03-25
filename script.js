function displayTime(){
   var obj = new Date();
   var h=obj.getHours();
   var m=obj.getMinutes();
   var s=obj.getSeconds();
   if(m<10){
       m="0"+m;
   }
   if(s<10){
       s="0"+s;
   }
   var mydisplay=document.getElementById('display');
   mydisplay.innerText=h+":"+m+":"+s;
   setTimeout('displayTime()',1000);

}
displayTime();
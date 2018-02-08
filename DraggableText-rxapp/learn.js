import {Observable} from 'rxjs';
 document.getElementById("character").style.position = 'absolute';
 document.getElementById("character").style.top = 370+'px';
 document.getElementById("character").style.left = 760+'px';
 document.getElementById('character').style.height=100+'px';
 document.getElementById('character').style.width=100+'px';
 document.getElementById('character').style.backgroundColor='brown';

Observable.fromEvent(document,"keydown")
.filter((value)=>value.key=='ArrowUp'||value.key=='ArrowDown'||value.key=='ArrowLeft'||value.key=='ArrowRight')
.subscribe((value)=>{press(value.key)});

var press=(temp)=> {         
   switch(temp)
   {
       case "ArrowUp":    
       {
          document.getElementById('character').style.backgroundColor='coral';
          document.getElementById("character").style.top = (parseInt(document.getElementById("character").style.top)) -10 + "px";
          break;
       }
       case "ArrowDown":
       {
          document.getElementById('character').style.backgroundColor='yellow';           
          document.getElementById("character").style.top = (parseInt(document.getElementById("character").style.top)) +10 + "px";
          break;
       }
       case "ArrowLeft":
       {
          document.getElementById('character').style.backgroundColor='red';           
          document.getElementById("character").style.left = (parseInt(document.getElementById("character").style.left)) -10 + "px";
          break;
       }
       case "ArrowRight":
       {
          document.getElementById('character').style.backgroundColor='grey';           
          document.getElementById("character").style.left = (parseInt(document.getElementById("character").style.left)) +10 + "px";
          break;
       }
   }
}
// Analogue Clock adding initial time classnames on load. css handles the timing.
var time = new Date(),
    hours = time.getHours(),
    minutes = time.getMinutes(),
    seconds = time.getSeconds();

document.getElementById("second-hand").className = "sh-" + seconds;
document.getElementById("minute-hand").className = "mh-" + minutes;
document.getElementById("hour-hand").className = "hh-" + hours;

//Digital Clock
function GetClock(){
var d=new Date();
var nhour=d.getHours(),nmin=d.getMinutes(),ap;
if(nhour==0){ap=" AM";nhour=12;}
else if(nhour<12){ap=" AM";}
else if(nhour==12){ap=" PM";}
else if(nhour>12){ap=" PM";nhour-=12;}

if(nmin<=9) nmin="0"+nmin;

document.getElementById('clockbox').innerHTML=""+nhour+":"+nmin+ap+"";
}

window.onload=function(){
GetClock();
setInterval(GetClock,1000);
}

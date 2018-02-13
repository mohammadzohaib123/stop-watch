
var milliSeconds = 0, seconds = 0, clearIntrvl,minutes=0;
function start(){
    clearInterval(clearIntrvl);
    clearIntrvl = setInterval(callback,15);
}
function callback(){
    if(milliSeconds < 60){
        milliSeconds++;
    }
    if(milliSeconds === 60 ){
        seconds++;
        milliSeconds = 0;
    }
    if(seconds > 60){
        minutes++;
        seconds=0;

    }
    document.getElementById('time').innerHTML ="TIME: "+ minutes+": "+ seconds+":"+milliSeconds
}

function  stop(){
    clearInterval(clearIntrvl);
}
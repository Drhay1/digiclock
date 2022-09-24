function digitalClock(){
    const date = new Date();
    const H = date.getHours();
    const M = date.getMinutes();
    let S = date.getSeconds();

    let EvMo  = 'PM';
    if(H < 12){
        EvMo = 'AM';
    }

    const time = document.getElementById('time');

    S = S < 10 ? '0'+S : S;
    
    time.innerText = H+':'+M+':'+S +' '+EvMo;
}

setInterval(digitalClock, 1000);
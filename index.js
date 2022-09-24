function digitalClock(){
    const date = new Date();
    const H = date.getHours();
    const M = date.getMinutes();
    const Y = date.getFullYear();
    const D = date.getDay();
    const Mo = date.getMonth();
    let S = date.getSeconds();


    let EvMo  = 'PM';
    if(H < 12){
        EvMo = 'AM';
    }

    const time = document.getElementById('time');
    const year = document.getElementById('year')

    S = S < 10 ? '0'+S : S;
    
    time.innerText = H+':'+M+':'+S +' '+EvMo;
    year.innerText = D+ ':'+ Mo+ ':'+Y;
}

setInterval(digitalClock, 1000);
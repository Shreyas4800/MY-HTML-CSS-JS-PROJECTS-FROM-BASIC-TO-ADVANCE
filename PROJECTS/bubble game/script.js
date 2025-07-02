var hitrn = 0;

function makebubble(){
    var bble ="";



for(var i=1; i<=168;i++){
    var num = Math.floor(Math.random()*10);
    bble +=`<div id="bubble">${num}</div>`

}

document.querySelector("#pannelbottom").innerHTML = bble;
}
makebubble();

var timer = 30;
function runtime(){
    var timm = setInterval(function(){
        if(timer>0){
        timer--;
        
        document.querySelector("#timerr").textContent= timer;
        }
        else{
            clearInterval(timm);
            var dg = document.querySelector("#pannelbottom");
            dg.innerHTML = `<h1> GAME OVER :( </h1>
                            <h2> Your  score = ${score}</h2> ` 
            dg.style.transition = "all linear 0.8s;"
        }
    },1000);
}
runtime()

function gethit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitt").textContent= hitrn;    

}
gethit()

var score = 0;
function inscore(){
    score += 10;
    document.querySelector("#scoo").textContent = score
}

document.querySelector("#pannelbottom").addEventListener("click",function(dets){
    var clcikk  = Number(dets.target.textContent);
    if(clcikk === hitrn){
        inscore();
        makebubble();
        gethit();
    }
})
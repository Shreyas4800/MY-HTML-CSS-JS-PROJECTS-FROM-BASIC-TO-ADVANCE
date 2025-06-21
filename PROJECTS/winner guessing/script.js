var arr=[
    {
        team:'OG',
        primary:'orange',
        scond:'black'
    },
     {
        team:'SOUL',
        primary:'green',
        scond:'white'
    },
     {
        team:'Wyld Fangs',
        primary:'Red',
        scond:'black'
    },
     {
        team:'GODLIKE',
        primary:'white',
        scond:'yellow'
    },
    

]

var btn =document.querySelector('button');
var h1 = document.querySelector('h2');

btn.addEventListener('click',function(){
    var num = Math.floor(Math.random()*arr.length);

    var winner = arr[num]

    h1.innerHTML = winner.team
    h1.style.backgroundColor = winner.primary
    h1.style.color = winner.scond
    
})

var h2 = document.querySelector('h2');
var btn = document.querySelector('button');
var flag = 0;

btn.addEventListener('click',function(){
    if(flag ==0){
        h2.innerHTML = 'Request Pending...';
        h2.style.color = 'gold';
        btn.innerHTML = 'adding...'
        setTimeout(function(){
        h2.innerHTML = 'freinds';
        h2.style.color = 'green';
        btn.innerHTML = 'remove';
        flag =1
        },3000)
    }else{
        h2.innerHTML = 'Stranger';
        h2.style.color = 'red'
        btn.innerHTML ='add friend'
        flag = 0

    }
    
    
})
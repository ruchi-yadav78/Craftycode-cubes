window.addEventListener('scroll', function(){
    const animation1 = document.getElementById('par1');
    if(window.scrollY >= 600){
        animation1.classList.add('active');
    }else{
        animation1.classList.remove('active');
    }
})
window.addEventListener('scroll', function(){
    const animation1 = document.getElementById('par2');
    const animation2 = document.getElementById('par3');
    if(window.scrollY >= 650){
        animation1.classList.add('active');
        animation2.classList.add('active');
    }else{
        animation1.classList.remove('active');
        animation2.classList.remove('active');
    }
})
window.addEventListener('scroll', function(){
    const animation3 = document.getElementById('list');
    const animation4 = document.getElementById('par4');
    if(window.scrollY >= 700){
        animation3.classList.add('active');
        animation4.classList.add('active');
    }else{
        animation3.classList.remove('active');
        animation4.classList.remove('active');
    }
})
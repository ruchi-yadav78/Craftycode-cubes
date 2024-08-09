window.addEventListener('scroll', function(){
    const count0 = document.getElementById('counting');
    if(window.scrollY >=4000){
        count0.classList.add('active');
    } else{
        count0.classList.remove('active');
    }
    // counting
    var a = 0;
function counting1(){
    if(a<15){
        a++;
        document.getElementById('count1').innerHTML=a;
    }
}
setInterval(counting1,300);


var b = 0;
function counting2(){
    if(b<78){
        b++;
        document.getElementById('count2').innerHTML=b;
    }
}
setInterval(counting2,100);

var c = 0;
function counting3(){
    if(c<3){
        c++;
        document.getElementById('count3').innerHTML=c;
    }
}
setInterval(counting3,300);

var d = 0;
function counting4(){
    if(d<8){
        d++;
        document.getElementById('count4').innerHTML=d;
    }
}
setInterval(counting4,300);

})

// accord
window.addEventListener('scroll', function(){
    const animation = document.getElementById('accordionExample');
    if(window.scrollY >= 0){
      animation.classList.add('active')
      } else{
        animation.classList.remove('active')
      }
      
  });

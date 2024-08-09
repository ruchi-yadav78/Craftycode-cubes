window.addEventListener('scroll', function(){
  const animation = document.getElementById('info-img1');
  const animation1 = document.getElementById('info-img2');
  const animation2 = document.getElementById('ceo-content');
  if(window.scrollY >= 900){
    animation.classList.add('active')
    animation1.classList.add('active')
    animation2.classList.add('active')
    } else{
      animation.classList.remove('active')
      animation1.classList.remove('active')
      animation2.classList.remove('active')
    }
    
});
// accord
window.addEventListener('scroll', function(){
  const animation3 = document.getElementById('accordionExample');
  if(window.scrollY >= 2050){
    animation3.classList.add('active')
    } else{
      animation3.classList.remove('active')
    }
    
});
// section4
window.addEventListener('scroll', function(){
  const animation4 = document.getElementById('info-img3');
  const animation5 = document.getElementById('info-img4');
  const animation6 = document.getElementById('ceo-content1');
  const animation7 = document.getElementById('ceo1');
  const animation8 = document.getElementById('ceo-content2');
  if(window.scrollY >= 3000){
    animation4.classList.add('active')
    animation5.classList.add('active')
    animation6.classList.add('active')
    animation7.classList.add('active')
    animation8.classList.add('active')
    } else{
      animation4.classList.remove('active')
      animation5.classList.remove('active')
      animation6.classList.remove('active')
      animation7.classList.remove('active')
      animation8.classList.remove('active')
    }
    
});

// section5
window.addEventListener('scroll', function(){
  const animation9 = document.getElementById('section5content');
  if(window.scrollY >= 3850){
    animation9.classList.add('active')
  } else{
    animation9.classList.remove('active')
  }
});
// section8
window.addEventListener('scroll', function(){
  const animation10 = document.getElementById('blog');
  if(window.scrollY >= 4200){
    animation10.classList.add('active')
  } else{
    animation10.classList.remove('active')
  }
});


var a=1;
function toggle(){
  a++;
  if(a>2){
    a=1;
  }
  if(a==1){
   document.getElementById("toggle-hover").style="display: none;";

  }
  else if(a==2){
  document.getElementById("toggle-hover").style="display: block;";
  }

}
var a=1;
function toggle1(){
  a++;
  if(a>2){
    a=1;
  }
  if(a==1){
   document.getElementById("toggle-hover1").style="display: none;";

  }
  else if(a==2){
  document.getElementById("toggle-hover1").style="display: block;";
  }

}
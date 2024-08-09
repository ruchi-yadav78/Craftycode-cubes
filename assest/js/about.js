// section5
window.addEventListener('scroll', function(){
    const animation9 = document.getElementById('section3content');
    if(window.scrollY >= 1300){
      animation9.classList.add('active')
    } else{
      animation9.classList.remove('active')
    }
  });
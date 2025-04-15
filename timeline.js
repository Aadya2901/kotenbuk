(function (){
    "use strict";
    let item = document.querySelectorAll('.timeline li');

    function isElementInViewport(el){
        var rect = el.getBoundingClientRect();
        return(
            rect.top >= 0 && 
            rect.left >= 0 &&
            rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight)&&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
            
    }

    function callbackFunc(){
        for(let i=0; i< item.length; i++){
            if(isElementInViewport(item[i])){
                item[i].classList.add('in-view')
            }
        }
    }
    window.addEventListener('load', callbackFunc)
    window.addEventListener('resize', callbackFunc)
    window.addEventListener('scroll', callbackFunc)
  
})()

// sakura effect
const sakuraContainer = document.getElementById('sakura-container');

  function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('sakura');

    // Random horizontal start
    petal.style.left = Math.random() * 100 + 'vw';

    // Random duration and rotation offset
    petal.style.animationDuration = (Math.random() * 3 + 4) + 's';
    petal.style.setProperty('--x-end', `${Math.random() * 100 - 50}px`);

    sakuraContainer.appendChild(petal);

    // Remove after 7 seconds
    setTimeout(() => {
      petal.remove();
    }, 7000);
  }

  // Sprinkle for 5 seconds after load
  window.addEventListener('load', () => {
    const interval = setInterval(createPetal, 150);
    setTimeout(() => clearInterval(interval), 5000); // sprinkle only for 5 seconds
  });

window.addEventListener('load',() =>{
    const sounds = document.querySelectorAll('.sound');
    const pads   = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors =[
        '#CA2C68',
        '#0067B0',
        '#0EAC51',
        '#005B50',
        '#009B90',
        '#D3623B'
    ]
    
    // Let's get going with the sounds here
    pads.forEach((pad, index) =>{
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
        })
    });

    // Create a Function that makes bubbles

    const createBubbles = (index) => {

        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor= colors[index];
        bubble.style.animation = 'jumpBubble 1s ease-in-out';
        bubble.addEventListener('animationend',function(){
            visual.removeChild(this);
        })
    }
    
})
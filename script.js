let keys = document.querySelectorAll(".key");

let playSound = (e) =>{
    
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    if (!audio) {
        return;
    } 
    else {
        audio.currentTime = 0;
        audio.play();
        key.classList.add("playing");
    }
}

let removeTransition = (e) =>{
    if(e.propertyName !== "transform"){
        return;
    }
    else{
        console.log(this);
       this.classList.remove("palying");
    }
    
}

keys.forEach(key => key.addEventListener("transitionend" , removeTransition));
window.addEventListener("keydown", playSound);
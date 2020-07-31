var discussNewIdeas = document.getElementsByClassName('discussNewIdeas')[0];

function newIdeasParalaxFun(){

  if (window.innerWidth>window.innerHeight) {
    if(discussNewIdeas.getBoundingClientRect().y < window.innerHeight){
      discussNewIdeas.style.backgroundPosition = "0 " + ((-discussNewIdeas.getBoundingClientRect().y/7) - discussNewIdeas.getBoundingClientRect().height/3) + "px";
    }
  }else{
    if(discussNewIdeas.getBoundingClientRect().y < window.innerHeight){
      discussNewIdeas.style.backgroundPosition = "-25vw " + (50+(-discussNewIdeas.getBoundingClientRect().y/7) - discussNewIdeas.getBoundingClientRect().height/3) + "px";
    }
  }

}

window.addEventListener('scroll',()=>{
  newIdeasParalaxFun();
})

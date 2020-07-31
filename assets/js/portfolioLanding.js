var simpleArc = document.getElementsByClassName('simpleArc');
var w = document.getElementsByClassName('w');
var leftPortfolioText = document.getElementsByClassName('leftPortfolioText');
var leftImgContainerRevealDiv = document.getElementsByClassName('leftImgContainerRevealDiv');
var spanDelayClass = document.getElementsByClassName('spanDelayClass');

// hover texts
// first
var leftImgContainer = document.getElementsByClassName('leftImgContainer');
leftImgContainer[0].addEventListener('mouseenter',()=>{
  leftPortfolioText[0].style.transform = 'translate(2vw,0)';
  leftPortfolioText[1].style.transform = 'translate(2vw,0)';
});
leftImgContainer[0].addEventListener('mouseleave',()=>{
  leftPortfolioText[0].style.transform = 'translate(0vw,0)';
  leftPortfolioText[1].style.transform = 'translate(0vw,0)';
});
// secund
var leftImgContainer = document.getElementsByClassName('leftImgContainer');
leftImgContainer[1].addEventListener('mouseenter',()=>{
  leftPortfolioText[2].style.transform = 'translate(2vw,0)';
  leftPortfolioText[3].style.transform = 'translate(2vw,0)';
});
leftImgContainer[1].addEventListener('mouseleave',()=>{
  leftPortfolioText[2].style.transform = 'translate(0vw,0)';
  leftPortfolioText[3].style.transform = 'translate(0vw,0)';
});
// third
var leftImgContainer = document.getElementsByClassName('leftImgContainer');
leftImgContainer[2].addEventListener('mouseenter',()=>{
  leftPortfolioText[4].style.transform = 'translate(2vw,0)';
  leftPortfolioText[5].style.transform = 'translate(2vw,0)';
});
leftImgContainer[2].addEventListener('mouseleave',()=>{
  leftPortfolioText[4].style.transform = 'translate(0vw,0)';
  leftPortfolioText[5].style.transform = 'translate(0vw,0)';
});
// fourth
var leftImgContainer = document.getElementsByClassName('leftImgContainer');
leftImgContainer[3].addEventListener('mouseenter',()=>{
  leftPortfolioText[6].style.transform = 'translate(2vw,0)';
  leftPortfolioText[7].style.transform = 'translate(2vw,0)';
});
leftImgContainer[3].addEventListener('mouseleave',()=>{
  leftPortfolioText[6].style.transform = 'translate(0vw,0)';
  leftPortfolioText[7].style.transform = 'translate(0vw,0)';
});



var spanDelayTime = 0.05;
for (var i = 0; i < spanDelayClass.length; i++) {
  spanDelayClass[i].transitionDelay = `${spanDelayTime}s`
  spanDelayTime+=0.035;
}

function spanMoveLeft(spanClass,sectionSide) {
  var spanElement = document.getElementsByClassName(spanClass);
  var leftPos = 0;
  for (var i = 0; i < spanElement.length; i++) {
    spanElement[i].style.left = `${leftPos}vw`;
    spanElement[i].style.filter = 'blur(0)';
    if(sectionSide == 'left'){
      leftPos-=2;
    }else{
      leftPos+=2;
    }
  }
}

function rotate(spanClass) {
  var spanElement = document.getElementsByClassName(spanClass);
  var rotateAngle = 0;
  for (var i = 0; i < w.length; i++) {
    spanElement[i].style.transform = `rotate(${rotateAngle}deg)`;
    spanElement[i].style.left = `0`;
    rotateAngle+=13;
  }
}

// var fireFirstMovement = 1;
function fireSpanMovement(arcActualElement,spanClassName,sectionSide) {
  if(arcActualElement.getClientRects()[0].top < window.innerHeight *0.95 && arcActualElement.dataset.atr != 'yes'){
    arcActualElement.dataset.atr = 'yes';
    spanMoveLeft(spanClassName,sectionSide)
    // console.log(123);
  }
}

function fireSpanRotate(arcActualElement,spanClass) {
  if(arcActualElement.getClientRects()[0].top < window.innerHeight *0.35){
    rotate(spanClass);
  }
}

function fireRevealAndTextAnim(revealActualElement,textActualElement,textActualElementTwo,sectionSide) {
  if(revealActualElement.getClientRects()[0].top < window.innerHeight *0.30){
    revealActualElement.style.width = '0%';
    setTimeout(function () {
      if(sectionSide === 'left'){
        textActualElement.style.left = '46vw';
        textActualElementTwo.style.left = '46vw';
      }else{
        textActualElement.style.right = '51.13vw';
        textActualElementTwo.style.right = '51.13vw';
      }
    }, 500);
  }
}

// baner change images
var bnerImgBig = document.getElementsByClassName('bnerImgBig');
var bnerImgSmall = document.getElementsByClassName('bnerImgSmall');

function runBanerInterval() {
  setTimeout(function () {
    for (var i = 0; i < bnerImgBig.length+1; i++) {
      bnerImgBig[0].children[i].style.opacity = '0';
    };
    bnerImgBig[0].children[Math.round(Math.random()*2)].style.opacity = '1';
    // console.log(1);
  }, 4000);
  setTimeout(function () {
    for (var i = 0; i < bnerImgBig.length+1; i++) {
      bnerImgBig[1].children[i].style.opacity = '0';
    };
    bnerImgBig[1].children[Math.round(Math.random()*2)].style.opacity = '1';
    // console.log(12);
  }, 2000);
  for (var i = 0; i < bnerImgBig.length+1; i++) {
    bnerImgSmall[0].children[i].style.opacity = '0';
  };
  bnerImgSmall[0].children[Math.round(Math.random()*2)].style.opacity = '1';

}




// window listeners
window.addEventListener('scroll',()=>{
  // 1
  fireSpanMovement(simpleArc[0],'w','left');
  fireSpanRotate(simpleArc[0],'w');
  fireRevealAndTextAnim(leftImgContainerRevealDiv[0], leftPortfolioText[0],leftPortfolioText[1], 'left')

  // 2
  fireSpanMovement(simpleArc[1],'b');
  fireSpanRotate(simpleArc[1],'b');
  fireRevealAndTextAnim(leftImgContainerRevealDiv[1],leftPortfolioText[2],leftPortfolioText[3],null)

  // 3
  fireSpanMovement(simpleArc[2],'c','left');
  fireSpanRotate(simpleArc[2],'c');
  fireRevealAndTextAnim(leftImgContainerRevealDiv[2], leftPortfolioText[4], leftPortfolioText[5], 'left')

  // 2
  fireSpanMovement(simpleArc[3],'d');
  fireSpanRotate(simpleArc[3],'d');
  fireRevealAndTextAnim(leftImgContainerRevealDiv[3],leftPortfolioText[6] ,leftPortfolioText[7])
});


window.addEventListener('load',()=>{
  runBanerInterval();

  setInterval(function () {
    runBanerInterval();
  }, 6000);
})

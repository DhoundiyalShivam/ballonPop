let container = document.querySelector('.container')
let won = document.querySelector('.won')

let numberOfBallons = 25;
let ballonPoped =0;
 for(let i=0;i<numberOfBallons;i++){
     let ballonEl =  document.createElement('div')
     ballonEl.textContent='POP!';
     ballonEl.classList.add("ballon")
     let randomColor = getColor()
      ballonEl.style.backgroundColor=randomColor;
      ballonEl.style.color=randomColor;

     container.appendChild(ballonEl)
     ballonEl.addEventListener('mouseenter',function(){
        if(ballonEl.style.backgroundColor !=='transparent'){
            ballonPoped++
            ballonEl.style.backgroundColor='transparent'
       
               allPoped(ballonPoped)
        }
     })
}
function allPoped(num){
    console.log(num)

    if(num===25){

        container.style.display='none'
        won.style.display='block'
    }
}

function getColor(){
    function color(){
        let hex= random(255).toString(16);
        // return hex.padStart(2,"0")
           return hex.padStart(2,"0")
    }
    return "#"+color()+color()+color()
}

function random(number){
    number= Math.ceil(Math.random()*number)
    return number
}
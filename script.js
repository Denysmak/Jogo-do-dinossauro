let character = document.getElementById("character");
let block = document.getElementById("block");
let i = 1;
let stopFunction = false;
let game = document.getElementById("game");
let characterJump = new Audio("./sound/jump.wav")
let youLose = new Audio("./sound/lose.wav"); 
let lose = document.querySelector(".lose")
let tentarDeNovo = document.getElementById("tentarDeNovo");
let sound = document.querySelector(".sound");
let soundOff = document.querySelector(".soundOff")
let fullScreen = document.querySelector(".fullScreen");
let minimizeScreen = document.querySelector(".minimize");

// var body = document.body;
//     function requestFullScreen(){
//         body.requestFullscreen()
//     }
//     function minimize(){
//         if(document.fullscreenElement){
//         document.exitFullscreen().then(()=>{console.log("minimize")}).catch((err)=> {console.log(err)})
    
//     }
//     }
  
var elem = document.documentElement;
function big() {
    elem.requestFullscreen();
}

function exit() {
    document.exitFullscreen();
}



    sound.addEventListener("click", () => {
        sound.style.display = "none";
        soundOff.style.display = "flex"
        characterJump.muted = true
        youLose.muted = true
    })

    soundOff.addEventListener("click", () => {

        sound.style.display = "flex";
        soundOff.style.display = "none"
        characterJump.muted = false
        youLose.muted = false

    })



    tentarDeNovo.addEventListener("click",() => {

        window.location.reload()

    })

  

    function walking(){
       
        setInterval(() => {
           
            character.style.backgroundImage = `url(./png/run${i}.png)`
            if (i < 8) {

                i++

            }
            else if (i = 8) { i = 1 }


        }, 80)
    }

function changeBackground() {
let x = 1;
    setInterval(() => {
        
        game.style.backgroundImage = `url(./backgrounds/back${x}.png)`
        if (x < 6) {

            x++

        }
        else if (x = 6) { x = 1 }


    }, 6000)
}

changeBackground()




let rocks = ["a", "b", "c", "d", "e", "f"];
let valorRocks = "url(./small/a1.png)";

    function rock() {
        valorRocks = rocks[Math.floor(Math.random() * 6)]


    }

    setInterval(() => {

        rock()
        console.log(valorRocks)

    }, 1000);






function countingBack() {
    let i = 16;


    setInterval(() => {

        if (i > 0) {
            i--
        }
        else if (i = 1) { i = 15 }
   
        block.style.backgroundImage = `url(./small/${valorRocks + i}.png)`
    }, 100)
    
       
        
    

  



}

countingBack()

   


document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        jump();
    }
})
function jump() {

    if (character.classList != "animate") {
        stopFunction = true
        character.classList.add("animate");
    }
    setTimeout(() => {

        character.classList.remove("animate")
        character.style.backgroundImage = `url(./png/jump${i}.png)`
        if (i < 12) {

            i++

        }
        else if (i = 12) { i = 1 }


    }, 500)
    characterJump.play()

}

    setTimeout(() => {
        block.classList.add("blockAnimate")    
    }, 1000);


    let checkDead = setInterval(() => {

        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

        var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

        if(blockLeft<20 && blockLeft > 0 && characterTop>=290){
            block.style.animation = "none";
            block.style.display = "none"
            lose.style.display = "flex"
            youLose.play();


        }

    },10)
//   if(character.style.top === "150px"){

//     walking()

//   }


    walking();


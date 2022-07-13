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
let h1 = document.getElementsByTagName("h1")[0];
let play = document.querySelector(".play");
let fullScreen = document.querySelector(".fullScreen")
let minimizeScreen = document.querySelector(".minimize")



tentarDeNovo.addEventListener("mouseover", () => {

    if(document.fullscreenElement == null){
        tentarDeNovo.style.padding = "19px 29px"
        tentarDeNovo.style.fontSize = "1rem"
    }
    else{
        tentarDeNovo.style.padding = "50px 75px"
        tentarDeNovo.style.fontSize = "2.5rem"
    }

})

tentarDeNovo.addEventListener("mouseout", () => {

    if (document.fullscreenElement == null) {
        tentarDeNovo.style.padding = "15px 25px"
        tentarDeNovo.style.fontSize = "0.8rem"
    }  
    else {
        tentarDeNovo.style.padding = "40px 65px"
        tentarDeNovo.style.fontSize = "2rem"
    }


})

play.addEventListener("mouseover", () => {

    if (document.fullscreenElement == null) {
        play.style.padding = "4% 8%"
        play.style.fontSize = "2.2rem"
    }
    else {
        play.style.padding = "4% 8%"
        play.style.fontSize = "2.6rem"
    }

})
play.addEventListener("mouseout", () => {

    if (document.fullscreenElement == null) {
        play.style.padding = "3% 7%"
        play.style.fontSize = "2rem"
    }
    else {
        play.style.padding = "3% 7%"
        play.style.fontSize = "2.2rem"
    }


})
play.addEventListener("click", () => {

    character.style.display = "flex"
    changeBackground()
    block.style.display = "flex"
    play.style.display = "none"
    setInterval(() => {
        rock()
    }, 1200);


})

minimizeScreen.addEventListener("mouseover", () => {
    minimizeScreen.style.width = "35px"
})
minimizeScreen.addEventListener("mouseout", () => {
    minimizeScreen.style.width = "30px"
})


sound.addEventListener("mouseover", () => {
    if(document.fullscreenElement == null){
        sound.style.width = "20px"
    }
    else{
        sound.style.width = "30px" 
    }
})
sound.addEventListener("mouseout", () => {
    if (document.fullscreenElement == null) {
        sound.style.width = "15px"
    }
    else {
        sound.style.width = "25px"
    }
})
soundOff.addEventListener("mouseover", () => {
    if (document.fullscreenElement == null) {
        sound.style.width = "20px"
    }
    else {
        sound.style.width = "30px"
    }
})
soundOff.addEventListener("mouseout", () => {
    if (document.fullscreenElement == null) {
        sound.style.width = "15px"
    }
    else {
        sound.style.width = "25px"
    }
})


  
var elem = document.documentElement;
function big() {
    elem.requestFullscreen();
    fullScreen.style.display = "none"
    minimizeScreen.style.display = "flex";
    game.style.height = "100%"
    game.style.width = "100%"
    character.style.height = "250px"
    character.style.width = "380px"
    character.style.left = "10px"
    character.style.top = "77%"
    block.style.width = "150px"
    block.style.height = "150px"
    block.style.top = "64%"
    // block.style.left = "10px"
    block.style.animation = "block2 700ms infinite linear"
    h1.style.fontSize = "8rem"
    tentarDeNovo.style.padding = "40px 65px"
    tentarDeNovo.style.fontSize = "2rem"
    minimizeScreen.style.width = "30px"
    minimizeScreen.style.left = "98%"
    sound.style.left = "96%"
    soundOff.style.left = "96%"
    sound.style.width = "25px"
    soundOff.style.width = "25px"
    play.style.fontSize = "2.5rem"
    // block.classList.remove("blockAnimate")
    // setTimeout(() => {
        
    //     block.classList.add("blockAnimateBig")
    // }, 2500);

}




function exit() {
    document.exitFullscreen();
    fullScreen.style.display = "flex"
    minimizeScreen.style.display = "none"
    game.style.height = "400px"
    game.style.width = "800px"
    character.style.height = "90px"
    character.style.width = "120px"
    character.style.left = "0px"
    character.style.top = "320px"
    block.style.width = "70px"
    block.style.height = "60px"
    block.style.top = "65%"
    block.style.animation = "block 1 s infinite linear"
    h1.style.fontSize = "3rem"
    tentarDeNovo.style.padding = "15px 25px"
    tentarDeNovo.style.fontSize = "1rem"
    sound.style.left = "750px"
    soundOff.style.left = "750px"
    sound.style.width = "15px"
    soundOff.style.width = "15px"
    play.style.fontSize = "2rem"
    // setTimeout(() => {
    //     block.classList.add("blockAnimate")
    // }, 2500);

}

let checkDead = setInterval(() => {

    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (document.fullscreenElement == null) {
        if (blockLeft < 20 && blockLeft > 0 && characterTop >= 290) {
            block.style.animation = "none";
            block.style.display = "none"
            lose.style.display = "flex"
            youLose.play();
        }  
    }
    else{
        if(blockLeft < 150 && blockLeft > 5 && characterTop >= 700){
            block.style.animation = "none";
            block.style.display = "none"
            lose.style.display = "flex"
            youLose.play();
        }
    }
}, 1)


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
    game.style.backgroundImage = "url(./backgrounds/back1.png)"
    setInterval(() => {
        
        game.style.backgroundImage = `url(./backgrounds/back${x}.png)`
        if (x < 6) {

            x++

        }
        else if (x = 6) { x = 1 }


    }, 7000)
}






let rocks = ["a", "b", "c", "d", "e", "f"];
let valorRocks = "url(./small/a1.png)";

    function rock() {
        valorRocks = rocks[Math.floor(Math.random() * 6)]


    }

    // setInterval(() => {

    //     rock()
    //     console.log(valorRocks)

    // }, 900);






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
        block.classList.add("blockAnimateBig")    
    }, 2500);
  
 
 

   

//   if(character.style.top === "150px"){

//     walking()

//   }


    walking();


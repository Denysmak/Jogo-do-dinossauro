let character = document.getElementById("character");
let block = document.getElementById("block");
let i = 1;
let stopFunction = false;
    function walking(){
       
        setInterval(() => {

            character.style.backgroundImage = `url(./png/run${i}.png)`
            if (i < 8) {

                i++

            }
            else if (i = 8) { i = 1 }


        }, 80)
    }


function countingBack() {
    let i = 16;


    setInterval(() => {

        if (i > 0) {
            i--
        }
        else if (i = 1) { i = 15 }

       block.style.backgroundImage = `url(./small/a${i}.png)`
    }, 100)



}

countingBack()

   
 
  
    
// document.body.onkeyup = function (e) {
//     if (e.key == " " ||
//         e.code == "Space" ||
//         e.keyCode == 32
//     ) {
//         function jump() {

//             if (character.classList != "animate") {
//                 stopFunction = true
//                 character.classList.add("animate");
//             }
//             setTimeout(() => {

//                 character.classList.remove("animate")
//                 character.style.backgroundImage = `url(./png/jump${i}.png)`
//                 if (i < 12) {

//                     i++

//                 }
//                 else if (i = 12) { i = 1 }


//             }, 500)


//         }
//     }
// }

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


}




    let checkDead = setInterval(() => {

        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

        var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

        if(blockLeft<20 && blockLeft > 0 && characterTop>=130){
            // block.style.animation = "none";
            // block.style.display = "none"
            alert("You lose");


        }

    },10)
//   if(character.style.top === "150px"){

//     walking()

//   }


    walking();


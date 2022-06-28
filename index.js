// var buttons = document.querySelectorAll("button");
// var i = 0, length = buttons.length;

// for ( i = 0; i < length; i++) {
//     if (document.addEventListener) {
//         buttons[i].addEventListener("click", handleClick);
//     } else {
//         buttons[i].addEventListener("click", handleClick) 
//         }
//     }







// var _buttons = document.querySelectorAll("button"); //create nodelist of buttons

// var i = 0, length = _buttons.length; //access nodelist size with length property

// for ( i = 0; i < length; i++) {
//     if (_buttons.addEventListener) {
//         _buttons[i].addEventListener("click", handleClick);
//     } else {
//         _buttons[i].addEventListener("click", handleClick);
//     }
// }





//event listener: detect mouse clicks


var a = document.querySelectorAll(".drum").length;

for ( var i = 0; i < a; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML =  this.innerHTML;
        checkKey(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        
    });
}






//event listener: detect keyboard presses

document.addEventListener("keydown", function(event){
    checkKey(event.key);
    buttonAnimation(event.key);
});

//function 

function checkKey (key) {
    switch (key) {
        case "w":
            var playW = new Audio ('sounds/tom-1.mp3');
            playW.play();
            break;

        case "a":
            var playA = new Audio ('sounds/tom-2.mp3');
            playA.play();
            break;
        
        case "s":
            var playS = new Audio ('sounds/tom-3.mp3');
            playS.play();
            break;

        case "d":
            var playD = new Audio ('sounds/tom-4.mp3');
            playD.play();
            break;

        case "j":
            var playJ = new Audio ('sounds/snare.mp3');
            playJ.play();
            break;

        case "k":
            var playK = new Audio ('sounds/kick-bass.mp3');
            playK.play();
            break;

        case "l":
            var playL = new Audio ('sounds/crash.mp3');
            playL.play();
            break;

        default:
            console.log(key);
            break;
    }
}




function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey);
    
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
    
}







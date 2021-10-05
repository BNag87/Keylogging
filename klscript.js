// Declare vars on page load



//function to listen for keyboard key presses

document.addEventListener('keydown', (event) =>{
    let keyPressed = document.getElementById("keyPressDisplay")
    let keyEventKey = document.getElementById("keyPressEventKey")
    let keyEventCode = document.getElementById("keyPressEventCode")
    let keyEventWhich = document.getElementById("keyPressEventWhich")

    let keyDown = event.key
    let keyLocation = event.location
    let keyCode = event.code
    let keyWhich = event.which

    //update the keyPressed field, that displays the literal key pressed;
    keyPressed.innerHTML = ("["+keyDown+"] was pressed!");
    keyPressed.style.fontSize = "22px";
    keyPressed.style.color = "rgb(170,150,20)";

    //update the keyEventkey field, that displays the literal key pressed;
    keyEventKey.innerHTML = (keyDown);
    keyEventKey.style.fontSize = "20px";
    keyEventKey.style.color = "rgb(170,150,20)";

    //update the keyEventCode field, that displays the literal key pressed;
    keyEventCode.innerHTML = (keyCode);
    keyEventCode.style.fontSize = "20px";
    keyEventCode.style.color = "rgb(170,150,20)";

    //update the keyEventWhich field, that displays the literal key pressed;
    keyEventWhich.innerHTML = (keyWhich);
    keyEventWhich.style.fontSize = "20px";
    keyEventWhich.style.color = "rgb(170,150,20)";
});

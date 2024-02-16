function moveButton(buttonId) {
    if (buttonId === 'noButton') {
        var button = document.getElementById(buttonId);
        var newX = Math.random() * (window.innerWidth - button.clientWidth);
        var newY = Math.random() * (window.innerHeight - button.clientHeight);

        button.style.position = "absolute";
        button.style.left = newX + "px";
        button.style.top = newY + "px";
    }
}
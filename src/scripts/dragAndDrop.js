var drag = document.querySelector('.drag');
var body = document.querySelector('body');
var dragging = false;

body.addEventListener('mousemove', (event) => {
    if(dragging) {
        var mousePos = {
            X: event.clientX,
            Y: event.clientY
        }
        var topOffset = drag.offsetHeight / 2;
        var leftOffset = drag.offsetWidth / 2;
        var left = mousePos.X - leftOffset;
        var top = mousePos.Y - topOffset;
        drag.style.top = top + 'px';
        drag.style.left = left + 'px';
    }
})
drag.addEventListener('mousedown', () => {
    dragging = true;
});
body.addEventListener('mouseup', () => {
    dragging = false;
});
document.addEventListener("DOMContentLoaded", function() {
    let square = document.getElementById("square");
    
    window.addEventListener('deviceorientation', function(e) {
        a = Math.floor(e.alpha);
        b = Math.floor(e.beta);
        g = Math.floor(e.gamma);
        let transform = 'rotateZ(' + Math.round(e.alpha) + 'deg) rotateX(' + Math.round(e.beta -60) + 'deg) rotateY(' + Math.round(e.gamma) + 'deg)';
        square.style.transform = transform;   
    });
})
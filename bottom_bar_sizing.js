//Called from resize events and mutation observer in parent
//var scale = 2; //called from python
function resize(){
    document.body.style.zoom = scale/window.devicePixelRatio;
}

function changeScale(x){ //called from parent
  scale = x;
  resize();
}

window.visualViewport.addEventListener('resize', resize);
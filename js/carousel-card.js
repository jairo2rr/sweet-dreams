// Carousel



const carousel = document.querySelectorAll('.carousel');

let isDragStart = false, prevPageX,isDragging = false, prevScrollLeft, positionDiff;


const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel[0].scrollLeft;
}
const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel[0].classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel[0].scrollLeft = prevScrollLeft - positionDiff;
}
const dragStop = (position) =>{
    isDragStart = false;
    carousel[0].classList.remove("dragging");
}

carousel[0].addEventListener("touchstart",dragStart);
carousel[0].addEventListener("mousedown",dragStart);
carousel[0].addEventListener("mousemove",dragging);
carousel[0].addEventListener("touchmove",dragging);
carousel[0].addEventListener("mouseup",dragStop);
carousel[0].addEventListener("toucheleave",dragStop);
carousel[0].addEventListener("mouseleave",dragStop);
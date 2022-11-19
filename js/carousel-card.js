// Carousel

const carousel = document.querySelector(".carousel");

let isDragStart = false, prevPageX,isDragging = false, prevScrollLeft, positionDiff;


const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}
const dragStop = () =>{
    isDragStart = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown",dragStart);
carousel.addEventListener("touchstart",dragStart);

carousel.addEventListener("mousemove",dragging);
carousel.addEventListener("touchmove",dragging);

carousel.addEventListener("mouseup",dragStop);
carousel.addEventListener("toucheleave",dragStop);

carousel.addEventListener("mouseleave",dragStop);
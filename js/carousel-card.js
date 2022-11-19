// Carousel



const carousel = document.querySelectorAll('.carousel');

let isDragStart = false, prevPageX,isDragging = false, prevScrollLeft, positionDiff;



const dragStart = (e,item) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = item.scrollLeft;
}
const dragging = (e,item) => {
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    item.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    item.scrollLeft = prevScrollLeft - positionDiff;
}
const dragStop = (item) =>{
    isDragStart = false;
    item.classList.remove("dragging");
}
carousel.forEach(item => {
    item.addEventListener("touchstart", event => {
      dragStart(event,item);
    });
    item.addEventListener("touchstart",event => {
        dragStart(event,item);
    });
    item.addEventListener("mousedown",event => {
        dragStart(event,item);
    });
    item.addEventListener("mousemove",event => {
        dragging(event,item);
    });
    item.addEventListener("touchmove",event => {
        dragging(event,item);
    });
    item.addEventListener("mouseup",event => {
        dragStop(item);
    });
    item.addEventListener("toucheleave",event => {
        dragStop(item);
    });
    item.addEventListener("mouseleave",event => {
        dragStop(item);
    });
  });
// carousel[0].addEventListener("touchstart",dragStart(position=0));
// carousel[0].addEventListener("mousedown",dragStart(position=0));
// carousel[0].addEventListener("mousemove",dragging(position=0));
// carousel[0].addEventListener("touchmove",dragging(position=0));
// carousel[0].addEventListener("mouseup",dragStop(position=0));
// carousel[0].addEventListener("toucheleave",dragStop(position=0));
// carousel[0].addEventListener("mouseleave",dragStop(position=0));
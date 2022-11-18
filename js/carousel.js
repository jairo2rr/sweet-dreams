// Carousel

const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, prevPageX,isDragging = false, prevScrollLeft, positionDiff;

const showHideIcons = () =>{
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    let firstImgWidth = firstImg.clientWidth + 20;
    icon.addEventListener("click",()=>{
        carousel.scrollLeft += icon.id == "left-suscripcion" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(),60);
    });
});

const autoSlide = () =>{
    //if there is no image to scroll
    if(carousel.scrollLeft == (carousel.scrollWidth - carousel.clientWidth)) return;
    positionDiff = Math.abs(positionDiff);
    let firstImgWidth = firstImg.clientWidth + 20;
    let valDifference = firstImgWidth - positionDiff;
    if(carousel.scrollLeft > prevScrollLeft){
        //User is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    //User is scrolling to the left
    return carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

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
    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown",dragStart);
carousel.addEventListener("touchstart",dragStart);

carousel.addEventListener("mousemove",dragging);
carousel.addEventListener("touchmove",dragging);

carousel.addEventListener("mouseup",dragStop);
carousel.addEventListener("toucheleave",dragStop);

carousel.addEventListener("mouseleave",dragStop);
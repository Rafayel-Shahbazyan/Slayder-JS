const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('active'); 
    }
    slides[n].classList.add('active') ;   
}

const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active') ;   
}


const currentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
}

const nextSlide = () => {
    clear()
    if(index == slides.length - 1) {
        index = 0;
        currentSlide(index)
    } else {
        index++;
        currentSlide(index)
    }
}

const prevSlide = () => {
    clear()
    if(index == 0){
        index = slides.length - 1;
        currentSlide(index)
    } else {
        index--;
        currentSlide(index)
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click' , () => {
        index = indexDot;
        currentSlide(index);
        clearInterval(interval)
    })
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

let interval = setInterval(nextSlide,2000)

let clear = () => {
    next.addEventListener('click' , () => {
        clearInterval(interval)
    })
    prev.addEventListener('click' , () => {
        clearInterval(interval)
    })
}
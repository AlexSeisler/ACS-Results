// document.write("hello world");

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName('mySlide');

    for (i = 0; i <slides.length; i++){
        slides[i].style.display = 'none';
    }
    slideIndex++;

       
    if (slideIndex > slides.length) { slideIndex = 1}

   
    slides[slideIndex-1].style.display = 'block';
    slides[slideIndex -1].style.opacity = '1';

   
    setTimeout(showSlides, 5000);
   
}
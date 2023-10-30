let num = 1;
showSlide(num);

function nextSlide(n)
{
    showSlide(num += n)
}

function currentSlide(n)
{
    showSlide(num = n)
}

function showSlide(n)
{
    let i;

    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if(n > slides.length)
    {
        num = 1;
    }
    if(n < 1)
    {
        num = slides.length;
    }

    for(i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }

    for(i=0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace(" active" , "");
    }


    slides[num-1].style.display = "block";
    dots[num-1].className += " active";

}
$(document).ready(function(){
    
           var timer = setInterval(function() {
 
             var count = $('span.countdown').html();
             console.log(count);
             if (count > 1) {
               $('span.countdown').html(count - 1);
             } else {
                //  $('#form').modal('toggle');
                $('#timerdata').html("Time Up")
               clearInterval(timer);
             }
           }, 1000);



const galleryImages = document.querySelectorAll('#gallery .portfolio-wrap');

galleryImages.forEach(img => {

  img.addEventListener('click', () => {
    const portfolioImg = document.querySelector('.portfolio-container img');

    portfolioImg.src = img.firstElementChild.src;
  });
});
 });
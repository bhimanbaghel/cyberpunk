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
 });
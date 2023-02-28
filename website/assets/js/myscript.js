$(document).ready(function(){     
    var timer = setInterval(function() {

        var count = $('span.countdown').html();
        if (count > 1) {
        $('span.countdown').html(count - 1);
        } else {
        //  $('#form').modal('toggle');
        clearInterval(timer);
        }
    }, 1000);
 
 });
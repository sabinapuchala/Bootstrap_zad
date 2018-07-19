$(document).ready(function () {
    console.log('test');
    
    //});
    //
    //document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //    anchor.addEventListener('click', function (e) {
    //        e.preventDefault();
    //
    //        document.querySelector(this.getAttribute('href')).scrollIntoView({
    //            behavior: 'smooth'
    //        });
    //    });
    //});

    //to u góry może nie działać na wszystkich przeglądarkach


    var root = $('html, body');

    $('a[href^="#"]').click(function () {
        
        console.log($.attr(this, 'href'));
        
        root.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);

        return false;
        //return false nie musi być
    });
    
    $(window).scroll(function() {
        
        if($(window).scrollTop() > $('#main-header').height() - $('#main-nav').height()) { 
            $('#main-nav').addClass('scroll');
        } else {
            $('#main-nav').removeClass('scroll');
        }
        
     });

});



//$(document).getElementById('#main-header').height



$(document).ready(function () {

    // MENU MOBILE
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn i').toggleClass('fa-xmark fa-bars');
    });

    const sections = $('section');
    const navitems = $('.nav-item');
    const header = $('header');

    // ===== SCROLL =====
    $(window).on('scroll', function () {

        const scrollPosition = $(window).scrollTop() - header.outerHeight();
        let activeSectionIndex = 0;

        // SOMBRA DO HEADER
        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '0px 2px 8px rgba(0,0,0,0.1)');
        }

        // DETECTA A SEÇÃO ATIVA
        sections.each(function (i) {
            const sectionTop = $(this).offset().top - 100;
            const sectionBottom = sectionTop + $(this).outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        });

        navitems.removeClass('active');
        $(navitems[activeSectionIndex]).addClass('active');
    });

    // ===== SCROLL REVEAL (FORA DO SCROLL) =====
    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 1200,
        distance: '50px',
        reset: false
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 1200,
        distance: '50px',
        duration: 2000,
        reset: false
    });
        ScrollReveal().reveal('#testimonial_chef', {
    origin: 'left',
    duration: 1000,
    distance: '50px',
    reset: false
});

      ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1200,
        distance: '50px',
        duration: 1000,
        reset: false
    });

});

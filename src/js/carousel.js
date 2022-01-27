jQuery(document).ready(function($){

    // OWL CAROUSEL - SOLUÇÕES - ***TIRAR COMENTÁRIO DO COD ABAIXO***
    // $("#solucoes .owl-carousel").owlCarousel({
    //     loop: true,
    //     margin: 30,
    //     autoplay: true,
    //     autoplayTimeout: 5000,
    //     dots: false,
    //     lazyLoad: true,
    //     nav: true,
    //     navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    //     responsive: {
    //         0: {
    //             items: 1,
    //         },
    //         600: {
    //             items: 1,
    //         },
    //         1000: {
    //             items: 1,
    //         },
    //     },
    // });

    // OWL CAROUSEL - 'Depoimentos'
    $("#depoimentos .owl-carousel").owlCarousel({
        loop: true,
        margin: 30,
        autoplay: false,
        autoplayTimeout: 5000,
        dots: false,
        lazyLoad: true,
        nav: true,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1440: {
                items: 2,
            },
        },
    });

});


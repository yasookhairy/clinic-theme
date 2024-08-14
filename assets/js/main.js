// main.js

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll) library
    AOS.init({
        duration: 1000, // Animation duration
        easing: 'ease-in-out', // Animation easing
        once: true // Animation only occurs once
    });

    // Initialize Slick Carousel for testimonials
// Initialize Slick Slider
    $('.home-testimonials-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    // Initialize Slick Carousel for testimonials (about page [testimonials slider section] )
    $('.ab-testimonials-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        dotsClass: 'slick-dots'
    });

    // Initialize Slick Carousel for testimonials (services page [testimonials slider section] )
    $('.ser-testimonials-carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    });

    // Initialize Slick Carousel for testimonials (doctors page [testimonials slider section] )
    $('.doc-carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
    });

    // Example function to handle form submissions or other interactions
    // function handleFormSubmit(event) {
    //     event.preventDefault();
    //     alert('Form submitted!');
    // }
    // document.querySelector('form').addEventListener('submit', handleFormSubmit);

    // Other custom JavaScript code can be added here
});

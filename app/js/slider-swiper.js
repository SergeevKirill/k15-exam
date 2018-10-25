$(document).ready(function(){new Swiper(".swiper-container",{
    slidesPerView:1,
    centeredSlides:!0,
    loop:!0,
    autoplay:{delay:4500,disableOnInteraction:!1},
    pagination:{el:".swiper-pagination",clickable:!0},
    navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})
});

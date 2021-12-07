const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
        grabCursor: true,
        // autoplay: {
        //     delay: 1500,
        //     disableOnInteraction: false,
        //   },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
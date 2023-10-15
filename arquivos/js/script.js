   //menu hamburge
   function toggleMenu() {
    const menu = document.querySelector(".navbar ul");
    menu.classList.toggle("show-menu");
    console.log("toggleMenu foi chamada.");
  }
  
   
   
   //carrosel dos projetos

    $(document).ready(function() {
        $('.project-container').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: true
        });
      });
      
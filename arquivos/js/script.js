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
      

// transição video 

window.addEventListener("load", function () {

});


const video = document.getElementById('background-video');

const options = {
  root: null,  // Use the viewport as the root
  rottMargin: "Opx",
  threshold: 0.5,  // Quando 50% do elemento estiver visível

};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          video.style.opacity = 1; // Torna o vídeo visível
          observer.unobserve(video); // Para de observar o vídeo após torná-lo visível
      }
  });
}, options);


observer.observe(video);

// efeito scrollrevealjs

window.sr = ScrollReveal({ reset: true });

sr.reveal('.area-1', { duration: 2000 });

sr.reveal('.area-2', { 
  rotate: { x:100, y:100, z: 80},
  duration: 2500,  

});


sr.reveal('.hico', { 
  rotate: { x:100, y:100, z: 80},
  duration: 2500,  

});



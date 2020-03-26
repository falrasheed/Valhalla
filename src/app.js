const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');



  burger.addEventListener('click', () => {
    //Toggle Nav
    nav.classList.toggle('nav-active');
    // Animate Links
    navLinks.forEach((link, index) => {
      if(link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
      }
    });

    // Burger Animation
    burger.classList.toggle('toggle');
    //divides amount of li's by 7 seconds = console.long(index / 7);
    // or add  initial delay for li's by = console.log(index / 5 +0.2) etc..
  });
}

navSlide();













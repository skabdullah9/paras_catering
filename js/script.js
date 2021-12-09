const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const swiper2 = new Swiper('.swiper-2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
let navbar = document.querySelector('nav')
if(window.matchMedia('(max-width: 768px)').matches) {
  navbar = document.querySelectorAll('nav')[1]
} else {
  navbar = document.querySelectorAll('nav')[0]
}
const navLinks = Array.from(navbar.children)

navbar.addEventListener('click', (e) => {
  if (e.target.dataset.href) {
    document.getElementById(e.target.dataset.href).scrollIntoView({behavior: "smooth", block: "start"})

    if(window.matchMedia('(max-width: 768px)').matches) {
      navLinks.forEach(link => link.tagName === 'BUTTON' && link.classList.remove('bg-pink-600', 'text-white'))
      e.target.classList.add('bg-pink-600', 'text-white')
      toggleNav()
    } else {
      navLinks.forEach(link => link.classList.remove('border-b-2', 'border-pink-600'))
      e.target.classList.add('border-b-2', 'border-pink-600')
    }
  }

})


const hamBurger = document.querySelector(".fancy-burger");
hamBurger.addEventListener("click", toggleNav);

function toggleNav() {
  hamBurger.querySelectorAll("span").forEach((span) => span.classList.toggle("open"));
  document.querySelectorAll('nav')[1].classList.toggle('h-96')
}

const contactForm = document.getElementById('contact-form')

contactForm.addEventListener('submit', (e) => {
  e.preventDefault()
  this.reset()
  const name = document.getElementById("name").value;
  const phone = document.getElementById("tel").value;
  const message = document.getElementById("message").value;
  var url = "https://wa.me/919985362644?text="
  + "Name: " + name + "%0a"
  + "Phone: " + phone + "%0a"
  + "Message: " + message;

  window.open(url, '_blank').focus();
})
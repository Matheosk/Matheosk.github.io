const carouselSlide = document.querySelector('.pslide');
const cards = document.querySelectorAll('.project');

const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let counter = 0;
const cardWidth = cards[0].offsetWidth + 20;

// Calcular el ancho total de las tarjetas
const totalCardsWidth = cards.length * cardWidth;

// Comparar con el ancho del contenedor
if (totalCardsWidth > carouselSlide.offsetWidth) {
  prevButton.style.display = 'block';
  nextButton.style.display = 'block';
} else {
  prevButton.style.display = 'none';
  nextButton.style.display = 'none';
}

nextButton.addEventListener('click', () => {
  if (counter >= cards.length - 1) return;
  counter++;
  carouselSlide.style.transform = `translateX(${-cardWidth * counter}px)`;
});

prevButton.addEventListener('click', () => {
  if (counter <= 0) return;
  counter--;
  carouselSlide.style.transform = `translateX(${-cardWidth * counter}px)`;
});

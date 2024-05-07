const slides = [
  { "image":"./assets/images/slideshow/slide1.jpg",
    "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
  },
  { "image":"./assets/images/slideshow/slide2.jpg",
    "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
  },
  { "image":"./assets/images/slideshow/slide3.jpg",
    "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
  },
  { "image":"./assets/images/slideshow/slide4.png",
    "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
  }
];

const banner = document.getElementById('banner');
const preview = document.getElementById('preview');
const next = document.getElementById('next');
const dotsContainer = document.getElementById('dots-container'); 
let current = 0;
console.log(current);

function updateSlide() {
  const slide = document.querySelector('.banner-img');
  slide.src = slides[current].image;
  const tagLine = document.querySelector('#banner p');
  tagLine.innerHTML = slides[current].tagLine;
  updateDots();
}

next.addEventListener('click', function() {
    if(current + 1 < slides.length) {
        current++;
    } else {
        current = 0; 
    }
    updateSlide();
    console.log(slides.length);
});

preview.addEventListener('click', function() {
    if(current > 0) {
        current--;
    } else {
        current = slides.length - 1; 
    }
    updateSlide();
    console.log(slides.length - 1);
});

function createDots() {
  dotsContainer.innerHTML = '';

  slides.forEach((slide, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      dot.setAttribute('data-index', index);
      dot.addEventListener('click', function() {
          current = index;
          updateSlide();
          updateDots();
      });
      dotsContainer.appendChild(dot);
  });

    updateDots();
}

function updateDots() {
  const allDots = dotsContainer.querySelectorAll('.dot');
  allDots.forEach(dot => dot.classList.remove('dot_selected'));
  allDots[current].classList.add('dot_selected');
}

createDots();
const slides = [
  { "image":"slide1.jpg",
    "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
  },
  { "image":"slide2.jpg",
    "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
  },
  { "image":"slide3.jpg",
    "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
  },
  { "image":"slide4.png",
    "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
  }
];
const slide = document.getElementById('slide');
const prev = document.getElementById('preview');
const next = document.getElementById('next');
const dots = document.querySelector('dots');
let current = 0;

next.addEventListener('click', function() {
    if(current + 1 < slides.length) {
        current++;
        slide.src = slides[current].image; 
    }
    
});

prev.addEventListener('click', function() {
    if(current > 0) {
        current--;
        slide.src = slides[current].image; 
    }
    
});


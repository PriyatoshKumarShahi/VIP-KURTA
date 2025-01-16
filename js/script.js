document.addEventListener("DOMContentLoaded", () => {
  // const hamburger = document.getElementById('hamburger');
  // const navLinks = document.getElementById('navLinks');

  // hamburger.addEventListener('click', () => {
  //   navLinks.classList.toggle('active');
  // });

  const dots = document.querySelectorAll('.dot');
  const imageContainer = document.querySelector('.image-container');
  const slides = document.querySelectorAll('.image-slide');

 

  let counter = 0;

  slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
  });

  const goNext = () => {
    if (counter >= slides.length - 1) return;
    counter++;
    slideImage();
    updateDots(); 
  };

  const goPrev = () => {
    if (counter <= 0) return;
    counter--;
    slideImage();
    updateDots(); 
  };

  const slideImage = () => {
    slides.forEach((slide) => {
      slide.style.transform = `translateX(-${counter * 100}%)`;
    });
  };

  const updateDots = () => {
    dots.forEach((dot) => {
      dot.classList.remove('active');
    });
    dots[counter].classList.add('active');
  };

  document.querySelector('.next').addEventListener('click', goNext);
  document.querySelector('.prev').addEventListener('click', goPrev);

  imageContainer.addEventListener('scroll', () => {
    const index = Math.round(imageContainer.scrollLeft / window.innerWidth);
    counter = index; 
    updateDots(); 
  });

  dots[0].classList.add('active');
});
document.addEventListener("DOMContentLoaded", () => {
  const carouselImage = document.getElementById("carousel-image");

  const images = [
    "../assets/collection/storeImage1.png",
    "../assets/collection/storeImage2.png",
    "../assets/collection/storeImage3.png",
    "../assets/collection/storeImage5.png",
  ];

  let currentIndex = 0;

  const changeImage = () => {
    carouselImage.style.opacity = 0;

  
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % images.length; 
      carouselImage.src = images[currentIndex];

      carouselImage.style.opacity = 1;
    }, );
  };

  setInterval(changeImage, 2000);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carouselWrapper = document.querySelector('.carousel-wrapper');
const items = document.querySelectorAll('.carousel-item');

let currentIndex = 0;

function moveToNextImage() {
  if (currentIndex < items.length - 1) {
    currentIndex++;
    updateCarouselPosition();
  }
}

function moveToPrevImage() {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarouselPosition();
  }
}

function updateCarouselPosition() {
  const itemWidth = items[0].offsetWidth; // width of one image
  carouselWrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

prevBtn.addEventListener('click', moveToPrevImage);
nextBtn.addEventListener('click', moveToNextImage);

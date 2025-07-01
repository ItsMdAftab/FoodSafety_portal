let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');

function showImage(index) {
  images.forEach(img => img.classList.remove('active'));
  images[index].classList.add('active');
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

showImage(currentIndex);
setInterval(nextImage, 3000); // change every 3 seconds

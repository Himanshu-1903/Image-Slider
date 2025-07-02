const images = [
  'online-calculator.png',
  'Tic Tac Toe.png',
  'To-Do List.png'
];

let currentIndex = 0;

function showImage(index) {
  const imgElement = document.getElementById('image-wrapper');
  if (imgElement && images[index]) {
    imgElement.src = images[index];
  }
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

window.onload = function () {
  showImage(currentIndex);
  document.getElementById('next-btn').onclick = nextImage;
  document.getElementById('prev-btn').onclick = prevImage;
  setInterval(nextImage, 3000);
};

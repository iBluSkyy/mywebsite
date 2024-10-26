const zoomableImage = document.getElementById('zoomable-image');

let timer;
zoomableImage.addEventListener('mouseenter', () => {
  timer = setTimeout(() => {
    zoomableImage.style.transform = 'scale(1.5)';
  }, 1500); // 3000 milliseconds (3 seconds)
});

zoomableImage.addEventListener('mouseleave', () => {
  clearTimeout(timer);
  zoomableImage.style.transform = 'scale(1)';
});
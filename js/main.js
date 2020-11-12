let clicker = document.querySelector('#button');
let firstImage = document.querySelector('#coconut');
let secondImage = document.querySelector('#aurora');

firstImage.onclick = () => {
  if (firstImage.getAttribute('src') === 'images/coconut.jpg'){
    firstImage.setAttribute('src', 'images/pebbles.jpg')
  } else {
    firstImage.setAttribute('src', 'images/coconut.jpg')
  }
};

secondImage.onmouseover = () => {
  secondImage.setAttribute('src', 'images/kip.jpg')
}

secondImage.onmouseleave = () => {
  secondImage.setAttribute('src', 'images/aurora.jpg')
}

const texts = document.querySelectorAll('.scroll-text');
const container = document.querySelector('.scroll-container');

window.addEventListener('scroll', () => {
  const middleOfScreen = window.innerHeight / 2;

  texts.forEach((text) => {
    const textPosition = text.getBoundingClientRect().top;

    // Calculate the distance from the middle of the screen
    const distanceFromMiddle = Math.abs(middleOfScreen - textPosition);
    
    if (distanceFromMiddle < 50) { // Adjust this value for sensitivity
      text.classList.add('active');
    } else {
      text.classList.remove('active');
    }
  });
});

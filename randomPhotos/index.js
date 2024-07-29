// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const imageContainerEl = document.querySelector('.image-container');
    const btnEl = document.querySelector('.btn');
  
    // Check if the button element exists
    if (btnEl) {
      btnEl.addEventListener('click', () => {
        const imageNum = 10;
        addNewImages(imageContainerEl, imageNum);
      });
    } else {
      console.error("Button element not found");
    }
  });
  
  function addNewImages(container, count) {
    for (let index = 0; index < count; index++) {
      const newImgEl = document.createElement('img');
      newImgEl.src = `https://picsum.photos/300/300?random=${Math.floor(Math.random() * 2000)}`;
      container.appendChild(newImgEl);
    }
  }
  
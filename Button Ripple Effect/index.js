const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", (event) => {
  const x = event.clientX - btnEl.getBoundingClientRect().left; // Get x position relative to button
  const y = event.clientY - btnEl.getBoundingClientRect().top; // Get y position relative to button

  btnEl.style.setProperty("--xPos", x + "px");
  btnEl.style.setProperty("--yPos", y + "px");
});
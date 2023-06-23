function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.addEventListener('DOMContentLoaded', function () {
  const body = document.body;
  const changeColorButton = document.querySelector('[data-start]');
  const stopColorButton = document.querySelector('[data-stop]');
  let intervalId;

  function changeBackgroundColor() {
    body.style.backgroundColor = getRandomHexColor();
  }

  changeColorButton.addEventListener('click', function () {
    intervalId = setInterval(changeBackgroundColor, 1000);
  });

  stopColorButton.addEventListener('click', function () {
    clearInterval(intervalId);
  });
});

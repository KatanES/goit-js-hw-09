function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

document.addEventListener('DOMContentLoaded', function () {
  const body = document.body;
  const changeColorButton = document.querySelector('button[data-start]');
  const stopColorButton = document.querySelector('button[data-stop]');
  let intervalId = null;
  let isActive = false;

  function changeBackgroundColor() {
    body.style.backgroundColor = getRandomHexColor();
  }

  function startColorChange() {
    if (!isActive) {
      isActive = true;
      intervalId = setInterval(changeBackgroundColor, 1000);
      changeColorButton.disabled = true;
      stopColorButton.disabled = false;
    }
  }

  function stopColorChange() {
    if (isActive) {
      isActive = false;
      clearInterval(intervalId);
      changeColorButton.disabled = false;
      stopColorButton.disabled = true;
    }
  }

  changeColorButton.addEventListener('click', startColorChange);

  stopColorButton.addEventListener('click', stopColorChange);
});

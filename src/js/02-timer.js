// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

// const input = document.getElementById('datetime-picker');

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     const selectedDate = selectedDates[0];
//     if (selectedDate < new Date()) {
//       window.alert('Please choose a date in the future');
//       changeColorButton.disabled = true;
//     } else {
//       changeColorButton.disabled = false;
//     }
//   },
// };

// flatpickr(input, options);
const startBtn = document.getElementById('start-btn');

const picker = flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const now = new Date();

    if (selectedDate <= now) {
      window.alert('Please choose a date in the future');
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  },
});

// Start button click event handler
startBtn.addEventListener('click', () => {
  // Start the countdown
  // ...

  // Example code to update timer values every second (replace with your logic)
  const timerValues = {
    days: 1,
    hours: 2,
    minutes: 30,
    seconds: 45,
  };

  updateTimer(timerValues);
});

const refs = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

// Function to update timer values
function updateTimer(values) {
  refs.days.textContent = formatValue(values.days);
  refs.hours.textContent = formatValue(values.hours);
  refs.minutes.textContent = formatValue(values.minutes);
  refs.seconds.textContent = formatValue(values.seconds);
}

// Helper function to format timer values with leading zeros
function formatValue(value) {
  return value.toString().padStart(2, '0');
}

// const refs = {
//   startBtn: document.querySelector('button[data-start]'),
//   timerFace: document.querySelector('.timer'),
// };

// const timer = {
//   intervalId: null,
//   isActive: false,
//   start() {
//     if (isActive) {
//       return;
//     }
//     const startTime = Date.now();

//     setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       const { hours, mins, secs } = getTimeComponents(deltaTime);

//       console.log(`${hours} : ${min} : ${secs}`);
//     }, 1000);
//   },
//   stop() {
//     clearInterval();
//   },
// };

// refs.startBtn.addEventListener('click', () => {
//   timer.start();
// });

// function updateClockFace({ hours, min, secs }) {
//   refs.timerFace.textContent = `${hours} : ${min} : ${secs}`;
// }
// // (Обновляет значения в интерфейсе)

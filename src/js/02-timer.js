import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const refs ={
    calendar: document.querySelector('#datetime-picker'),
    btnStart: document.querySelector('[data-start]'),
    day: document.querySelector('[data-days]'),
    hour: document.querySelector('[data-hours]'),
    minute: document.querySelector('[data-minutes]'),
    second: document.querySelector('[data-seconds]'),    
};

const options = {
    btnDisabled:refs.btnStart.setAttribute('disabled',''),
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    timerID:null,
    //intervalId: null;
    onClose(selectedDates) {
        console.log(selectedDates[0]);     

        if (selectedDates[0] < new Date()) {  
            refs.btnStart.setAttribute('disabled', ''),
            Notiflix.Notify.failure('Please choose a date in the future');
            //alert("Please choose a date in the future");
        }
        else if (selectedDates[0] > new Date()){
            refs.btnStart.removeAttribute('disabled')
            //console.log(selectedDates[0]);
            //console.log(Date.now());
            //const ms = selectedDates[0] - Date.now();
            //console.log(ms);

            refs.btnStart.addEventListener('click', () => {
                this.timerID=setInterval(() => {
                    const ms = selectedDates[0] - Date.now();
                    if (ms <= 0) {
                        clearInterval(this.timerID);
                        return;
                    }
                    //console.log(ms);
                    const { days, hours, minutes, seconds } = convertMs(ms);
                    //console.log(refs.day.textContent);
                    refs.day.textContent = pad(days);
                    refs.hour.textContent = pad(hours);
                    refs.minute.textContent = pad(minutes);
                    refs.second.textContent = pad(seconds);
                }, 1000)
            })
            //convertMs(ms);
        }
    },
};

function pad(value) {
    return String(value).padStart(2, 0);
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
//console.log(days, hours, minutes, seconds);
  return { days, hours, minutes, seconds };
}

flatpickr(refs.calendar, options)

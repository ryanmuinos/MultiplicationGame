const numbersDisplayElement = document.getElementById('numbersDisplay')
const numberInputElement = document.getElementById('numberInput')
const timerElement = document.getElementById('timer')
const startElement = document.getElementById('startButton')
const startNumber1InputElement = document.getElementById('numberInput1')
const startNumber2InputElement = document.getElementById('numberInput2')
const averageTimerElement = document.getElementById('avgTimer')

let ints;
let average;
let count;

startElement.addEventListener('click', () => { 
 if (!isNaN(startNumber1InputElement.value) && !isNaN(startNumber2InputElement.value) && Number(startNumber1InputElement.value) < Number(startNumber2InputElement.value)) {    
    start();
    count = 0;
  } else {
    alert('Please enter two numbers such that the first number is lower than the second.')
  }
  
})

numberInputElement.addEventListener('input', () => {

  let correct = false;
  
    if (ints[0]*ints[1] === Number(numberInputElement.value)) {   
        correct = true;
        if (count > 0) {
          average = average + (getTimerTime() - average) / (count + 1)
        } else if (count === 0) {
          console.log('test')
          average = getTimerTime();
        }
        count++;
        averageTimerElement.innerText = 'Average Time: ' + Math.round(average);


        
    }   

  if (correct) start()
})


function start() {
  ints = generateInts();
  numbersDisplayElement.innerText = ints[0] + ' x ' + ints[1];
  
  numberInputElement.value = null;
  startTimer();
}

let startTime;

function startTimer() {
  timerElement.innerText = 0
  startTime = new Date()
  setInterval(() => {
    timer.innerText = getTimerTime()
  }, 1000)
}



function getTimerTime() {
  return Math.floor((new Date() - startTime) / 1000)
}


function generateInts() {
    startTimer();
    let low =  Number(startNumber1InputElement.value);
    let high = Number(startNumber2InputElement.value)
    return [Math.floor(Math.random()*(high-low+1) + low), Math.floor(Math.random()*(high-low+1) + low)]
    
}



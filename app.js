console.log('hi');


// set time interval is use for clock changing every second and every milisecond we wand to call this fn.
setInterval(setClock, 1000);


// To select the html through DOM (Document object model)
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')


// Creating a clock function to 
function setClock(){
    const currentDate = new Date();   
    // new Date will give the current day
    const secondsRatio = currentDate.getSeconds()/60;
    // To get the second we need to divide by 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    // To get the minute we need to divide by 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    // To get the hours we need divide by 12


    //****** */ Calling the setRotation function
      setRotation(secondHand, secondsRatio)
    // To set the second rotation
      setRotation(minuteHand, minutesRatio)
      // To set the minute rotation
      setRotation(hourHand, hoursRatio)
      // To set the hour rotation
}

// Making a function to use css rotation
function setRotation(element, rotationRatio) {
      element.style.setProperty('--rotation', rotationRatio * 360)
    }
    
    
    // Calling the function Set clock
    setClock()


var arry = 'saurabh';
arry.reverse();

console.log(arry)
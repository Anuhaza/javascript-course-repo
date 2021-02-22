var offset = 0;
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')
setInterval(showTime, 1000)
        function myfunc(){
            var radiobuttons = document.getElementsByName("timezone");
            var selected = radiobuttons[0].value;
            for (var i = 0; i < radiobuttons.length; i++){
                if (radiobuttons[i].checked){
                    selected = radiobuttons[i].value;
                    break;
                }
            }
            document.getElementById("result").innerHTML = selected
            if (selected == "Atlantic"){
                offset = 4
            }
            else if(selected == "Eastern"){
                offset = 3
            }
            else if(selected == "Central"){
                offset = 2
            }
            else if(selected == "Alaska"){
                offset = -1
            }
            else if(selected == "Hawai-Aleutian"){
                offset = -2
            }
            else if(selected == "American Samoa"){
                offset = -3
            }
            else if(selected == "Chamorro"){
                offset = -6
            }
        }
function showTime(){
    const day = new Date();
    const secondsRatio = day.getSeconds()/60;
    const minutesRatio = (day.getMinutes() + secondsRatio) /60;
    const hoursRatio = (day.getHours() + minutesRatio + offset) / 12;
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}
function setRotation(element, rotationRatio){
    element.style.setProperty(`--rotation`, rotationRatio *360);
}
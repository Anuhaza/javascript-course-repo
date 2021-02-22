var offset = 0;
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
            //printTime();
        }   

        /*function printTime(){
            var day = new Date();
            var hour = day.getHours() + offset;
            var minutes = day.getMinutes();
            var seconds = day.getSeconds();
            var session = "AM";

            if (hour == 0){
                hour = 12;
                session = "AM";
            }

            else if (hour > 12){
                hour = hour - 12;
                session = "PM"
            }

            if (hour < 10){
                hour = '0' + hour
            }

            if (minutes < 10){
                minutes = '0' + minutes
            }

            if (seconds < 10){
                seconds = '0' + seconds
            }

            var time = hour + ":" + minutes + ":" + seconds + " " + session;
            document.getElementById("clock").innerHTML = time;
            setTimeout(printTime, 1000);
        }
        printTime();*/
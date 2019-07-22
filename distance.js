var property = new Array();
var unit = new Array();
var factor = new Array();

property[0] = "Velocity & Speed";
unit[0]= new Array("Meter/second (m/sec)", "Foot/minute (ft/min)",
"Foot/second (ft/sec)", "Kilometer/hour (kph)","Knot (int'l)",
"Mile(US)/hour (mph)", "Mile (nautical)/hour", "Mile(US)/minute", "Mile (US)/second",
 "Speed of light (c)", "Mach (STP) (a)");
factor[0] = new Array (1, 5.08E-03, .3048, .2777778, .5144444, .44707, .514444, 26.8224, 1609.344,
299792458, 340.0068750);

property[1] = "Time";
unit [1] = new Array ("Second (sec)", "Day (mean solar)", "Day (sidereal)", "Hour (mean solar)", 
"Hour (sidereal)", "Minute (mean solar)", "Minute (sidereal)", "Month (mean calender)", "Second (sidereal)",
"Year (tropical)", "Year (sidereal)");
factor[1] = new Array (1, 8.640E4, 86164.09, 3600, 3590.17, 60, 60, 2628000, .9972696, 31536000, 31556930, 31558150);

function calcDistance () {
    var speed = document.getElementById('speed').value;
    var time = document.getElementById('time').value;
    var distance = document.getElementById('distance');


    if (speed == "" || time == "") {
        alert('Enter Values');
    }


    /*
    here we are converting the speed which is
    in km/h to m/s
    we can multiply by 1000 and divide by 3600
    or multiply by 3.6 */
    /*speedValue = (speed*1000)/3600 */
    speedValue = speed / 3.6;

    /*multiply by 60 to convert to seconds */
    timeValue = (time * 60 || time * 3600);


    

    /*here we multiply the values */
    totalDistance = Math.floor(speedValue*timeValue);

    document.getElementById('miles').style.display ='inline';
    distance.innerHTML = totalDistance;

   
};

/* hide the miles text on load */
document.getElementById('miles').style.display ='none';


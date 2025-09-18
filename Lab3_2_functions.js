function getHMS(){
    let seconds;
    let hours;
    let minutes;
    let secs;

    //Write code here to ask users' input of the seconds, covert to number
    seconds = Number(prompt("Enter the number of seconds:"));

    //Write code here to calculate the number of hour, minute, and secods
   hours = Math.floor(seconds / 3600);
   minutes = Math.floor((seconds % 3600) / 60);
   secs = seconds % 60;

    //Write code here to use alert to show the result
    alert(seconds + " seconds is " + hours + " hours, " + minutes + " minutes, and " + secs + " seconds.");
}

function calculateFreeFallTime(height, intialVelocity, gravity){
    let time;
     //Write code here to calculate the fall time of the object
    let discriminant = intialVelocity * intialVelocity + 2 * gravity * height;
    time = ( -intialVelocity + Math.sqrt(discriminant) ) / gravity;
     //Write code here to return the result
    return time;
}

function compareFreeFallTime(){
    //Write code here to ask users' input of planet name of the first planet

    //Write code here to ask users' input of height of the free fall on the first planet, covert to number

    //Write code here to ask users' input of initial downward velocity, covert to number

    //Write code here to ask users' input of gravity of the first planet, covert to number

    //Write code here to ask users' input of planet name of the second planet
 
    //Write code here to ask users' input of height of the free fall on the second planet, covert to number

    //Write code here to ask users' input of initial downward velocity, covert to number

    //Write code here to ask users' input of gravity of the second planet, covert to number

    /* Write code here to call the calculateFreeFallTime(height, intialVelocity, gravity) function to 
    calculate the fall time of an object on the first planet */

    /* Write code here to call the calculateFreeFallTime(height, intialVelocity, gravity) function to 
    calculate the fall time of an object on the second planet */

    //Write code here to use alert to show the results 


   
}



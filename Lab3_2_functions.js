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
    return time;
     //Write code here to return the result

}

function compareFreeFallTime(){
    //Write code here to ask users' input of planet name of the first planet
    let planet1 = prompt("Enter the name of the first planet:");
    //Write code here to ask users' input of height of the free fall on the first planet, covert to number
    let height1 = Number(prompt("Enter the height of the free fall on " + planet1 + ":"));
    //Write code here to ask users' input of initial downward velocity, covert to number
    let initialVelocity1 = Number(prompt("Enter the initial downward velocity on " + planet1 + ":"));

    //Write code here to ask users' input of gravity of the first planet, covert to number
    let gravity1 = Number(prompt("Enter the gravity of " + planet1 + ":"));
    //Write code here to ask users' input of planet name of the second planet
    let planet2 = prompt("Enter the name of the second planet:");
    //Write code here to ask users' input of height of the free fall on the second planet, covert to number
    let height2 = Number(prompt("Enter the height of the free fall on " + planet2 + ":"));
    //Write code here to ask users' input of initial downward velocity, covert to number
    let initialVelocity2 = Number(prompt("Enter the initial downward velocity on " + planet2 + ":"));
    //Write code here to ask users' input of gravity of the second planet, covert to number
    let gravity2 = Number(prompt("Enter the gravity of " + planet2 + ":"));
    /* Write code here to call the calculateFreeFallTime(height, intialVelocity, gravity) function to 
    calculate the fall time of an object on the first planet */
    let time1 = calculateFreeFallTime(height1, initialVelocity1, gravity1);
    /* Write code here to call the calculateFreeFallTime(height, intialVelocity, gravity) function to 
    calculate the fall time of an object on the second planet */
    let time2 = calculateFreeFallTime(height2, initialVelocity2, gravity2);
    //Write code here to use alert to show the results 
    alert("The fall time on " + planet1 + " is " + time1.toFixed(2) + " seconds.\n" +
          "The fall time on " + planet2 + " is " + time2.toFixed(2) + " seconds.");
    if (time1 < time2) {
        alert("The fall time on " + planet1 + " is shorter.");
    }   else if (time1 > time2) {
        alert("The fall time on " + planet2 + " is shorter.");
    } else {
        alert("The fall times on both planets are the same.");
    }               
}


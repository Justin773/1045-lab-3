function calculateYears() {
    let a = prompt('Please enter a number');
    let futureyear = 2023 + Number(a); // error in this line, Hint: assignment order
    let pastyear = 2023 - Number(a); // error in this line, Hint: assignment order
    alert(a + ' years from now is year ' + futureyear + ', and ' + a + ' years ago was year ' + pastyear + '.');
    // find and errors in this function to show the correct message like ' 3 years from now is year 2026, and 3 years ago was year 2020.'
    // Double check the result
}

function rollDice(){
   
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    alert('The number of dice you got after roll is ' + diceRoll);
    //Write code here to get a random integer from 1 and 6
    //Use alert() to show the result as 'The point you get this time is (the generated interger here, e.g., 3)'

}

function getVolumeOfSphere() {

    let radius = prompt('Please enter the radius of the sphere in meters.');
    let volume = (4/3) * Math.PI * Math.pow(radius, 3);
    alert('The volume of a sphere with radius of ' + radius + ' m is ' + volume.toFixed(2) + ' m^3');
    return volume;
    //Write code here to ask your user to input the radius of the sphere with message 'Please enter the radius of the sphere in meters.'
    //Write code here to calculate the volume
    //User alert() to to show the result as 'The volume of a sphere with radius of RADIOUS m is m^3'
    //Write code here to return the value

}

function getSeconds(){

    let hour = prompt('Please enter a number(0-23) for the hour of the current time.');
    let minute = prompt('Please enter a number(0-59) for the minute of the current time.');
    let second = prompt('Please enter a number(0-59) for the second of the current time.');
    let totalSeconds = (parseInt(hour) * 3600) + (parseInt(minute) * 60) + parseInt(second);
    alert('The total calculated seconds is ' + totalSeconds + ' seconds.');
    //Write code here to ask your user to enter a number(0-23) for the hour of the current time, convert to number
    //Write code here to ask your user to enter a number(0-59) for the minute of the current time, convert to number
    //Write code here to ask your user to enter a number(0-59) for the second of the current time, convert to number
    //Write code here to calculate the total seconds
    //Write code here to use alert to show the result
    
}
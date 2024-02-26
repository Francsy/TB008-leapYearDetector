//We make the variable 'year' assigned through the prompt

let year = prompt("Introduce a year");

//The first if statement is to filter that it is a number:

if (year >= 0 || year <= 0) {
    if ((year % 4 == 0 && year % 100 != 0) || (year % 4 == 0 && year % 400 == 0)) {
        console.log(`You can be sure: ${year} es a leap year`)
    } else {
        console.log(`${year} is a regular year`)
    }
} else { console.log(`${year} is not a year`); }

/* In the first if statemet we use a disjunction of two propositions:
- It is a multiple of 4 as long as it is not a multiple of 100.
- It is a multiple of 4 and also a multiple of 400.
If at least one of these is true, it will print that it is a leap year.

*/

/*
Other way:

let year = prompt("Introduce year")

while(year>=0 || year<=0){
        
    if ((year%4==0 && year%100!=0) || (year%4==0 && year%400==0)) {
        console.log("Leap year");
        break;
    }
    
    if (year) {
        console.log("Regular year")
        break;
    }
            
}
 */



/* Other way:

if (year >= 0 || year <= 0) {
    switch (year) {
        case ((year%4==0 && year%100!=0) || (year%4==0 && year%400==0)):
            console.log("You can be sure: It is a leap year");
            break;
        default:
            console.log("It is a regular year");
            break;
    }
} else {
    console.log("It's not a year");
} 
*/




/* Other way:

function bisiesto(year) {
    return year%100===0 ? year%400===0 : year%4=== 0;
}
bisiesto(year) === true ? console.log("The " + year + " is a leap year") : console.log("The " + year + " is a regular year"); */
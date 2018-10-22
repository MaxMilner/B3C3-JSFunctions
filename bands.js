/* A local nightclub is having a Battle of the Bands night in a few months. They expect many bands to 
sign up because the grand prize is $20,000. To make things easier on the nightclub management, 
they want each band to be assigned a number so that they can easily keep track of the order 
in which the bands will perform. */

/* Your job is to write a function that accepts any band name as an argument. 
The function will increment a global variable by one each time it is invoked, 
and return that number, and the band name concatenated together. */

let counter = 0 // Not const because const can't change and counter needs to move up

const takeNumber = function (bandName) {
 let string = `${counter}. ${bandName}` /* This assigns counter and the band name to string
                                        and adds 1 to the counter and returns the string */
 counter++
 console.log(`${counter}. ${bandName}`)
 return string
}
const prestige = takeNumber("The Prestige")
// console.log(prestige)

const phil = takeNumber("Phil In The Blank")
// console.log(phil)

const kid = takeNumber("The Kid With Asthma")
// console.log(kid)
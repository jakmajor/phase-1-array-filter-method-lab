
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const driversObj = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

// findMatching- This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.


function findMatching(driverNamesArray, inputString){
    return driverNamesArray.filter(driverName => driverName.toUpperCase() === inputString.toUpperCase())
}

function fuzzyMatch(driverNamesArray, inputString) {
    return driverNamesArray.filter(driverName => driverName.charAt(0) === inputString.charAt(0))
}

function matchName(driverNamesObj, inputString) {
    return driverNamesObj.filter(driverName => driverName.name === inputString)
}


//matchName - This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument.
// Code your solution in this file
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, nombre){
  return drivers.filter(function (name) {
    return name.toLowerCase() === nombre.toLowerCase()
  });
}
 /*
REMEMBER:
 - naming your variables is important
 - just because you returned if the names matched does not mean they will be returned on execution of the overall funciton; the inner return is only returning to its parent function (so you have to return the parent as well to get the names.)
 */

function fuzzyMatch(drivers, string) {
  return drivers.filter(function (driverName) {
  return driverName.slice(0, string.length) === string
  })
}

function matchName(drivers, string){
  return drivers.filter(function (driver) {
    return driver.name.toLowerCase() === string.toLowerCase()
  });
}

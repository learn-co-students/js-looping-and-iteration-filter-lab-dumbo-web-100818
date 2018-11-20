// Code your solution in this file
// users.filter(function findMatching(name){
//
// })
 function findMatching(drivers, name) {
   // debugger
   return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
 }

 function fuzzyMatch(drivers, name) {
   return drivers.filter(driver => driver.startsWith(name))
 }

 function matchName(drivers, name) {
   //debugger
   return drivers.filter(driver => driver.name === name)
 }

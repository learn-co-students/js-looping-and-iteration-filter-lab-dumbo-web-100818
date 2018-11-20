// Code your solution in this file
function findMatching(arr, string) {
return  arr.filter(function (driver) {return driver.toLowerCase() === string.toLowerCase() })
}

function fuzzyMatch(arr, letters) {
let nums = letters.length
return arr.filter(function (driver) {return driver.slice(0,nums) === letters})
}

function matchName(arr, string) {
  return arr.filter(function (driver) {return driver.name.toLowerCase() === string.toLowerCase()})
}

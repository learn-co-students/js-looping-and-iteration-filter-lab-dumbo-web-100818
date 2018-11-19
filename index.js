// Code your solution in this file
function findMatching(array, str){
  return array.filter(function (name) {return name.toLowerCase() === str.toLowerCase()})
}

function fuzzyMatch(array, str){
  let l = str.length;
  return array.filter(function (name) {return name.slice(0, l) === str})
}

function matchName(array, str){
  return array.filter(function (driver) {return driver.name === str})
}
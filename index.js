// Code your solution in this file
function findMatching(givenArray, givenValue) {
let newArr = givenArray.filter(function (currentValue){return currentValue.toLowerCase() === givenValue.toLowerCase(); });
return newArr
}
function fuzzyMatch(givenArray, givenValue) {
  let totalChars = givenValue.length
  let newArray = givenArray.filter(function (isfound){return isfound.slice(0,totalChars)===givenValue; })
  return newArray
}
function matchName(givenData, givenValue){
  return givenData.filter(function functionName(firstName) {
      return firstName.name.toLowerCase() === givenValue.toLowerCase()

  })
}

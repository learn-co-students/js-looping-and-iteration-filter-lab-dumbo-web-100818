// Code your solution in this file
function findMatching(array, name) {
  const newArr = []
  for (let i = 0; i < array.length; i++) {
    if (array[i].toLowerCase() == name.toLowerCase()) {
      newArr.push(array[i])
    }
  }

  return newArr
}

function fuzzyMatch(array, beginningLetter){
  const newArr = [];
  const wordSize = beginningLetter.length
  for(const driver of array){
    if(driver.slice(0, wordSize) == beginningLetter){
      newArr.push(driver)
    }
  }

  return newArr
}

// function matchName(array, value) {
//   const newArr = [];
//   for (const user in array){
//
//     if (user.name === value){
//       newArr.push(user)
//     }
//   }
//
//   return newArr
// }

function matchName (list, name) {
  return list.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}

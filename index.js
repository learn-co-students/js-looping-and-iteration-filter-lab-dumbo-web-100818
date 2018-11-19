function findMatching(array, name){
  return array.filter(function(driverName){
    upName = driverName.toUpperCase()
    return upName === name.toUpperCase()
  })
}

function fuzzyMatch(array, letter){
  return array.filter(function(driverName){
    return driverName[0] === letter[0]
  })
}

function matchName(array_of_people, name){
  return array_of_people.filter(function(driver){
    return driver.name == name
  })
}

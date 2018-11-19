

function findMatching (list, name) {
  return list.filter(function (driverName) {
    return driverName.toUpperCase() === name.toUpperCase()
  })
}

function fuzzyMatch(drivers, string){
  return drivers.filter(function (driverName){
    return driverName.startsWith(string)
  })
}

function matchName (drivers, name) {
  return drivers.filter(function (driver) {
    return driver.name === name
  })
}

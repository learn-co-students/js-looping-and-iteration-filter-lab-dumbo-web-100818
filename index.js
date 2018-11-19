

function findMatching(object,name) {
  return object.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(object,name){
  let nameLength = name.length;
  return object.filter(function (driverName) {
    return driverName.slice(0, nameLength) === name
  })
}

function matchName(object,name) {
  return object.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}

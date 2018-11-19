function findMatching(array, name) {
  return array.filter(function(d) {

    return d.toLowerCase() === name.toLowerCase()
  })

}


function fuzzyMatch (list, partialName) {
  let lengthOfName = partialName.length;
  return list.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partialName;
  });
}


function matchName(array,name) {
  return array.filter(function(n){
  return  n.name.toLowerCase() === name.toLowerCase()
  }

)

}

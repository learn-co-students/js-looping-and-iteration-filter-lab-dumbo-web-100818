// Code your solution in this file

function findMatching(drivers, strings){
    return drivers.filter(function(name) {return name.toLowerCase() === strings.toLowerCase()});
}

function fuzzyMatch(drivers, strings){
    return drivers.filter(function(name) {return name.toLowerCase()[0] === strings.toLowerCase()[0]});
}

function matchName(drivers, string){
    return drivers.filter(function(driver) {return driver.name === string});
}

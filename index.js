function findMatching(arr, name) {
	return arr.filter(function(arr_name) { return arr_name.toLowerCase() === name.toLowerCase() })
}

function fuzzyMatch(arr, str) {
	return arr.filter(function(arr_name) { return arr_name.startsWith(str) })
}

function matchName(arr, name) {
	return arr.filter(function(obj) {return obj.name.toLowerCase() === name.toLowerCase()})
}
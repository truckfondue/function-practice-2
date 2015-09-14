// 1. getName
function getName(obj) {
	return obj.name
}

// 2. totalLetters
function totalLetters(arr) {
	return arr.join('').length
}

// 3. keyValue
function keyValue(key, value) {
	return {
		[key]: value
	}
}

// 4. negativeIndex
function negativeIndex(arr, index) {
	return arr[index]
}

// 5. removeM
function removeM(str) {
	var arr = str.split('')
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] === 'm')
			arr[i] = ''
	}
	return arr.join('')
}

// 6. print object
function printObject(obj) {
	for (var key in obj) {
		console.log(key + ' is ' + obj[key])
	}
}

// 7. vowels
function vowels(str) {
	var vowels = []
	var arr = str.split('')
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' || arr[i] === 'u') {
			vowels.push(arr[i])
		}
	}
	return vowels
}

// 8. twins
function twins(arr) {
	// var twins = true
	if (arr.length % 2 != 0) {
		return false
	}
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === arr[i+1]) {
			i++
		}
		else {
			return false
		}
	}
	
	return true
}

// 9. or
function or(arr) {
	if (arr.length === 0) {
		return false
	} else if (arr.length > 0){
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] === true) {
				return true
			}
			else {
				return false
			}
		}
	}	
}

// 10. unique
function unique(arr) {
   var u = {}, a = []
   for(var i = 0; i < arr.length; ++i){
      if(u.hasOwnProperty(arr[i])) {
         // using continue will jump over one iteration
         continue;
      }
      a.push(arr[i]);
      u[arr[i]] = 1;
   }
   return a
}



































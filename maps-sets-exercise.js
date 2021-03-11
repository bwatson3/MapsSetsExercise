//MAPS AND SETS EXERCISE

//Quick Question #1: What does the following code return?
new Set([ 1, 1, 2, 2, 3, 4 ]); // {1,2,3,4}

//Quick Question #2: What does the following code return?
// [...new Set("referee")].join(""); // "ref"

//Quick Question #3: What does the following code return?
let m = new Map();
m.set([ 1, 2, 3 ], true); // 0: {Array(3) => true}
m.set([ 1, 2, 3 ], false); // 1: {Array(3) => false}

//Write a function called hasDuplicate which accepts an array and
//returns true or false if that array contains a duplicate

const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

//Write a function called vowelCount which accepts a string and returns
//a map where the keys are numbers and the values are the count of the
//vowels in the string

function vowels(char) {
	return 'aeiou'.includes(char);
}

function vowelCount(str) {
	const newMap = new Map();
	for (let char of str) {
		let lowerCased = char.toLowerCase();
		if (vowels(lowerCased)) {
			if (newMap.has(lowerCased)) {
				newMap.set(lowerCased, newMap.get(lowerCased) + 1);
			} else {
				newMap.set(lowerCased, 1);
			}
		}
	}
	return newMap;
}

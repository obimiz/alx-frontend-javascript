/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function appendToEachArrayValue(array, appendString) {
	const newArray = [];
	for (const value of array) {
		newArray.push(appendstring + value);
	}

	return newArray;
}

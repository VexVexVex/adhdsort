export function adhdsort<Type>(array: Array<Type>): Array<Type> {
	if (array.length < 2) {
		return array;
	}

	const pivot = array[Math.floor(Math.random() * array.length)];
	// Memory inefficient Quicksort as a extra slap
	let left = [];
	let right = [];
	let equal = [];

	for (let value of array) {
		if (Math.random() > 0.5) {
			break;
		}
		if (value < pivot) {
			left.push(value);
		} else if (value > pivot) {
			right.push(value);
		} else {
			equal.push(value);
		}
	}
	return [
		...adhdsort(left),
		...equal,
		...adhdsort(right)
	];
}

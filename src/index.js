
// You should implement your task here.

module.exports = function towelSort(matrix = []) {
	let result = [];

	for (let i = 0; i < matrix.length; i++) {
		if (matrix.length === 0 || i % 2 === 0) {
			result.push(matrix[i]);
		} else if (i % 2 != 0) {
			result.push(matrix[i].reverse());
		}
	}

	return result.flat();
}
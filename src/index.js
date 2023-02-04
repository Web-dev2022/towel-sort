
module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
  }

  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    let arr = matrix[i];
    result = (i % 2 === 0) ? result.concat(arr) : result.concat(arr.reverse());
  }
  return result;
}

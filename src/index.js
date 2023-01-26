
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let mas = [];
  if (typeof matrix !== 'object') {
    return [];
  } else {
    for (let i = 0; i < matrix.length; i++){
      if ((i > 0) && (i%2 !== 0)) {
        mas.push(...matrix[i].reverse());
      } else {
        mas.push(...matrix[i]);
      }
    };
    return mas;
  }
}

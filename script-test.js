function generateMatrix(rows, cols, min, max) {
   const matrix = [];
   for (let i = 0; i < rows; i++) {
      matrix[i] = [];
      for (let j = 0; j < cols; j++) {
         matrix[i][j] = Math.floor(Math.random() * (max - min + 1)) + min;
      }
   }
   return matrix;
}

module.exports = generateMatrix;

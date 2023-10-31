// lab_7.1
// Гринчук Тарас
// Лабораторна робота № 7.1
// Пошук заданих елементів та впорядкування рядків / стовпчиків матриці
// Варіант №4

function generateMatrix(rows, cols, min, max, i = 0, matrix = []) {
   if(i < rows) {
      matrix[i] = generateRow(cols, min, max);
      return generateMatrix(rows, cols, min, max, i + 1, matrix);
   }
   return matrix;
}

function generateRow(cols, min, max, j = 0, row = []) {
   if(j < cols) {
      row[j] = Math.floor(Math.random() * (max - min + 1)) + min;
      return generateRow(cols, min, max, j + 1, row);
   }
   return row;
}

function printMatrix(matrix, i = 0) {
   if(i < matrix.length) {
      console.log(matrix[i].join("\t"));
      printMatrix(matrix, i + 1);
   }
}

function processElements(matrix, i = 0, count = 0, sum = 0) {
   if(i < matrix.length) {
      let result = processRow(matrix[i], i);
      return processElements(matrix, i + 1, count + result.count, sum + result.sum);
   }
   return { count: count, sum: sum };
}

function processRow(row, i, j = 0, count = 0, sum = 0) {
   if(j < row.length) {
      if(!(row[j] % 2 !== 0 && (i + j) % 7 == 0)) {
         count++;
         sum += row[j];
         row[j] = 0;
      }
      return processRow(row, i, j + 1, count, sum);
   }
   return { count: count, sum: sum };
}

function sortMatrix(matrix,i=0){
    if(i<matrix.length-1){
        matrix=compareAndSwap(matrix,i);
        return sortMatrix(matrix,i+1);
    }else{
        return matrix;
    }
}

function compareAndSwap(matrix,i,j=0){
    if(j<matrix.length-i-1){
        if(compareRows(matrix[j],matrix[j+1])){
            let temp=matrix[j];
            matrix[j]=matrix[j+1];
            matrix[j+1]=temp;
        }
        return compareAndSwap(matrix,i,j+1);
    }else{
        return matrix;
    }
}

function compareRows(row1,row2,j=0){
    if(j<row1.length){
        if(row1[j]>row2[j]){
            return true;
        }else if(row1[j]<row2[j]){
            return false;
        }else{
            return compareRows(row1,row2,j+1);
        }
    }else{
        return false;
    }
}

const matrix = generateMatrix(7, 6, 9, 61);
console.log("Сформована матриця: ");
printMatrix(matrix);
sortMatrix(matrix);
console.log("Матриця після впорядкування:");
printMatrix(matrix);
const result = processElements(matrix);
console.log("k = " + result.count);
console.log("S = " + result.sum);
console.log("Матриця після обробки елементів:");
printMatrix(matrix);






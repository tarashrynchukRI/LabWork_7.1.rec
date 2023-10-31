const generateMatrix = require("./script-test");

test('Перевірка функції generateMatrix', () => {
   const matrix = generateMatrix(5, 5, 1, 10);
   // Перевірка кількості рядків
   expect(matrix.length).toBe(5);
   // Перевірка кількості стовпців
   matrix.forEach(row => {
      expect(row.length).toBe(5);
   });
   // Перевірка діапазону значень
   matrix.forEach(row => {
      row.forEach(value => {
         expect(value).toBeGreaterThanOrEqual(1);
         expect(value).toBeLessThanOrEqual(10);
      });
   });
});
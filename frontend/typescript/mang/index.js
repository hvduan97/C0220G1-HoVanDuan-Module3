const list = [1, 2, 3];
const categories = ['Sport', 'IT', 'Car'];
console.log('list');
list.forEach((num) => console.log(num.toFixed(2)));
// convert mảng từ dạng này sang dạng khác.
const listSquare = list.map(num => num * num);
console.log(listSquare);
// lọc các phần tử thỏa mãn
const result = categories.filter(str => str.length > 2);
console.log(result);
// Output: ['Sport', 'Car']

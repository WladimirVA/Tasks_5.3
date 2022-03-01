const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, NaN, null];
let even = 0,
    odd = 0,
    zero = 0;
for (let i = 0; i < arr.length; i++) {
   if (typeof (arr[i]) === 'number' && !isNaN(arr[i])) {
      if (arr[i] === 0) {
         zero += 1;
      } else if (arr[i] % 2 === 0) {
         even += 1;
      } else {
         odd += 1;
      }
   }
}
console.log('Количество нечетных элементов: ', odd);
console.log('Количество четных элементов: ', even);
console.log('Количество нулей: ', zero);
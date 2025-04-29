const numbers = [5, 8, 12, 20, 3, 15, 7];
const first = numbers[0];
const middle = numbers[Math.floor(numbers.length / 2)];
const last = numbers[numbers.length - 1];

console.log('First:', first);
console.log('Middle:', middle); 
console.log('Last:', last);

numbers.push(99);
console.log(numbers); 

numbers.pop();       
console.log(numbers); 

numbers.unshift(42);   
console.log(numbers); 

numbers.shift();       
console.log(numbers); 

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }

  const greaterThanTen = numbers.filter(num => num > 10);
console.log(greaterThanTen);

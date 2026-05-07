 // problem 1
 function filterEvenNumber(numbers: number[]): number[] {
    return numbers.filter(num => num % 2 === 0);
 }

 const input = [1, 2, 3, 4, 5, 6];
 const output = filterEvenNumber(input);

 


 // problem 2
 function reverseString(str: string): string {
    return str.split('').reverse().join('');
 }

 const result = reverseString("typescript");
  



 // problem 3
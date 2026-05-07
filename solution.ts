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
type StringOrNumber = string | number;

function checkType(value: StringOrNumber): "String" | "Number" {
    if (typeof value === "string") {
        return "String"
    }else {
        return "Number";
    }

}

// problem 4
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K]{
    return obj[key];
}

const user = { id: 1, name: "John Doe", age: 21 };
const result4 = getProperty(user, "name");
 

// problem 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return {
    ...book,
    isRead: true
  };
}


const myBook: Book = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };


const updatedBook = toggleReadStatus(myBook);

 

// problem 6

// problem 7

 
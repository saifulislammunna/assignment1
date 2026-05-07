 // problem 1
 function filterEvenNumber(numbers: number[]): number[] {
    return numbers.filter(num => num % 2 === 0);
 }

 const input = [1, 2, 3, 4, 5, 6];
 filterEvenNumber(input);
  


 // problem 2
 function reverseString(str: string): string {
    return str.split('').reverse().join('');
 }

 reverseString("typescript");
 
  


// problem 3
type StringOrNumber = string | number;

function checkType(value: StringOrNumber): "String" | "Number" {
    if (typeof value === "string") {
        return "String"
    }else {
        return "Number";
    }

}
checkType("Hello");
checkType(42);
 


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
 class Person {
   
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    // Assign them manually
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  public grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

 
const student = new Student("Alice", 20, "A");
 

// problem 7
 

function getIntersection(arr1: number[], arr2: number[]): number[] {
 
  const set2 = new Set(arr2);
 
  return [...new Set(arr1.filter(num => set2.has(num)))];
}

const result7 = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);

 
 

 
import { calculateAverage } from "./calculateAverage.js";
import { findTopStudent } from "./findTopStudent.js";
import { filterFailed } from "./filterFailed.js";
import { addLetterGrade } from "./addLetterGrade.js";

const grades = [
    { name: "Макар", score: 85 },
    { name: "Денис", score: 92 },
    { name: "Анна", score: 78 },
    { name: "Даша", score: 88 },
    { name: "Студент_X", score: 45 }
];

console.log(calculateAverage(grades));
console.log(findTopStudent(grades));
console.log(filterFailed(grades, 60));
console.log(addLetterGrade(grades));
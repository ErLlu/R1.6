// Datos estudiantes
const studentNameOne = "Juan Pérez";
const studentNameTwo = "Maria Estuarte";
const studentAgeOne = 25;
const studentAgeTwo = 28;

// Datos cursos
const courseOne = "Iniciación a la escalada";
const courseTwo = "Escalada deportiva";
const courseThree = "Free Solo";
const levelCourseOne = "nivel básico";
const levelCourseTwo = "nivel intermedio";
const levelCourseThree = "nivel avanzado";
const hoursCourseOne = " 30 horas";
const hoursCourseTwo = " 45 horas";
const hoursCourseThree = " 60 horas";

//Media edades
const sumAges = studentAgeOne + studentAgeTwo;
const ageAverage = sumAges / 2;

// Impresión
console.log("INFORME DE LA ESCUELA");

console.log("Cursos :");
console.log(`- ${courseOne} (${levelCourseOne}, ${hoursCourseOne})`);
console.log(`- ${courseTwo} (${levelCourseTwo}, ${hoursCourseTwo})`);
console.log(`- ${courseThree} (${levelCourseThree}, ${hoursCourseThree})`);

console.log("Alumnos :");
console.log(`- ${studentNameOne}, ${studentAgeOne} años`);
console.log(`- ${studentNameTwo}, ${studentAgeTwo} años`);

console.log("Edad media de los alumnos: " + ageAverage + " años");

const greeting = 
` Hello, and welcome to javaScript. In this exercise well learn about 
template literals for HTML and arrow fucntions.
`
console.log(greeting)

const generateCard = (title, description) => {
    return `
        <div class="card">
            <h2>${title}</h2>
            <p>${description}</p>
        </div>
    `;
};

console.log(generateCard("JavaScript basics", "learn JavaScript with ES6+ features"));

const add = (a, b) => a + b;
const greet = name => `Helo, ${name}!`;

console.log(add(1, 2));
console.log(greet("Imtiyaaz"));

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);

console.log(doubled);

const evens = numbers

console.log(evens);
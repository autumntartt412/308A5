import { firstName } from './export.js';
import { lastName } from './export.js';
// import { firstName, lastName } from './export.js'; 
import *  as fullName from './export.js';  // wild card import as alias



const first = firstName();
console.log(`First name:` + first);

let last = lastName();
console.log(`First name:` + last);

const middle = middleName();
console.log(`Middle name:` + last);


const fullName = `${firstName()} ${middleName()} ${lastName()}`;
console.log(`Full Name: ${fullName}`); 


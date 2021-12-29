const msg = () => alert('hello');

// default should be the first alias
// import name, {score, cardFees} from './demoScript.js';

// for default export
// import name from './demoScript.js';

// console.log(score);

// console.log(cardFees());

// console.log('Name: '+name);


// for everythings

import * as superman from './demoScript.js';

console.log(typeof superman);
console.log(superman.cardFees());

// gives default variable
console.log(superman.default);
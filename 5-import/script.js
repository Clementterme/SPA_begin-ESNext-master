//5-1 Import

import {hello} from './functions.js';

hello();

import fonctionAnonyme, {showError} from './functions.js';

showError();

fonctionAnonyme();

// 5-2 Export
const [a, b] = [7, 9];

import as from './math.js';

sum(a, b);
divide(a, b);
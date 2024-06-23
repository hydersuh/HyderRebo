import {formatCurrency} from '../Scripts/utils/money.js';

console.log('A - test suite: formatCurrenc');

console.log('1 - convert cents into dollars')

if (formatCurrency(2095) === '20.95') {
    console.log('passed');
} else {
    console.log('failed');
}

console.log('2 - round up to the nearest cent')

if (formatCurrency(2000.5) === '20.01') {
    console.log('passed');
} else {
    console.log('failed');
}

console.log('3 - work with 0 zeros')

if (formatCurrency(0) === ('0.00')) {
    console.log('passed');
} else {
    console.log('failed');
}


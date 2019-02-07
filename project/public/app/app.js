
import './utils/array-helpers.js';
import { notasService as service } from './nota/service.js';
import { takeUntil, debounceTime } from './utils/operators.js';

const operation = takeUntil(3, () =>
  service
    .sumItems('2143')
    .then(console.log)
    .catch(console.log));

const operation2 = debounceTime(500, operation)


document
  .querySelector('#myButton')
  .onclick = operation2;
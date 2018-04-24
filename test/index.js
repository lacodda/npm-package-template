import { assert } from 'chai';
import helloFunction, { sumFunction } from '../src';

/**
 * function returns message
 * @param answer
 * @returns {string}
 */
const message = (answer) => `The answer is not equal "${answer}"`;

describe('Awesome test.', () => {
  it('should test function that returns a default greeting string', () => {
    const answer = 'Hello world!';
    assert(helloFunction() === answer, message(answer));
  });

  it('should test function that returns a greeting string for John', () => {
    const answer = 'Hello John!';
    assert(helloFunction('John') === answer, message(answer));
  });

  it('should test function for summing two terms', () => {
    const answer = 3;
    assert(sumFunction(1, 2) === answer, message(answer));
  });
});

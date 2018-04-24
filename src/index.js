/**
 * function returns a greeting string
 * @param name
 * @returns {string}
 */
const helloFunction = (name = 'world') => `Hello ${name}!`;

/**
 * function for summing two terms
 * @param a
 * @param b
 * @returns {number}
 */
const sumFunction = (a, b) => a + b;

export default helloFunction;

export { sumFunction };

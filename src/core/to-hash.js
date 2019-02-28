/**
 * Transforms the input into a className
 * @param {String} str 
 */
export const toHash = (str) => (
    "g0" + 
    (str.map ? str : JSON.stringify(str))
        .split("")
        .reduce((out, i) => (out + i.charCodeAt(0)), 0)
);
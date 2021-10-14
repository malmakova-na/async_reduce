const playGround = require('../playground');
const reduceFunction = require('../solution/index');

const a = new Homework.AsyncArray([1, 2, 3, 4, 10]);
const reduce = reduceFunction(Homework);

const reducerAdd = (acc, curr, i, src, cb) => Homework.add(acc, curr, cb);
const reducerSubstract = (acc, curr, i, src, cb) => Homework.subtract(acc, curr, cb);
const reducerMultiply = (acc, curr, i, src, cb) => Homework.multiply(acc, curr, cb);
const reducerDivide = (acc, curr, i, src, cb) => Homework.divide(acc, curr, cb);


reduce(a, reducerAdd, 0, (res)=> {console.log("reducerAdd test:",res === 1 + 2 + 3 + 4 + 10)});
reduce(a, reducerSubstract, 0, (res)=> {console.log("reducerSubstract test:",res === -1 - 2 - 3 - 4 - 10)});
reduce(a, reducerMultiply, 1, (res)=> {console.log("reducerMultiply test:",res === (1 * 2 * 3 * 4 * 10))});
reduce(a, reducerDivide, 1, (res)=> {console.log("reducerDivide test:",res === 1 / 2 / 3 / 4 / 10)});
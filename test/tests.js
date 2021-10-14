const playGround = require('../playground');
const reduceFunction = require('../solution/index');

const a = new Homework.AsyncArray([1, 2, 3, 4, 10]);
const reduce = reduceFunction(Homework);

const reducerSum = (acc, curr, i, src, cb) => Homework.add(acc, curr, cb);
const reducerSub = (acc, curr, i, src, cb) => Homework.subtract(acc, curr, cb);
const reducerMult = (acc, curr, i, src, cb) => Homework.multiply(acc, curr, cb);
const reducerDiv = (acc, curr, i, src, cb) => Homework.divide(acc, curr, cb);


reduce(a, reducerSum, 0, (res)=> {console.log("reducerSum",res === 1 + 2 + 3 + 4+10)})
reduce(a, reducerSub, 0, (res)=> {console.log("reducerSub",res===-1 - 2 - 3 - 4-10)})
reduce(a, reducerMult, 1, (res)=> {console.log("reducerMult",res === (1 * 2 * 3 * 4*10))})
reduce(a, reducerDiv, 1, (res)=> {console.log("reducerDiv",res===1 / 2 / 3 / 4/10)})
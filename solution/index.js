
module.exports = function (Homework) {

    const getLength = async(arr) => new Promise((resolve) => arr.length((res)=>resolve(res)));
    const getElement = async(arr, index) => new Promise((resolve) => arr.get(index, (res)=>resolve(res)));
    const getAccumulator = async(acc, cur, i, src, fn) => new Promise((resolve) => {
        return fn(acc, cur, i, src, (res)=> resolve(res));
    });
    const compare = async(a, b) => new Promise((resolve) => Homework.less(a, b, (res)=> resolve(res)));
    const add = async(a,b) => new Promise((resolve) => Homework.add(a, b, (res)=> resolve(res)));
    

    return async (array, fn, initialValue, cb) => {
        let answ = initialValue;
        let i = 0;
        let length = await getLength(array);
        let isLess = await compare(i, length);
        while(isLess){
            let element = await getElement(array, i);
            let result = await getAccumulator(answ, element, i, array, fn );
            answ = result;
            i = await add(i,1);
            isLess = await compare(i, length);
        }
        return cb(answ);
    }
}
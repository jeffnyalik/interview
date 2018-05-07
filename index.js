const flat = [1,2,[3,4,[5,6],7,[8,9]]]
const flattened = flat.join()
 function* flatten(arr) {
    if (!Array.isArray(arr)) yield arr;
    else for (let el of arr) yield* flatten(el);
  }
  

console.log(...flatten(flattened))  // 1,2,3,4,5,6,7,8,9

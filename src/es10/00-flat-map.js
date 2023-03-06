const arr = [1,2,3,[4,5,6,[7,8,9],10,11],12,13]
console.table(arr)
console.log(arr)
console.log(arr.flat())
console.log(arr.flat(2))

const arry = [1,2,3,4,5]
console.log(arry.flatMap(a => a**3))
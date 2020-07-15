// buffer 创建
// new Buffer()
let buffer = Buffer.alloc(10)
console.log(buffer)
let buffer1 = Buffer.from('大家好')
console.log(buffer1)
// <Buffer e5 a4 a7 e5 ae b6 e5 a5 bd>
let buffer2 = Buffer.from([0xe5, 0xa4 ,0xa7, 0xe5 ,0xae ,0xb6 ,0xe5, 0xa5, 0xbd])
console.log(buffer2.toString())
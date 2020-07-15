// steam 流
const fs = require("fs")
// let res = fs.readFileSync('1.txt')
// console.log(res)



// 创建一个65kb的文件
// let buffer = Buffer.alloc(65*1024)
// fs.writeFileSync("65kb",buffer,err=>{
//   if(err){
//     return console.log(err)
//   }
//   console.log("成功")
// })

let res = fs.createReadStream("1.txt")
let ws = fs.createWriteStream('2.txt')
res.pipe(ws)
// let str = ''
// res.on("data",chunk=>{
//   str += chunk
//   console.log(chunk)
// })

// res.on("end",()=>{
//   console.log(str)
// })
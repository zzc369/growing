const fs = require("fs") // 文件操作
// 增删改查

// 文件操作
// 重复对一个文件进行写入  flag
// a: 追加写入；w 写入  r 读取
// fs.writeFile('1.txt',"woshi111111",{flag:"a"},function(err){
//   if(err){
//     return console.log(err)
//   }
//   console.log('success')
// })

// 文件读取
// fs.readFile('1.txt',"utf8",(err,data)=>{
//   if(err){
//     return console.log(err)
//   }
//   console.log(data)
// })

// 所有的文件操作 没有加sync的都是异步，否则都是同步
// let data = fs.readFileSync('1.txt')
// console.log(data.toString())

// 修改名称
// fs.rename('1.txt','2.txt',err =>{
//   if(err){
//     return console.log(err)
//   }
//   console.log('success')
// })

// 删除
// fs.unlink("2.txt",(err)=>{
//   if(err) {
//     return console.log(err)
//   }
//   console.log("删除成功")
// })

// 赋值
// fs.copyFile("readme.md","read.md",err=>{
//   if(err){
//     return err
//   }
//   console.log("复制成功")
// })

// function mycopy(src, dest) {
//   fs.writeFileSync(dest, fs.readFileSync(src))
// }
// mycopy("readme.md","1.txt")

// 创建目录
// fs.mkdir("11",err=>{})
// 修改目录名称
// fs.rename("11","22",err=>{})
// 读取目录
// fs.readdir("22",(err,data)=>{})
// 删除目录(必须是空文件夹或目录)
// fs.rmdir("11",err=>{})
// 判断文件或目录是否存在
// fs.exists("22",exists=>{})
// 获取文件或者目录的详细信息
// fs.stat("11.txt",(err,stat)=>{})
// stat.isFile() stat.isDirectory()


// 删除非空文件夹
// 先把目录中的文件删除，在删除目录
function removeDir(path){
  let data = fs.readdirSync(path) // 返回的是数组["11.txt","22"]
  for(let i=0; i< data.length; i++){
    // 是文件或者目录，文件就直接删除，目录就继续查找
    let url = path +'/'+data[i]
    let stat = fs.statSync(url)
    if(stat.isDirectory()) {
      // 目录 继续查找
      removeDir(url)
    } else {
      fs.unlinkSync(url)
    }
  }
  fs.rmdirSync(path)
}
removeDir("22")
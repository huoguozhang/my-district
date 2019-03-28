// 尝试用node.js 生成一份想要的文件 目标文件内容是 china{浙江省: {杭州市: [江干区, 滨江区, 萧山区]}
const fs = require('fs')
const util = require('util')
// import chinaJson from './china.json'
fs.readFile('./package/myDistrict/china.json', (err, data) => {
  if (err) throw err
  let chinaJson = JSON.parse(data)
  let provinceArr = []
  let chinaObj = {}
  for (let i = 0; i < chinaJson.length; i++) {
    // 目前需要的效果是 第一次读取省 第二次读取市 第三次读取区
    chinaObj[chinaJson[i].name] = {}
    provinceArr[i] = chinaJson[i].name
    let child1 = chinaJson[i].child
    for (let j = 0; j < child1.length; j++) {
      // 中国[浙江省][杭州市]
      chinaObj[chinaJson[i].name][child1[j].name] = []
      let child2 = child1[j].child
      let arr = []
      for (let k = 0; k < child2.length; k++) {
        arr.push(child2[k].value)
      }
      chinaObj[chinaJson[i].name][child1[j].name] = arr
    }
  }
  let fileNames = {chinaObj: {name: 'district.json', value: chinaObj}, provinceArr: {name: 'province.json', value: provinceArr}}
  for (let key in fileNames) {
    var writerStream = fs.createWriteStream(`./${fileNames[key].name}`)
    // 使用 utf8 编码写入数据
    writerStream.write(JSON.stringify(fileNames[key].value), 'UTF8', 'w')
    // 标记文件末尾
    writerStream.end()
    // 处理流事件 --> data, end, and error
    writerStream.on('finish', function () {
      console.log('写入完成。', key)
    })
    writerStream.on('error', function(err){
      console.log(err.stack, err, key)
    })
  }
})
/* // 目前需要的效果是 第一次读取省 第二次读取市 第三次读取区
let provinceArr = []
let chinaObj = {}
for (let i = 0; i < chinaJson.length; i++) {
  chinaObj[chinaJson[i].name] = {}
  provinceArr[i] = chinaJson[i].name
  let child1 = chinaJson[i].child
  for (let j = 0; j < child1.length; j++) {
    // 中国[浙江省][杭州市]
    chinaObj[chinaJson[i].name][child1[j].name] = []
    let child2 = child1[j].child
    let arr = []
    for (let k = 0; k < child2.length; k++) {
      arr.push(child2[k].value)
    }
    chinaObj[chinaJson[i].name][child1[j].name] = arr
  }
}
function getCitys (province) {
  return chinaObj[province] // obj
}
function getAreas (province, city) {
  return chinaObj[province][city] // array
}
export {
  provinceArr, getCitys, getAreas
} */

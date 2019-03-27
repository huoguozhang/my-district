// 运行命令 node area.js 生成district.json和 province.json
// 目的只需要解析一次json文件而不用每次都解析china.json
import provinceArr from './province.json'
import chinaObj from './district.json'
// getCitys ('浙江省')
function getCitys (province) {
  return chinaObj[province] // obj
}
// getAreas('浙江省', '杭州市')
function getAreas (province, city) {
  return chinaObj[province][city] // array
}
export {
  getAreas, getCitys, provinceArr
}

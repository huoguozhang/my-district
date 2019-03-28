import myDistrict from './myDistrict.vue'
import { getAreas, getCitys, provinceArr } from './getData'
myDistrict.install = function (Vue) {
  Vue.component(myDistrict.name, myDistrict)
}
export {
  myDistrict,
  getAreas, getCitys, provinceArr
}

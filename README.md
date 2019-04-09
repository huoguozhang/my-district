#效果
***
![效果图](https://upload-images.jianshu.io/upload_images/6036420-b909eb7114eb9325.gif?imageMogr2/auto-orient/strip)

预览地址：[https://huoguozhang.github.io/my-district/dist/](https://huoguozhang.github.io/my-district/dist/)

github:[https://github.com/huoguozhang/my-district](https://github.com/huoguozhang/my-district)

#介绍：
***
vue + element-ui (el-select+el-option)的地区选择组件
实现了：省+市+区
#说明：
***
#使用
***

1 引入

```
// es6
// 全局
// main.js
import myDistrict from 'my-district'
Vue.use(myDistrict)
// 局部
// xxx.vue
<script>
import myDistrict from 'my-district'
export default {
    components: {
         myDistrict
     }
}
</script>
```

2 使用

```
<template>
      <myDistrict
        :province.sync="province"
        :city.sync="city"
        :area.sync="area"
      ></myDistrict>
</template>
```
3. 参数说明
**myDistrict Attributes**

  | 参数 | 说明 | 类型 | 可选值 | 默认值|
  |:------: |:------: |:-------:|:---------:|:---------:|
  |  province     |      省  |   string      |     --  |   --  |
  |  city     |     市  |   string      |     --  |   --  |
  |  area     |      区  |   string      |     --  |   --  |
  |  layoutLevels     |      显示级别 1省2市3区 1 2 3 自由组合，但前面的值必须提供  |   array      |    1,2,3 构成的数组  |  [1,2,3] |
  |uint|样式长度单位|string|px,%等|px
  |size|element组件的size|string|mini,small,medium|--|
  |selectWidth|select组件的宽度|number|--|200|
  |spaceWidth|两个select的间隙|number|--|24|

4 其他使用可与调取内置函数

  |名称|说明|参数用法|
  |:--------:|:-------------------:|:-----------:|
  |provinceArr|            省列表|               --|
  |getCitys|获取市列表，提供省中文名|           getCitys('浙江省')|
  |getArea|获取区县列表，提供省市中文名|getAreas('浙江省', '杭州市')|

```
import { getAreas, getCitys, provinceArr } from 'my-district'
```
5 和ui库的form表单结合,此处用的element,你可以使用其他的ui库，校验规则由你自己定义。
```
<template>
  <div id="app">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item prop="district">
        <myDistrict
          :province.sync="ruleForm.district.province"
          :city.sync="ruleForm.district.city"
          :area.sync="ruleForm.district.area"
        ></myDistrict>
      </el-form-item>
      <el-button @click="submitForm('ruleForm')">提交</el-button>
    </el-form>
  </div>
</template>

<script>
let checkDistrict= (rule, {province, city, area}, cb) => {
  if (!province) {
    cb(new Error('请选择省'))
  } else if (!city) {
    cb(new Error('请选择市'))
  } else if (!area) {
    cb(new Error('请选择区'))
  } else {
    cb()
  }
}
export default {
  name: 'app',
  data() {
    return {
      ruleForm: {
        district: {
          province: '',
          city: '',
          area: ''
        }
      },
      rules: {
        district: [
          {validator: checkDistrict, trigger: 'blur'},
          {validator: checkDistrict, trigger: 'change'}
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          // sconsole.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

```
#question:
***
1. 数据不对怎么办？
可以更改china.json文件,可以删改某项。
```
...
        "name": "天津市",
        "child": [
            {
                "name": "天津市",
                "child": [
                    {"value":"和平区"},
                    {"value":"河东区"},
                    {"value":"河西区"},
                    {"value":"南开区"},
                    {"value":"河北区"},
                    {"value":"红桥区"},
                    {"value":"东丽区"},
                    {"value":"西青区"},
                    {"value":"津南区"},
                    {"value":"北辰区"},
                    {"value":"武清区"},
                    {"value":"宝坻区"},
                    {"value":"滨海新区"},
                    {"value":"宁河县"},
                    {"value":"静海县"},
                    {"value":"蓟州县"},
                    {"value":"xxx"} // 你需要增加的
                ]
            }
      ...
```
执行npm run make:area-json

2.其他问题可以提issue

[huoguozhang](https://github.com/huoguozhang/my-district)
3.感谢

[Orionwl](https://github.com/Orionwl)和[CutiePanther](https://github.com/CutiePanther)整理的地区json文件


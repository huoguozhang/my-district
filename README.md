#效果
***
![效果图](https://upload-images.jianshu.io/upload_images/6036420-b909eb7114eb9325.gif?imageMogr2/auto-orient/strip)

#介绍：
***
vue + element-ui (el-select+el-option)的地区选择组件
实现了：省+市+区
#说明：
***
目前为0.01版
后期会考虑单独实现select和增加form表单的校验，各ui组件能通过校验
#使用
***
1. 引入
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
2. 使用
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
  |  city     |      省  |   string      |     --  |   --  |
  |  area    |      省  |   string      |     --  |   --  |
  |  layoutLevel     |      显示级别 1: 省 2: 省+市 3：省+市+区  |   string      |    1,2,3  |   3  |
 
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
  [huoguozhang](https://github.com/huoguozhang)

3.感谢:
  [Orionwl](https://github.com/Orionwl)和[CutiePanther](https://github.com/CutiePanther)整理的地区json文件


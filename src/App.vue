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
import {Form, FormItem, Button } from 'element-ui'
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
  components: {
    ElButton: Button,
    ElForm: Form,
    ElFormItem: FormItem
  },
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
<style></style>
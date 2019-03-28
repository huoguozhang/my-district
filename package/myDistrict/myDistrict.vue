<template>
  <div class="distinct-component-ct">
    <el-select
      :style="{
        width: selectWidth + unit,
        marginRight: layoutLevels.length > 1 ? (spaceWidth + unit) : 0
      }"
      :size="size"
      v-if="layoutLevels.includes(1)"
      placeholder="请选择省份"
      filterable
      v-model="provinceSelect"
      @change="provinceChange"
    >
      <el-option
        v-for="(item, index) in provinceArr"
        :key="index"
        :label="item"
        :value="item"
      >
      </el-option>
    </el-select>
    <el-select
      :style="{
          width: selectWidth + unit,
          marginRight: layoutLevels.includes(3) ? (spaceWidth + unit) : 0
        }"
      :size="size"
      v-if="layoutLevels.includes(2)"
      placeholder="请选择市"
      filterable
      v-model="citySelect"
      @change="cityChange"
    >
      <el-option
        v-for="(item, index) in computingCitys"
        :key="index"
        :lable="index"
        :value="index"
      >
      </el-option>
    </el-select>
    <el-select
      :style="{width: selectWidth + unit}"
      :size="size"
      v-if="layoutLevels.includes(3)"
      placeholder="请选择区"
      filterable
      v-model="areaSelect"
      @change="areaChange"
    >
      <el-option
        v-for="(item, index) in computingAreas"
        :label="item"
        :key="index"
        :value="item"
      >
      </el-option>
    </el-select>
  </div>
</template>
<script>
import provinceArr from './province.json'
import { getAreas, getCitys } from './getData.js'
import { Select, Option } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import styleProps from './styleProps'
export default {
  name: 'myDistrict',
  components: {
    ElSelect: Select,
    ElOption: Option
  },
  props: {
    ...styleProps,
    layoutLevels: {
      type: Array,
      default () {
        return [1, 2, 3]
      },
      validator (value) {
        return !value.some(v => ![1, 2, 3].includes(v))
      }
    },
    layoutLevel: {
      type: Number,
      default: 3,
      validator: function (value) {
        // 这个值必须1,2,3中的一个
        return [1, 2, 3].indexOf(value) > -1 && value > 0 && value < 4
      }
    },
    province: {
      // 1
      type: String
    },
    city: {
      // 2
      type: String
    },
    area: {
      // 3
      type: String
    }
  },
  data () {
    return {
      provinceArr,
      provinceSelect: '',
      citySelect: '',
      areaSelect: ''
    }
  },
  methods: {
    clearSelect (level) {
      if (level === 1) {
        this.citySelect = ''
        this.cityChange('')
        this.areaSelect = ''
        this.areaChange('')
      } else if (level === 2) {
        this.areaSelect = ''
        this.areaChange('')
      }
    },
    provinceChange (val) {
      this.clearSelect(1)
      this.$emit('update:province', val)
    },
    cityChange (val) {
      this.clearSelect(2)
      this.$emit('update:city', val)
    },
    areaChange (val) {
      this.$emit('update:area', val)
    }
  },
  computed: {
    computingCitys () {
      return this.provinceSelect ? getCitys(this.provinceSelect) : []
    },
    computingAreas () {
      return (this.provinceSelect && this.citySelect) ? getAreas(this.provinceSelect, this.citySelect) : []
    }
  },
  watch: {
    province (val) {
      if (val !== this.provinceSelect) {
        this.provinceSelect = val
      }
    },
    city (val) {
      if (val !== this.citySelect) {
        this.citySelect = val
      }
    },
    area (val) {
      if (val !== this.areaSelect) {
        this.areaSelect = val
      }
    }
  },
  created () {
    this.areaSelect = this.area || ''
    this.citySelect = this.city || ''
    this.provinceSelect = this.province || ''
  }
}
</script>
<style scoped>
.distinct-component-ct .m-r-24{
  margin-right: 24px;
}
</style>

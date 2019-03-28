const styleUnit = new Set(['em', 'ex', '%', 'px', 'cm', 'mm', 'in', 'pt', 'pc', 'vw', 'vw', 'vh', 'rem', 'vmin', 'vmax', 'ch'])
export default {
  unit: {
    type: String,
    default: 'px',
    validator: function (value) {
      // 这个值必须1,2,3中的一个
      return styleUnit.has(value)
    }
  },
  size: {
    type: String,
    default: '',
    validator: function (value) {
      // 这个值必须中的一个
      return ['', 'medium', 'small', 'min'].includes(value)
    }
  },
  selectWidth: {
    type: Number,
    default: 200
  },
  spaceWidth: {
    type: Number,
    default: 24
  }
}

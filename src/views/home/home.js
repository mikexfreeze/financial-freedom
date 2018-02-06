/**
 * Created by Micheal Xiao on 2018/2/5.
 */
export default {
  data () {
    return {
      form: {
        monthExpense: 20000,
        expectLife: 88,
        depreciation: 3,
        age: 32,
      },
      totalNeed: 0,
      showCalMore: true,
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      // alert(JSON.stringify(this.form));
      let total = 0
      let rate = 1
      for (let i = this.form.age; i < this.form.expectLife; i++) {
        rate = (rate + this.form.depreciation / 100)
        total += this.form.monthExpense * (rate + this.form.depreciation / 100) * 12
      }
      // this.totalNeed = total
      let time = 500 // 总时间
      let step = total * 16 / time // 每16ms增加的数值
      this.totalNeed = 0 // 计数器
      let interval // 定时器

      // 每帧不能超过16ms，所以理想的interval间隔为16ms
      // step为每16ms增加的数值
      let thiz = this
      interval = setInterval(function () {
        thiz.totalNeed = Math.floor(thiz.totalNeed + step)
        if (thiz.totalNeed >= total) {
          clearInterval(interval)
          interval = undefined
          thiz.totalNeed = total
        }
      }, 16)
    },
    onReset (evt) {
      evt.preventDefault()
      /* Reset our form values */
    },
    beforeEnter: function (el) {
      let delay = el.getAttribute('animate-delay')
      let duration = el.getAttribute('animate-duration')
      console.log('attr:' + delay, duration)
      let cssObj = {
        'animation-delay': delay,
        '-webkit-animation-delay': delay,
        'animation-duration': duration,
        '-webkit-animation-duration': duration,
        'visibility': 'visible'
      }
      let getCssText = function (obj) {
        let text = []
        for (let o in obj) {
          text.push(o + ':' + obj[o])
        }
        return text.join(';')
      }
      el.style.cssText = getCssText(cssObj)
    },
  },
  computed: {
    doneCalTotal: function () {
      return this.totalNeed !== 0
    }
  }
}

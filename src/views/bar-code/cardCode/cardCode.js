/**
 * Created by Micheal Xiao on 2018/1/23.
 */
var QRCode = require('qrcode')

export default {
  created () {
    // console.log(this.$route.params)
  },
  data () {
    return {
      qrText: this.$route.params.cardCode
    }
  },
  mounted () {
    let qrText = this.$route.params.cardCode
    let canvas = document.getElementById('qr-canvas')
    QRCode.toCanvas(canvas, qrText, {width:'500'}, function (error) {
      if (error) console.error(error)
    })
  }
}

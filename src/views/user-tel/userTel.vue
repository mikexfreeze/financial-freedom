<template>
    <div class="bg">
    <div class="snow"></div>
        <div class="Top"></div>
        <div class="Main">
            <div class="MainInfo">
                <li><i class="tel"></i><span>手机</span><input v-model="temp.mobile" type="tel"></li>
                <li>
                    <i class="pass"></i>
                    <span>验证码</span>
                    <input v-model="temp.code" type="tel">
                    <button v-if="waitTime === 0" @click="sendVerifCode"></button>
                    <button v-else disabled="disabled">重发({{waitTime}})</button>
                </li>
            </div>
        </div>
        <div class="bgArrow"></div>
        <div class="mmCar"></div>
        <button class="Submit" @click="checkMember"></button>
    </div>
</template>
<script>

  import { CheckMember, GetVerifCode } from '@/api/memberApi'
  import moment from 'moment'

  export default {
    created () {
      this.setOpenIdLocal()
    },
    data () {
      return {
        temp: {
          mobile: "",
          code: ""
        },
        waitTime: 0,
        codeSend:""
      }
    },
    methods: {
      verifMobile () {
        if (this.temp.mobile === '') {
          this.$message({
            message: '请填写手机号码',
            type: 'error'
          })
          return false
        } else {
          var reg = /^[1]\d{10}$/   //验证手机号码
          if (!reg.test(this.temp.mobile)) {
            this.$message({
              message: '请输入正确的手机号码',
              type: 'error'
            })
            return false
          } else {
            return true
          }
        }
      },
      checkMember (arg) {
        if(!this.verifMobile()){
          return
        }

        if (this.temp.code === '') {
          this.$message({
            message: '请填写验证码',
            type: 'error'
          })
          return false
        }else if(this.temp.code !==this.codeSend){
          this.$message({
            message: '验证码错误',
            type: 'error'
          })
          return false
        }
        CheckMember(this.temp)
          .then((response) => {
            if (response.data) {
              this.$router.push({path: '/user-center/' + localStorage.getItem('openId') + '/nav'})
            } else {
              this.$router.push({path: '/member-info/'+this.temp.mobile})
            }
          })
      },
      sendVerifCode () {
        if(!this.verifMobile()){
          return
        }
        let thiz = this
        this.waitTime = 60
        function countTime () {
          setTimeout(()=>{
            if(thiz.waitTime > 0) {
              thiz.waitTime --
              countTime()
            }
          },1000)
        }
        countTime()
        GetVerifCode(this.temp.mobile)
          .then((response) => {
            if (response.data) {
              this.codeSend=response.data.code
            }
          })

      }
    },
    watch: {
      'checkMember': function () {
        this.checkMember()
      }
    }

  }
</script>
<style scoped lang="scss" src="./userTel.scss"></style>

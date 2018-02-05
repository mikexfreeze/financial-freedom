<template>
    <div class="TabContent">
        <div class="Tab">
            <div class="tabs" :class="{active: couponStatus === 'COUPON_ALLOCATION'}" @click="couponStatus = 'COUPON_ALLOCATION'">未使用</div>
            <div class="tabs" :class="{active: couponStatus === ''}" @click="couponStatus = ''">未领取</div>
            <div class="tabs" :class="{active: couponStatus === 'COUPON_PICKUP'}" @click="couponStatus = 'COUPON_PICKUP'">已使用</div>
            <div class="tabs" :class="{active: couponStatus === 'COUPON_REDEEM'}" @click="couponStatus = 'COUPON_REDEEM'">已过期</div>
        </div>
        <div class="content">
            <div class="listCoupon">
                <div v-for="coupon in couponList" class="ticketList">
                    <img src="~@/assets/img/new/couponbg.png" alt="">
                        <div class="txt">
                            <div class="TopTxt">
                              <h3>{{coupon.cardInfo.cardTitle}}</h3>
                              <p class="Time">{{coupon.cardInfo.dateInfo}}</p>
                              <!--<p class="store">*仅限XXXX门店使用</p>-->
                            </div>
                          <a v-show="couponStatus === 'COUPON_ALLOCATION'" class="btn"  @click="$router.push({name:'卡券条形码',params:{cardCode:card.couponId}})"></a>
                          <a v-show="couponStatus === ''" class="btn_pickup"  @click="pickUp(coupon.couponId)"></a>
                        </div>
                </div>
              <!--<div class="ticketList">-->
                    <!--<img src="~@/assets/img/new/couponbg.png" alt="">-->
                    <!--<div class="txt">-->
                        <!--<div class="TopTxt">-->
                            <!--<h3>Benefit 服务券</h3>-->
                            <!--<p class="Time">2017/11/01-2017/11/30</p>-->
                            <!--<p class="store">*仅限XXXX门店使用</p>-->
                        <!--</div>-->
                        <!--<a class="btn" href="#"></a>-->
                    <!--</div>-->
                <!--</div>-->
            </div>
        </div>
        <div class="snow"></div>
        <div class="small-bg"></div>
        <div class="footer"></div>
    </div>
</template>
<script>

  import { GetCoupons,PickupCoupon } from '@/api/memberApi'
  import moment from 'moment'

  export default {
    created () {
      this.getCoupons({couponStatus: 'COUPON_ALLOCATION',})
    },
    data () {
      return {
        couponList: [],
        couponStatus: 'COUPON_ALLOCATION'
      }
    },
    methods: {
      getCoupons (arg) {
        GetCoupons(arg)
          .then((respons) => {
            this.couponList = respons.data
//            for(let n in this.couponList){
//                if(this.couponList[n].cardInfo.dateInfo){
//                  var str=this.couponList[n].cardInfo.dateInfo
//                  this.couponList[n].cardInfo.dateInfo=this.couponList[n].cardInfo.dateInfo.replace('至','-')
//                }
//            }
          })
      }
    },
    pickUp(id){
      PickupCoupon({'couponId':id})
        .then((respons) => {
          this.getCoupons({'couponStatus': ''})
//            for(let n in this.couponList){
//                if(this.couponList[n].cardInfo.dateInfo){
//                  var str=this.couponList[n].cardInfo.dateInfo
//                  this.couponList[n].cardInfo.dateInfo=this.couponList[n].cardInfo.dateInfo.replace('至','-')
//                }
//            }
        })
    },
    filters: {
      cptExpiryDate: function (value) {
        let date = moment(value).add(1, 'y').format("YYYY/MM/DD")
        return date
      }
    },
    watch: {
      'couponStatus': function (couponStatus) {
        this.getCoupons({couponStatus})
      }
    }
  }
</script>
<style scoped lang="scss" src="./couponTab.scss"></style>

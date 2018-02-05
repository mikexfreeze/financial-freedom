import { GetMemberInfo } from '@/api/memberApi'
import moment from 'moment'

export default {
  created () {
    // this.setOpenIdLocal()
    // console.log(window.memberData)
    // GetMemberInfo()
    //   .then((response)=>{
    //     this.member = response.data
    //     // let time =  response.data.membershipPeriodEndDate
    //     // let day = moment(time).diff(moment(), 'days')
    //     // console.log(day)
    //   })
  },
  data () {
    return {
      member: window.memberData
    }
  },
}

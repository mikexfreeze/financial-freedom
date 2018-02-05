/**
 * Created by Micheal Xiao on 2018/1/26.
 */
import fetch from '@/utils/fetch'

export function GetMemberInfo (argParams) {
  let params = {
    account: process.env.WC_ACCOUNT,
  }
  params = $.extend(params, argParams)
  return fetch({
    url: '/member-center/api/members/open-id/' + (localStorage.getItem('openId') || 'open_id1'),
    method: 'get',
    params: params,
  }).then(function (response) {
    console.log('获取会员信息')
    console.log(response)
    return response
  })
}

export function EditMemberInfo (argParams) {
  let params = {
    // account: process.env.WC_ACCOUNT,
  }
  params = $.extend(params, argParams)
  return fetch({
    url: '/member-center/api/members',
    method: 'put',
    data: params,
  }).then(function (response) {
    console.log('修改会员信息')
    console.log(response)
    return response
  })
}

export function GetMemberBonus (argParams) {
  let params = {
    openId: localStorage.getItem('openId') || 'open_id1',
    account: process.env.WC_ACCOUNT,
    bonusPointType: 'ALL',
  }
  params = $.extend(params, argParams)
  return fetch({
    url: '/member-center/api/member-bonus-point-histories',
    method: 'get',
    params: params,
  }).then(function (response) {
    console.log('获取会员积分')
    console.log(response)
    return response
  })
}

export function RegisterMember (argParams) {
  let params = {
    openId: localStorage.getItem('openId') || 'open_id19',
    account: process.env.WC_ACCOUNT,
    channel: "WECHAT",
  }
  params = $.extend(params, argParams)
  return fetch({
    url: '/member-center/api/register',
    method: 'post',
    data: params,
  }).then(function (response) {
    console.log('注册会员')
    console.log(response)
    return response
  })
}


export function FindAllProvinces () {
  return fetch({
    url: '/basicdata/api/region/findAllProvinces',
    method: 'get',
  }).then(function (response) {
    return response
  })
}

export function FindCityByProvinceId (provinceId) {
  return fetch({
    url: '/basicdata/api/region/findCityByProvinceId/'+provinceId,
    method: 'get',
  }).then(function (response) {
    return response
  })
}

export function FindAreasByCityId (cityId) {
  return fetch({
    url: '/basicdata/api/region/findAreasByCityId/'+cityId,
    method: 'get',
  }).then(function (response) {
    return response
  })
}
export function GetCoupons (argParams) {
  let params = {
    openId: localStorage.getItem('openId') || 'open_id19',
    account: process.env.WC_ACCOUNT,
    // page:argParams.page-1,
    // size:argParams.size
  }
  params = $.extend(params, argParams)
  return fetch({
    url: '/member-center/api/coupon-members',
    method: 'get',
    params: params,
  }).then(function (response) {
    return response
  })
}

export function CheckMember (argParams) {
  let params = {
    account: process.env.WC_ACCOUNT,
    openId: localStorage.getItem('openId') || 'open_id19',
  }
  params = $.extend(params, argParams)
  return fetch({
    url: '/member-center/api/account/check-member',
    method: 'get',
    params: params,
  }).then(function (response) {
    return response
  })
}

export function GetVerifCode (mobile) {
  return fetch({
    // url: '/captcha/api/sms/sendSms/' + (localStorage.getItem('openId') || '112') + '/' + mobile,
    url: '/captcha/api/sms/sendSms/' + ('112') + '/' + mobile,
    method: 'post',
  }).then(function (response) {
    console.log("获取验证码")
    console.log(response)
    return response
  })
}

export function PickupCoupon (argParams) {
  let params = {
    account: process.env.WC_ACCOUNT,
    openId: localStorage.getItem('openId') || 'open_id19',
  }
  params = $.extend(params, argParams)
  return fetch({
    url: '/member-center/api/pickupCoupon',
    method: 'put',
    data: params,
  }).then(function (response) {
    console.log('领用优惠券')
    console.log(response)
    return response
  })
}


export function RedeemCoupon (argParams) {
  let params = {
    account: process.env.WC_ACCOUNT,
    openId: localStorage.getItem('openId') || 'open_id19',
  }
  params = $.extend(params, argParams)
  return fetch({
    url: '/member-center/api/redeemCoupon',
    method: 'put',
    data: params,
  }).then(function (response) {
    console.log('使用优惠券')
    console.log(response)
    return response
  })
}

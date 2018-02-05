<template>
    <div class="mainContainer" style="position:relative;">
        <div class="mainCenter">
            <div class="head">
                <span class="name">亲爱的&nbsp;&nbsp;<i>{{member.name}}</i></span>
                <span class="edit"><i class=""></i><em><router-link to="/edit-member">修改个人资料</router-link></em></span>
            </div>
            <div class="center">
                <div class="Img">
                    <img v-if="member.headImgUrl" :src="member.headImgUrl">
                    <img v-else src="../../assets/img/mm.png" alt="">
                </div>
                <div class="tag" :class="{grey: member.memberType === 'C'}"></div>
                <div v-show="" class="Graytag"></div>
                <div class="Card" @click="$router.push({name:'会员条形码',params:{memberCode:member.memberCode}})">
                    <img v-show="member.memberType === 'P'" src="../../assets/img/new/vip.png" alt="">
                    <img v-show="member.memberType === 'S'" src="../../assets/img/new/Silver-card/Silver-card.png" alt="">
                    <img v-show="member.memberType === 'G'" src="../../assets/img/new/Gold-card/Gold-card.png" alt="">
                    <img v-show="member.memberType === 'C'" src="../../assets/img/new/gray-card@2x.png" alt="">
                    <div class="SmallErma"><img src="../../assets/img/new/smallErma@2x.png" alt=""></div>
                    <div class="cardTime">
                        <div class="cardNum">
                            <p>会员卡号</p>
                            <p>{{member.memberCode}}</p>
                        </div>
                        <div class="lastTime">
                            <!--<p>会员卡有效期</p>-->
                            <!--<p>{{member.membershipPeriodEndDate | moment("YYYY.MM.DD")}}</p>-->
                        </div>
                    </div>
                </div>
                <p class="text-center" v-show="member.memberType === 'C'" style="color: deeppink">消费任意金额即可升级为粉卡</p>
                <div class="CardFlex">
                    <div class="PinkCrad">
                      <span class="pinkName" v-show="!member.memberType">卡</span>
                      <span class="grayColor" v-show="member.memberType === 'C'"></span>
                      <span class='pinkName' v-show="member.memberType === 'P'">粉卡</span>
                      <span class='pinkName' v-show="member.memberType === 'S'">银卡</span>
                      <span class='pinkName' v-show="member.memberType === 'G'">金卡</span>
                        <p class="p1">
                            <span class="title">当前<br>会员等级</span>
                            <!--<img src="../../assets/img/new/text1.png" alt="">-->
                        </p>
                    </div>
                    <div class="PinkCrad">
                        <span class="grayColor" v-if="member.memberType === 'C'"></span>
                        <span class='pinkName' v-else>{{member.bonusPointBalance || 0}}</span>
                        <p class="p2">
                            <span class="title">当前<br>可用积分</span>
                            <!--<img src="../../assets/img/new/text2.png" alt="">-->
                        </p>
                    </div>
                    <div class="PinkCrad">
                        <span class="grayColor" v-if="member.memberType === 'C'"></span>
                        <span class='pinkName' v-else>{{member.remainDays}}天</span>
                        <p class="p3">
                            <span class="title">积分<br>过期时间</span>
                            <!--<img src="../../assets/img/new/text3.png" alt="">-->
                        </p>
                    </div>
                </div>
                <router-view :class="{grey: member.memberType === 'C'}"></router-view>

            </div>
        </div>
        <div class="car" v-show="$route.path === '/user-center/list'"></div>
        <div class="footer" v-show="$route.path === '/user-center/nav'"></div>
    </div>
</template>
<script src="./userCenter.js"></script>
<style scoped lang="scss" src="./userCenter.scss"></style>

<template>
    <div class="mainContainer">
        <!--<div class="title"><img src="~@/assets/img/bar-code/title-img.png" alt=""></div>-->

        <div class="bar-code-container">
            <canvas id="qr-canvas"></canvas>
            <!--<img src="~@/assets/img/bar-code/bigErma@2x.png" alt="">-->
        </div>
        <div class="code-text-container">
            <span class="code">{{qrText}}</span>
        </div>
        <div class="validity">
            <span class="validity-text">使用时请向工作人员出示</span>
        </div>
        <div class="foot">
            <img src="~@/assets/img/bar-code/foot-img.png" alt="">
        </div>
    </div>
</template>

<script src="./cardCode.js"></script>
<style scoped lang="scss" src="./cardCode.scss"></style>

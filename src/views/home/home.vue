<template>
    <div class="container">
        <div class="pb-md-3 pl-md-5 bd-content col-12">
            <h2 class="text-center p-3">财富自由计算器</h2>
            <b-form @submit="onSubmit">
                <b-form-group horizontal
                              label="预期月消费："
                              label-for="monthExpense"
                              description="预估每个月期望的花费">
                    <b-input-group>
                        <b-form-input id="monthExpense"
                                      type="number"
                                      v-model="form.monthExpense"
                                      required
                                      placeholder="输入预期消费">
                        </b-form-input>
                        <b-input-group-text slot="append">
                            <strong class="text-muted">￥</strong>
                        </b-input-group-text>
                    </b-input-group>
                </b-form-group>
                <b-form-group horizontal
                              label="预期寿命:"
                              label-for="expectLife"
                              description="参考：目前国内平均寿命76，日本84岁">
                    <b-form-input id="expectLife"
                                  type="number"
                                  v-model="form.expectLife"
                                  required
                                  placeholder="输入预估寿命">
                    </b-form-input>
                </b-form-group>
                <b-form-group horizontal
                              label="现在年龄:"
                              label-for="age"
                >
                    <b-form-input id="age"
                                  type="number"
                                  v-model="form.age"
                                  required
                                  placeholder="输入年龄">
                    </b-form-input>
                </b-form-group>
                <b-form-group horizontal
                              label="货币年贬值率:"
                              label-for="depreciation"
                >
                    <b-form-input id="depreciation"
                                  type="number"
                                  v-model="form.depreciation"
                                  required
                                  placeholder="输入预估贬值率">
                    </b-form-input>
                </b-form-group>
                <h2 class="text-right">{{totalNeed.toLocaleString()}}￥</h2>
                <b-button type="submit" variant="primary" block size="lg" class="mt-3">计算</b-button>
            </b-form>
            <!--<b-form>-->
            <!--<b-form-group label="月收入:"-->
            <!--label-for="month">-->

            <!--</b-form-group>-->
            <!--</b-form>-->
            <!--<transition-->
            <!--v-on:before-enter="beforeEnter"-->
            <!--name="custom-classes-transition"-->
            <!--enter-active-class="animated fadeIn"-->
            <!--leave-active-class="animated fadeOut"-->
            <!--&gt;-->
            <!--<b-button v-show="doneCalTotal"-->
            <!--variant="outline-secondary"-->
            <!--animate-delay="2s"-->
            <!--block size="lg"-->
            <!--class="mt-3 fadeIn">算算要赚多久？</b-button>-->
            <!--</transition>-->

        </div>

    </div>
</template>

<script src="./home.js"></script>
<style scoped lang="scss" src="./home.scss"></style>
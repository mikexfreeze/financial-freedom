<template>
    <div class="container">
        <h2 class="text-center p-3">财富自由计算器</h2>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="exampleInputGroup1"
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
            <b-form-group id="exampleInputGroup2"
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
            <b-form-group id="exampleInputGroup2"
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
            <b-form-group label="货币年贬值率:"
                          label-for="depreciation"
                          >
                <b-form-input id="depreciation"
                              type="number"
                              v-model="form.depreciation"
                              required
                              placeholder="输入预估贬值率">
                </b-form-input>
            </b-form-group>
            {{totalNeed}}

            <b-button type="submit" variant="primary">计算</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
    </div>
</template>

<script src="./home.js"></script>
<style scoped lang="scss" src="./home.scss"></style>
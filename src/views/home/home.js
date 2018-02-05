/**
 * Created by Micheal Xiao on 2018/2/5.
 */
export default {
  data () {
    return {
      form: {
        monthExpense: 20000,
        expectLife: 88,
        depreciation: 7,
        age: 32,
        food: null,
        checked: []
      },
      totalNeed: 0,
      foods: [
        { text: 'Select One', value: null },
        'Carrots', 'Beans', 'Tomatoes', 'Corn'
      ],
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      // alert(JSON.stringify(this.form));
      console.log(1)
      let total = 0; let rate = 1;
      for (let i = this.form.age; i < this.form.expectLife; i++) {
        rate = (rate + this.form.depreciation / 100)
        total += this.form.monthExpense * (rate + this.form.depreciation / 100) * 12
      }
      this.totalNeed = total
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}

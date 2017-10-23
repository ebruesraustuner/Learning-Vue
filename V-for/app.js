window.addEventListener('load', () => {
  window.vue = new Vue({
    el: '#app',
    data: {
      isLoading: true,
      cart: [],
      saved: []
    },
    methods: {
      removeFromCart(index) {
          this.cart.splice(index, 1);
        },
        saveForLater(index) {
          const item = this.cart.splice(index, 1);
          console.log(item);
          this.saved.push(item[0]);
        },
        removeFromSavedList(index) {
        this.saved.splice(index);
        },
         moveToCart(index) {
          const item = this.saved.splice(index, 1);
          this.cart.push(item[0]);
        }
        
    },
    created() {
      fetch('https://raw.githubusercontent.com/lovelyalchemist/Vue/master/V-for/data.json')
        .then((res) => {
          return res.json()
        })
        .then((res) => {
          this.isLoading = false;
          this.cart = res.cart;
          this.saved = res.saved;
        })

    }
  })

});

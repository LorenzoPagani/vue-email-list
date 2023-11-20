const { createApp } = Vue

createApp({
  data () {
    return {
      mailArray: []
    }
  },
  mounted () {
    for (let i = 0; i < 10; i++) {
      axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(resp => {
          if (resp.data.success) {
            this.mailArray.push(resp.data.response)
          }
        })
    }
  }
}).mount('#app')

<template>
  <form>
    <label for="answer">When do you want it?</label>
    <input type="text" id="answer" v-model="luckyAnswer" autofocus />

    <button @click.prevent="login">Login</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      luckyAnswer: '',
    };
  },

  methods: {
    async login() {
      const response = await fetch('http://localhost:3000/authenticate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: this.luckyAnswer }),
      });
      const data = await response.json();
      if (data.success) {
        this.$router.push('/todo');
      } else {
        alert('Incorrect answer. Please try again.');
      }
    },
  },
};
</script>

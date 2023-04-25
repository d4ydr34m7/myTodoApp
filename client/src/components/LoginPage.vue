<template>
  <form>
    <label for="answer">When do you want it?</label><br />
    <input type="text" id="answer" v-model="luckyAnswer" autofocus /><br /><br />

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
      const response = await fetch('https://todoapp-fc5j.onrender.com/authenticate', {
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

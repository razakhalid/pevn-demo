<template>
  <div>
    <h1>Quotes</h1>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  async mounted() {
    try {
      const isLocalEnv = window.location.hostname === 'localhost'
      const url = (isLocalEnv ? 'http://localhost:3000' : window.location.origin) + '/quotes';
      const response = await axios.get(url);
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  }
}
</script>
<template>
  <div>
    <h1 v-if="quotes">Quotes</h1>
    <h1 v-else>Loading Quotes...</h1>

    <div class="quotes-container">
      <div v-for="quote in quotes" style="margin: 20px 0;">
        <span>{{ quote.author }}</span>:
        <span>{{ quote.quote }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  data: () => ({
    quotes: null
  }),
  methods: {
    async getQuotes() {
      try {
        const isLocalEnv = window.location.hostname === 'localhost'
        const url = (isLocalEnv ? 'http://localhost:3000' : window.location.origin) + '/quotes';
        const { data } = await axios.get(url);
        console.log(data.quotes);
        this.quotes = data.quotes;
      } catch (err) {
        console.error(err);
      }
    },
  },
  created() {
    this.getQuotes();
  }
}
</script>
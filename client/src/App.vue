<template>
  <div>
    <h1>Quotes</h1>
    <div class="quotes-container">
      <div v-for="quote in quotes">
        <h4>Quote {{ quote.id }}:</h4>
        <span>By: {{ quote.author }}</span>
        <p><i>"{{ quote.quote }}"</i></p>
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
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        const response = await axios.get('http://localhost:3000/quotes', {
          params: {
            page: 2
          }
        });
        console.log(response);
        this.quotes = response.data && response.data.data;
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>
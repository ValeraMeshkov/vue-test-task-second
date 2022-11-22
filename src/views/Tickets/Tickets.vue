<template>
  <div class="tickets">

    <Header/>

    <Items/>
  </div>
</template>

<script>
// @ is an alias to /src
// import Filters from './Filters/Filters.vue';

import { mapActions, mapState } from 'vuex';
import { shortMonth, zeroPadded } from '@/helpers';

import Items from './Items/Items.vue';
import Header from './Header/Header.vue';

export default {
  name: 'Tickets',
  components: {
    Items,
    Header,
  },
  async mounted() {
    await this.getTickets();
  },
  computed: {
    ...mapState('tickets', ['tickets']),
  },
  methods: {
    ...mapActions('tickets', ['getTickets']),
    getFullDate(val) {
      const date = new Date(val);
      return `${shortMonth[date.getMonth()]} ${zeroPadded(date.getDay() + 1)}, ${date.getFullYear()}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.tickets{
  margin-left: 255px;
  width: calc(100vw - 255px);
  height: 100vh;
  overflow-y: scroll;
  position: absolute;
  background: #DFE0EB;
}
</style>

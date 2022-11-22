<template>
  <div class="sidebar">

    <div class="header">
      <img :src="require(`@/assets/sidebar-icons/dashboard.svg`)" >
      <span class="title">Dashboard</span>
    </div>

    <div class="items">
      <div
        v-for="(el,index) in items"
        :key="index"
      >
        <hr v-if="el.title === 'Settings'">
        <div
          class="content"
          :class="{contentActive: index === selectedItem}"
          >
          <div class="image">
            <img :src="require(`@/assets/sidebar-icons/${el.icon}.svg`)" >
          </div>
          <span class="title">{{el.title}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Sidebar',

  data() {
    return {
      selectedItem: 1,
      items: [
        {
          title: 'Overview',
          url: '/overview',
          icon: 'overview',
        },
        {
          title: 'Tickets',
          url: '/tickets',
          icon: 'tickets',
        },
        {
          title: 'Ideas',
          url: '/ideas',
          icon: 'ideas',
        },
        {
          title: 'Contacts',
          url: '/contacts',
          icon: 'contacts',
        },
        {
          title: 'Agents',
          url: '/agents',
          icon: 'agents',
        },
        {
          title: 'Articles',
          url: '/articles',
          icon: 'articles',
        },
        {
          title: 'Settings',
          url: '/settings',
          icon: 'settings',
        },
        {
          title: 'Subscription',
          url: '/subscription',
          icon: 'subscription',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.sidebar {
  position: absolute;
  padding-top: 30px;
  height: 100%;
  background: #363740;
  height: 100vh;
  width: 255px;

  .header{
    display: flex;
    img{
      margin-left: 32px;
    }
    .title{
      margin-left: 12px;
      font-weight: 700;
      font-size: 19px;
      letter-spacing: 0.4px;
      color: #A4A6B3;
      opacity: 0.7;
    }
  }

  .items{
    margin-top: 80px;
    hr{
      width: 100%;
      border: 0.1px solid #DFE0EB;
    }
    .content{
      display: flex;
      height: 56px;
      display: flex;
      align-items: center;
      color: #A4A6B3;
      cursor: pointer;
      .image {
        margin-left: 32px;
        margin-right: 25px;
        width: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .contentActive{
      background: #575961;
      color: #DDE2FF;
    }
  }
}

</style>

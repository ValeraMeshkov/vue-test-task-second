<template>
  <div class="header">
    <div class="left">
      <div class="title">Tickets</div>
    </div>

    <div class="right">
      <div class="person">
        <div class="name">Jones Ferdinand</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  height: 100px;
  .left{
    .title{
      font-weight: 700;
      font-size: 24px;
      color: #252733;
    }
  }
  .right{
    display: flex;
  }
}
</style>

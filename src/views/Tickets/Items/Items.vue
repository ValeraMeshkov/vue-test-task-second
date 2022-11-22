<template>
<div class="items">

  <div class="header">
      <div class="title">All Tickets</div>
      <div class="sort">Sort</div>
      <div class="filter">Filter</div>
  </div>

  <div class="table">
      <div class="header">
      <div class="id">Id</div>
      <div class="name">Name</div>
      <div class="description">Description</div>
      <div class="date">Created date</div>
      <div class="image">Image</div>
      </div>

      <div class="item" v-for="item in tickets" :key="item.id">
      <div class="id">{{item.id}}</div>
      <div class="name">{{item.title}}</div>
      <div class="description">{{item.description}}</div>
      <div class="date">{{getFullDate(item.created_at)}}</div>
      <div class="image">
        <ImageFile
          @changeImage="changeImage"
          @saveImage="saveImage"
          :img="item.url"
          :id="item.id"
        />
      </div>
    </div>
  </div>
</div>

</template>

<script>
// @ is an alias to /src
import axios from 'axios';

import { mapActions, mapState } from 'vuex';
import { shortMonth, zeroPadded } from '@/helpers';
import ImageFile from '@/components/ImageFile.vue';

export default {
  name: 'Items',
  components: {
    ImageFile,
  },
  computed: {
    ...mapState('tickets', ['tickets']),
  },
  methods: {
    ...mapActions('tickets', ['getTickets', 'postChangeTicket', 'changeTicket', 'updateTicket']),
    async changeImage(val) {
      this.changeTicket(val);
    },
    async saveImage(id) {
      const ticket = this.tickets.find((el) => el.id === id);
      const formData = new FormData();
      formData.append('_method', 'put');
      formData.append('title', ticket.title);
      formData.append('description', ticket.description);
      formData.append('file', ticket.imgBinary);

      const response = await axios.post(`https://test-api.mybimiboo.dev/api/items/${id}`, formData);
      if (response.data.code === 200) {
        this.updateTicket(response.data.data);
      }
    },
    getFullDate(val) {
      const date = new Date(val);
      return `${shortMonth[date.getMonth()]} ${zeroPadded(date.getDay() + 1)}, ${date.getFullYear()}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.items{
    margin-left: 15px;
    margin-right: 15px;
    background: #fff;
    >.header{
      display: flex;
      align-items: center;
      padding: 30px 20px 40px 30px;
      .title{
        font-weight: 700;
        font-size: 19px;
        color: #252733;
        margin-right: auto;
      }
      .sort, .filter{
        margin-left: 34px;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #4B506D;
      }
    }
    .table {
      .header, .item {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #DFE0EB;
        padding-bottom: 15px;
        .id, .name, .description, .date, .priority, .image {
          font-weight: 700;
          font-size: 14px;
          color: #9FA2B4;
          width: auto;
          min-width: 130px;
          max-width: 130px;
        }
         .image {
          text-align: left;
          min-width: 140px;
          max-width: 140px;
        }
        .priority{
            display: flex;
            align-items: center;
            justify-content: center;
            .status{
                padding: 0 20px;
                width: fit-content;
                background: #29CC97;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 100px;
                height: 24px;
                font-weight: 700;
                font-size: 11px;
                text-transform: uppercase;
                color: #FFFFFF;
            }
            .statusHigh{
                background: #F12B2C;
            }
            .statusLow{
                background: #FEC400;
            }
        }
        .description {
          width: 300px;
          min-width: 200px;
          max-width: 300px;
        }
      }
      .item{
        padding-bottom: 0;
        height: 120px;
        .id, .name, .description, .date, .priority, .image {
          font-weight: 600;
          font-size: 14px;
          color: #252733;
        }
        .description{
          -ms-text-overflow: ellipsis;
          -o-text-overflow: ellipsis;
          text-overflow: ellipsis;
          overflow: hidden;
          -ms-line-clamp: 5;
          -webkit-line-clamp: 5;
          line-clamp: 5;
          display: -webkit-box;
          word-wrap: break-word;
          -webkit-box-orient: vertical;
          box-orient: vertical;
        }

      }
    }
  }
</style>

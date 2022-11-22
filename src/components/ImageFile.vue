<template>
  <div class="editImage" @mousemove="showButton = true" @mouseleave="showButton = false">
    <img v-if="img" :src="img" alt="img" >
    <div v-else class="empty"></div>

    <div v-if="!photoIsChange" class="imageButton">
      <input
        :id="id"
        :name="id"
        type="file"
        accept=".jpg, .jpeg, .png"
        @change="addImage($event)"
      >
      <label v-if="showButton" :for="id">Change</label>
    </div>
    <div v-else class="imageButton">
      <div class="save" @click="saveImage">Save</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Input',
  props: {
    img: {
      type: String,
      default: '',
    },
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      showButton: false,
      photoIsChange: false,
    };
  },
  methods: {
    addImage(e) {
      const file = e.target.files[0];

      const filereader = new FileReader();
      filereader.readAsDataURL(file);
      filereader.onload = (e) => {
        this.photoIsChange = true;
        this.$emit('changeImage', {
          img: e.target.result,
          imgBinary: file,
          id: this.id,
        });
      };
    },
    saveImage() {
      this.$emit('saveImage', this.id);
      this.photoIsChange = false;
    },
  },
};
</script>

<style lang="scss" scoped>
 .editImage{
    position: relative;
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 50px;

    img{
      position:absolute;
      width: 100px;
      height: 100px;
      border-radius: 50px;
      object-fit: cover;
      padding: 0;
    }
    .empty{
      position:absolute;
      background: #C4C4C4;
      width: 100px;
      height: 100px;
      border-radius: 50px;
    }

    .imageButton {
      bottom: 0px;
      padding: 0;
      position: absolute;
      input, button {
        display: none;

      }
      input::after {
        display: none;
      }
      label, .save{
        cursor: pointer;
        background: rgba(0, 0, 0, 0.55);
        width: 100px;
        height: 30px;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 9px;
        color: #FFFFFF;
      }
    }
}

</style>

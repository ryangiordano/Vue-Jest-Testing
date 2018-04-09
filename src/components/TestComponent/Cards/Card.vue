<template>
        <div class="index-card" @click="toggle()">
            <h1>{{card.title}}</h1>
            <div v-if="active">
                <p>{{card.details}}</p>
            </div>
        </div>
</template>
<script>
export default {
  props: ["card"],
  data() {
      return {
          active:false,
      }
  },
  methods:{
      toggle(){
          this.$emit('toggled')
          this.active = !this.active;
      },
      setInactive(){
          this.active = false;
      }
  }
};
</script>
<style lang="scss" scoped>
@import '../../../scss/style.scss';
.active{
    background-color:red;
}
.index-card{
    background-color:$white;
    padding:20px;
    margin:5px;
    @include box-shadow(3px 3px 5px 2px #bbbbbb);

}
</style>

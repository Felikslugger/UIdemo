<template>
  <div class="about">
    <div class="left">
      <h1>Write Later</h1>
      <h1>I dont know what to say now</h1>
      <h1>my cats sleeping</h1>
    </div>
    <ListTwo/>
  </div>
</template>
<script>
import ListTwo from './ListTwo.vue';
export default {
  name: "AboutView",
  components: {
    ListTwo,
  },
};
</script>

<style>
h4{
  line-height: 50px;
}
.about {
  margin-top: 50px;
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f2f1f1;
}
.left {
  width: 50%;
  height: 100%;
}
.left h1 {
  font-size: 40px;
  margin: 20px 0;
  padding: 50px 0 0 0;
  line-height: 1.5;
}
</style>

<template>
  <div class="about">
    <div class="left">
      <h1>Hahaha This is Amazing</h1>
      <h1>Thanks For The Kind Words</h1>
      <h1>Bound To Happen One Day</h1>
    </div>
    <ListOne/>
  </div>
</template>
<script>
import ListOne from './ListOne.vue';
export default {
  name: "AboutView",
  components: {
    ListOne,
  },
};
</script>

<style>
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

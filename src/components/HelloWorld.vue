<template>
  <div class="hello">
    <p>
      http://www.zmiemie.xyz<span>
        <a href="../views/ListOne.vue">GO</a>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    // msg: Strings,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 1000px;
  z-index: -1;
  background-color: #f2f1f1;
}
h1 {
  color: #000;
  font-weight: bold;
  font-size: 40px;
}
p {
  width: 20%;
  color: #000;
  font-size: 20px;
  background-color: #fff;
  border-radius: 20px;
  margin: 350px auto;
  padding: 5px 10px;
  position: relative;
}
p span {
  color: #fff;
  font-weight: bold;
  background-color: #000;
  border-radius: 50%;
  padding: 5px 0;
  position: absolute;
  right: 0;
  top: 0;
}
p span:hover {
  cursor: pointer;
}
a {
  color: #42b983;
  text-decoration: none;
}
</style>

<template>
  <div class="right">
    <div class="up">
      <h3 style="color: brown">Honor Connect</h3>
      <h3>Feliks Home Standby</h3>
      <hr style="width: 95%" />
      <div class="rightUpDown">
        <span style="color: #333">matter</span>
        <span>|</span>
        <span style="color: #00f">No</span>
      </div>
    </div>
    <div class="down">
      <h2>Feliks Home Standby</h2>
      <!-- <hr style="width: 95%" /> -->
      <hr />
      <div class="rightUpDown">
        <span style="color: #333">One</span>
        <span>|</span>
        <span style="color: #00f">Two</span>
        <span>|</span>
        <span style="color: #00f">Three</span>
      </div>
    </div>
  </div>
</template>
  
<script>  
export default({
  name: 'ListOne',
})
</script>
  
<style scoped>
  .right {
    width: 30%;
    height: 80%;
    border-radius: 60px;
    background: #f2f1f1;
    box-shadow:  7px 7px 14px #d0d0d0,
             -7px -7px 14px #ffffff;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }
  .up {
    width: 70%;
    height: 25%;
    border-radius: 50px;
    margin: 0 auto;
    background: #f2f1f1;
    box-shadow:  7px 7px 14px #d0d0d0,
             -7px -7px 14px #ffffff;
  }
  .rightUpDown {
    width: 50%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
  }
  .rightUpDown:nth-child(1) {
    color: #333;
  }
  .rightUpDown:nth-child(2) {
    color: rgb(82, 119, 229);
  }
  
  .down {
    width: 70%;
    height: 25%;
    border-radius: 50px;
    margin: 0 auto;
    background: #f2f1f1;
    box-shadow:  7px 7px 14px #d0d0d0,
             -7px -7px 14px #ffffff;
  }
</style>
  
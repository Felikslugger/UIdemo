<template>
  <div class="right">
    <h2>this is list_two</h2>
    <!-- up -->
    <div class="up">
      <div class="updemo">
        <h3>middle</h3>
        <p>huilong</p>
      </div>
      <div class="updemo">
        <h3>high</h3>
        <p>liangz</p>
      </div>
      <div class="updemo">
        <h3>university</h3>
        <p>cqwu</p>
      </div>
    </div>

    <!-- middle -->
    <div class="middle">
      <h2>this is middle title write later</h2>
      <hr/>
      <div class="rightUpDown">
        <span style="color: #333">introduce yourself</span>
        <span>|</span>
        <span>my name is zhoujie</span>
        <span>|</span>
        <span>big student</span>
      </div>
    </div>
    <!-- down -->
    <div class="down">
      <h2>Zmiemie Home Standby</h2>
    </div>
  </div>
</template>
  
<script>  
export default({
  name: 'ListTwo',
})
</script>
  
<style scoped>
  h2,h3{
    color: rgb(175,119,76);
  }
  .right {
    width: 40%;
    height: 400px;
    border-radius: 60px;
    background: #f2f1f1;
    box-shadow: 6px 6px 15px #adadad, -6px -6px 15px #ffffff;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }
  .up {
    width: 70%;
    height: 100px;
    border-radius: 50px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
  }
  .updemo{
    width: 100px;
    height: 100px;
    vertical-align: middle;
    border-radius: 50%;
    background: #f2f1f1;
    box-shadow:  17px 17px 34px #d0d0d0,
             -17px -17px 34px #ffffff;
    /*display: grid;垂直居中使用*/
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
  .middle{
    width: 80%;
    height: 30%;
    border-radius: 60px;
    margin: 0 auto;
    background: #f2f1f1;
    box-shadow:  7px 7px 14px #d0d0d0,
             -7px -7px 14px #ffffff;
  }
  .down {
    width: 80%;
    height: 15%;
    vertical-align: middle;
    border-radius: 60px;
    margin: 0 auto;
    background: #f2f1f1;
    box-shadow:  7px 7px 14px #d0d0d0,
             -7px -7px 14px #ffffff;
  }
</style>
  
  
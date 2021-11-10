<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <z-card 
    imgSrc="vue.png"
    summary="测试数据01"
    />
    <z-card 
    imgSrc="vue.png"
    summary="测试数据02"
    >
      <template v-slot:footer>
        <div class="footer">
          <div class="level">中级 · 528人报名</div>
          <div class="price">￥299.00</div>
        </div>
      </template>
    </z-card>
    <z-card
    :width="370"
    :imgHeight="90"
    imgSrc="vue1.png"
    >
      概要为插槽
      <template v-slot:footer>
        <div class="footer-spring">
          <div class="level">4步骤 · 6门课</div>
          <div class="price">10965收藏</div>
        </div>
      </template>
    </z-card>
    <div>
      新版本
      <z-card
        :width="300"
        :imgHeight="100"
        imgSrc="vue1.png"
      >
        <template v-slot:footer>
          <div class="footer-spring">

            <div class="level">
              sdfasfasdfqwewe
            </div>
            <div class="price">
              sdfasfsdf
            </div>
          </div>
        </template>
      </z-card>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}
.level {
  color: #9199A1;
  margin-bottom: 8px;
}
.price {
  color: #F01414;
}
.footer-spring{
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  font-size: 12px;
}
</style>

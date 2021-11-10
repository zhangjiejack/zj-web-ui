<template>
  <div class="z-card" :style="width? {width: width + 'px'} : {}">
    <div class="z-card-img" :style="imgHeight? {height: imgHeight + 'px'} : {}">
      <img :src="imgSrc" alt="img">
    </div>
    <div v-if="summary" class="z-card-summary">
      {{summary}}
    </div>
    <div v-else class="z-card-summary">
      <slot></slot>
    </div>
    <slot name="footer" class="footer">
      footer
    </slot>
  </div>
</template>
<script>
export default {
  name: "z-card",
  props: {
    width: { // 卡片宽度
      type: Number,
      default: 0,
    },
    imgSrc: { // 卡片图片资源地址
      type: String,
      default: ""
    },
    imgHeight: { // 卡片图片高度
      type: Number,
      default: 0,
    },
    summary: {
      type: String, // 卡片的概要
      default: "",
    }
  }
}
</script>
<style lang="scss">
@import './card.scss'
</style>
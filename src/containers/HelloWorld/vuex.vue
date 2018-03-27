<template>
  <div class="vuex-content-container">
    <router-link tagh="button" to="/">回上层</router-link>
    <img class="sample-img" :src="vuexImg" />
    <section>
      <span>引用自：<a href="https://vuex.vuejs.org/zh-cn/intro.html">https://vuex.vuejs.org/zh-cn/intro.html</a></span>
      <h2>基本流程如下：</h2>
      <p>action(参考 src/store/sampleStore.js)</p>
      <h3>1.元件内methods使用store提供之dispatch方法呼叫已定义的action</h3>
      <h3>呼叫action</h3>
      <div class="code-container">
        <span>this.$store.dispatch('yourAction')</span>
      </div>
      <h3>2.透过 (src/api/request.js) 向后端发出请求，并依結果发出相应commit</h3>
      <h3>3.mutation根据commit带入的资料处理并放入state中</h3>
      <p>mutation(参考 src/store/sampleStore.js与src/libs/index.js 中 createMutaions)</p>
      <h3>4.元件中拿取state资料</h3>
      <div class="code-container">
        <span>this.$store.state.sampleStore.message</span>
        <span>this.$store.state.sampleStore.yourActionData</span>
      </div>
    </section>
  </div>
</template>

<script>
import Vuex from '@/assets/vuex.png';

export default {
  data() {
    return {
      vuexImg: Vuex,
    }
  },
}
</script>

<style lang="scss" scoped>
.vuex-content-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h3 {
    font-weight: normal;
  }
  p {
    font-size: 18px;
    font-weight: 500;
    background-color: #666666;
    color: #ffffff;
  }
}
.sample-img {
  max-width: 100%;
  max-height: 100%;
}
</style>

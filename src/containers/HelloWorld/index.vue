<template>
  <div class="hello">
    <section class="description-container">
      <h2>命名规则</h2>
      <p>变数、属性与方法, 首单词首字小写，后续单词首字大写</p>
      <div class="example-container">
        <span class="example-title">范例：</span>
        <div class="code-container">
          <span class="example-value">memberDataList</span>
          <span class="example-value">getMemberAddress</span>
        </div>
      </div>
      <p>各元件的name, 各单词首字大写</p>
      <div class="example-container">
        <span class="example-title">范例：</span>
        <div class="code-container">
          <span class="example-value name-code">export default {</span>
          <span class="example-value name-code">name: 'ShoppingCart',</span>
          <span class="example-value name-code">}</span>        
        </div>
      </div>
      <p>Vuex store 的 types 各单词每字大写</p>
      <div class="example-container">
        <span class="example-title">范例：</span>
        <div class="code-container">
          <span class="example-value">GET_MEMEBER_ADDRESS</span>
          <span class="example-value">POST_MEMBER_INFO</span>
          <span class="example-value">DELETE_CART_ITEM</span>
        </div>
      </div>
    </section>

    <section class="description-container">
      <h2>档案放置</h2>
      <span>一般元件放在 src/components下</span>
      <span>页面放在 src/containers下</span>
      <h3>其他位置：(相关文档)</h3>
      <span>图档：src/assets</span>
      <span>API Request请求：src/api</span>
      <span>路由 vue router：src/router <a href="https://router.vuejs.org/zh-cn/">vue-router</a></span>
      <span>状态管理 vuex：src/store <a href="https://vuex.vuejs.org/zh-cn/">vuex</a> <router-link to="/vuex">简易说明</router-link></span>
      <span>多语系 vue i18n：src/i18n <a href="https://kazupon.github.io/vue-i18n/en/">vue-i18n</a></span>
    </section>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.description-container {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  p {
    font-size: 18px;
    font-weight: 500;
    background-color: #666666;
    color: #ffffff;
  }
  a {
    background-color: #000000;
    color: #fff;
    &:visited {
      background-color: #afafaf;
      color: #fff;
    }
  }
}
.example-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .example-title {
    font-weight: bold;
  }
}
</style>

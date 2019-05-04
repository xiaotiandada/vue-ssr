<template>
  <div>
    {{ title }}
    {{ des }}
    {{ img }}
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item.title }}</li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";

function setHead(store) {
  return store.dispatch("getMetaInfo");
}

export default {
  // asyncData(store, route) {
  //   // 两个参数为store和当前路由信息，此函数会在组件实例化之前调用，所以无法访问this
  //   return store.dispatch("getMetaInfo");
  // },
  name: "home",
  // 数据
  data() {
    return {
      page: 1 // 页码
    };
  },
  metaInfo() {
    return {
      title: "ssr demo",
      meta: [
        { property: "og:title", content: this.title },
        { property: "og:description", content: this.des },
        {
          property: "og:image",
          content: this.img
        }
      ]
    };
  },
  preFetch: setHead,
  beforeMount() {
    setHead(this.$store);
  },
  // 计算属性
  computed: {
    ...mapState(["title", "des", "img"])
  },
  created() {},
  mounted() {},
  // 方法
  methods: {},
  // 子组件
  components: {}
};
</script>
<!--当前组件的样式 -->
<style scoped></style>

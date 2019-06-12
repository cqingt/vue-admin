<template>

  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <el-card class="box-card">
      <router-view :key="key" />
      </el-card>

    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style scoped>

.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
  background: #f0f2f5;
  /*margin-top: 24px;*/
  padding: 24px 24px 0;
}
.app-main .el-card{
  margin-top:60px;
  /* border: 1px solid #aaa; */
  box-sizing:border-box;
  margin:0;
  padding:0;
  color:rgba(0,0,0,.65);
  font-size:14px;
  font-variant:tabular-nums;
  line-height:1.5;
  list-style: none;
  font-feature-settings:"tnum";
  position:relative;
  background:#fff;
  border-radius:2px;
  transition: all .3s;

}
.fixed-header+.app-main {
  padding-top: 74px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>

<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ message }} </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            message: '数据统计页'
        }
    },
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>

<template>
  <div class="page-rank">
      <!-- 头部 -->
    <normal-header title="排行榜"></normal-header>
  </div>
</template>

<script>
import NormalHeader from '@/components/NormalHeader'
export default {
  name: 'Rank',
  components: {
    NormalHeader
  }
}
</script>
<style lang="scss" scoped>
.page-rank {
  display: flex;
  flex-direction: column;
  height: 100%;

  .rank-main {
    flex: 1;
    overflow-y: auto;
  }
}
</style>

<template>
  <div class="page-comic">
    <!-- 头部 -->
    <normal-header title="完结"></normal-header>
  </div>
</template>

<script>
import NormalHeader from '@/components/NormalHeader'

export default {
  name: 'Comic',
  components: {
    NormalHeader
  }
}
</script>

<style lang="scss" scoped>
.page-comic {
  display: flex;
  flex-direction: column;
  height: 100%;

  .comic-main {
    flex: 1;
    overflow-y: auto;
  }

}
</style>

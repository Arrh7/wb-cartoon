<template>
  <div class="page-cate">
      <normal-header title="分类"></normal-header>
  </div>
</template>

<script>
import NormalHeader from '@/components/NormalHeader'
export default {
  name: 'Cate',
  components: {
    NormalHeader
  }
}
</script>
<style lang="scss" scoped>
.page-cate {
  display: flex;
  flex-direction: column;
  height: 100%;

  .cate-main {
    flex: 1;
    overflow-y: auto;
  }

}
</style>

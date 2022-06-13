<template>
    <page-head></page-head>
    <main class="container">
        <router-view></router-view>
    </main>
    <page-foot></page-foot>
</template>

<script>
import PageHead from '../components/PageHead.vue'
import PageFoot from '../components/PageFoot.vue'
export default {
  components: { PageHead, PageFoot },

}
</script>

<style>
</style>
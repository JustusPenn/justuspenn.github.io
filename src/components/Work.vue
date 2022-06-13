<template>
    <div class="project">
        <img :src="source" :alt="title" class="img-fluid">
        <span class="service">{{ service }}</span>
        <h6>{{ title }}</h6>
    </div>
</template>

<script>
export default {
    props: {
        work: {
            title: String,
            img: String,
            service: String
        }
    },
    data() {
        return {
            title: this.work.title,
            source: this.work.img,
            service: this.work.service
        }
    },
}
</script>

<style>

</style>
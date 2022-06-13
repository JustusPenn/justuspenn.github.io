<template>
    <div class="skill">
        <div class="inner">
            <img :src="source" :alt="name">
            <span class="rate">{{ rate }}%</span>
        </div>
        <h6>{{ name }}</h6>
    </div>
</template>

<script>
export default {
    props: {
        skill:{
            name: String,
            image: String,
            rate: Number,
        }
    },

    data() {
        return {
            name: this.skill.name,
            source: this.skill.image,
            rate: this.skill.rate  
        }
    },

}
</script>

<style>

</style>
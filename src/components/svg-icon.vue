<template>
    <img class="icon" v-bind:src="path">
</template>

<script setup lang="ts">
const props = defineProps({
    path: String,
})
</script>

<style scoped>
.icon {
    height: 20px;
    width: 20px;
    vertical-align: bottom;
}
</style>

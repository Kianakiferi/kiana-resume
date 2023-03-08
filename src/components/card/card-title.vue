<template>
    <div class="px-4-l py-1 text-title border-bottom">
        <slot ></slot>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.text-title {
    font-weight: 700;
    font-size: 1.375rem;
}
.border-bottom{
    border-bottom: 2px solid var(--color-border-0);
}
</style>

<template>
    <div class="card mb-4l">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.card {
    border: 2px solid var(--color-border-0);
    border-radius: 8px;
    min-height: 5rem;
}
.mb-4l{
    margin-bottom: 2.25rem;
}
</style>

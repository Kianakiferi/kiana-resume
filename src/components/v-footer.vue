<template>
    <div class="d-flex justify-content-between">
        <span class="ms-2-l">
            <svg-icon path="/images/web.svg" alt="Web Site icon"/>
            <a class="text-mute-1 link-decoration-none ms-1-l" href="https://github.com/Kianakiferi">
                {{ props.data.link }}
            </a>
        </span>
        <span class="text-mute-0">
            {{ props.data.version }}
        </span>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    data: {
        link: String,
        version: String
    }
}>()


</script>

<style scoped>
.ms-1-l {
    margin-left: 0.5rem;
}
.ms-2-l {
    margin-left: 0.625rem;
}
.link-decoration-none {
    text-decoration-line: none;
}
</style>

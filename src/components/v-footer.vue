<template>
    <div class="d-flex justify-content-between">
        <span class="ms-2-l">
            <svg-icon name="web" alt="Web Site icon" />
            <a class="text-mute-1 print-light-1 link-decoration-none ms-1-l" href="https://github.com/Kianakiferi">
                {{ props.data.link }}
            </a>
        </span>
        <span class="text-mute-0 print-light-0">
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

@media print {
    .print-light-0 {
        color: transparent;
        text-shadow: 0 0 0 var(--color-border-0);
        -webkit-print-color-adjust: exact;
    }
    .print-light-1 {
        color: transparent;
        text-shadow: 0 0 0 var(--color-border-2);
        -webkit-print-color-adjust: exact;
    }
}
</style>

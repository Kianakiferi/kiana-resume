<template>
    <svg class="svg-icon" aria-hidden="true">
        <use :xlink:href="symbolId"/>
    </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    prefix: {
        type: String,
        default: 'icon'
    },
    name: {
        type: String,
        required: true
    },
    size: {
        type: String,
        default: '20px'
    }
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`)

</script>

<style scoped>
.svg-icon {
    height: 20px;
    width: 20px;
    vertical-align: bottom;
    fill: var(--color-background-0);
}

@media print {
    .svg-icon {
        /*fill: var(--color-foreground);*/
    }
}
</style>

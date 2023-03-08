<template>
    <h4 class="text-bold-1 text-subtitle">
        {{ data.title }}
    </h4>
    <div class="line-height-2">
        {{ data.functions }}
        <br/>
        {{ data.technique }}
    </div>
    <slot></slot>
</template>

<script setup lang="ts">
import type { Program } from '@/models/program';
import type { PropType } from 'vue';

const props = defineProps({
    data: {
        type: Object as PropType<Program>,
        require: true,
        default() {
            return {
                undefined
            }
        }
    }
})
</script>

<style scoped>
.text-subtitle {
    font-size: 1.125rem;
}
</style>

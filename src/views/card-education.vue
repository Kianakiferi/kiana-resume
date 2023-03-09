<template>
    <card>
        <card-title>
            {{ `${props.data.title}` }}
        </card-title>
        <p class="my-3 px-4-l d-flex justify-content-between">
            <span>
                <span class="text-bold-1">{{ `${props.data.school}` }}</span>
                <span class="mx-3">{{ `${props.data.degree}` }}</span>
                <span>{{ `${props.data.major}` }}</span>
            </span>
            <span> {{ `${props.data.date}` }}</span>
        </p>
    </card>
</template>

<script setup lang="ts">
import type { Education } from '@models/Education';

const props = defineProps<{
    data: Education
}>()
</script>

<style scoped></style>

<template>
    <card>
        <card-title>
            {{ $t("projects.title") }}
        </card-title>
        <ul class="px-4-l my-3">
            <li class="list-style-none" v-for="(item, index) in props.data.programs">
                <program-item :data="item">
                    <separator class="" v-if="index != props.data.programsCount - 1" />
                </program-item>
            </li>
        </ul>
    </card>
</template>

<script setup lang="ts">
import type { Projects } from '@models/Projects'

const props = defineProps<{
    data: Projects
}>()

</script>

<style scoped></style>

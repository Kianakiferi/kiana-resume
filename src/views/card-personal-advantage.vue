<template>
    <card>
        <card-title>
            {{ $t("personal-advantage.title") }}
        </card-title>
        <p class="font-size-s px-4-l py-2-l mb-1">
            {{ $t("personal-advantage.summary") }}
        <ul class="m-0 ps-0 font-size-0">
            <list-item v-for="item in props.data.skills">
                {{ item }}
            </list-item>
        </ul>
        </p>
    </card>
</template>

<script setup lang="ts">
import type { PersonalAdvantage } from '@/models/PersonalAdvantage';

const props = defineProps<{
    data: PersonalAdvantage
}>()

</script>

<style scoped>
.px-4-5 {
    padding-left: 2.25rem;
    padding-right: 2.25rem;
}
</style>

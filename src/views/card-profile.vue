<template>
    <card ref="profileCard" class="outline-l text-light">
        <div class="background-banner gradient" :style="{ height: cardSize.height + 'px', width: cardSize.width + 'px' }"></div>
        <div class="p-4-l d-flex justify-content-between">
            <div class="z-8">
                <h2 class="text-bold-1">{{ props.data.name }}</h2>
                <p class="mb-1">{{ props.data.info }}</p>
                <p class="mb-4">
                    <span class="me-3">
                        <svg-icon class="me-1" path="/images/phone.svg" alt="Phone icon" />
                        {{ props.data.phoneNumber }}
                    </span>
                    <span>
                        <svg-icon class="me-1" path="/images/email.svg" alt="EMail icon" />
                        {{ props.data.email }}
                    </span>
                </p>
                <p class="mb-0">
                    {{ `${props.data.jobIntent.title}${props.data.jobIntent.target}`}}
                    <br />
                    {{ `${props.data.expectSalary.title}${props.data.expectSalary.target}` }}
                </p>
            </div>
            <div class="z-8">
                <img class="img-profile round-circle" src="images/profile.png" alt="User's photo">
            </div>
        </div>
    </card>
</template>

<script setup lang="ts">
import { nextTick, reactive, ref } from 'vue';
import type { Profile } from '@models/Profile';

const props = defineProps<{
    data: Profile
}>()

const profileCard = ref();
const cardSize = reactive({
    height: 0,
    width: 0
})

nextTick(() => {
    //console.log("Height:", profile.value.$el.clientHeight, "Width:", profile.value.$el.clientWidth,);

    cardSize.height = profileCard.value.$el.clientHeight;
    cardSize.width = profileCard.value.$el.clientWidth;
})

</script>

<style scoped>
.outline-l {
    border: none;
    outline: 4px solid var(--color-border-1);
}

.z-8 {
    z-index: 8;
}

.background-banner {
    position: absolute;
    top: 3rem;
    height: inherit;
    border-radius: 8px;
    z-index: 1;
}

.gradient {
    background: var(--color-gradient);
}

.img-profile {
    height: 169.6px;
    width: 169.6px;
    background: var(--color-gradient-s);
    outline: 2px solid var(--color-border-transparent);
}

@media print {
    .img-profile {
        /*border-radius: 8px !important;*/
        /*background: none;*/
        outline: 2px solid var(--color-border-transparent);
    }

}

.round-circle {
    border-radius: 50%;
}
</style>

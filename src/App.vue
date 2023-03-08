<template>
    <div class="a4-paper p-5">
        <card-profile :data="profileStrings" />
        <card-personal-advantage :data="personalAdvantageStrings" />
        <card-education :data="educationStrings" />
        <card-projects :data="projectStrings" />
        <v-footer :data="footerStrings" />
    </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import type { Profile } from '@models/Profile';
import type { PersonalAdvantage } from '@models/PersonalAdvantage';
import type { Education } from '@models/Education';
import type { Projects } from '@models/Projects';
import type { Program } from '@models/Program';

const i18n = useI18n();
document.title = i18n.t('title');

const profileStrings = getTranslatedProfileStrings();
const personalAdvantageStrings = getTranslatedPersonalAdvantageStrings();
const educationStrings = getTranslatedEducationStrings();
const projectStrings = getTranslatedProjectStrings();
const footerStrings = getTranslatedFooterStrings();

function getTranslatedProfileStrings(): Profile {
    let root = "profile";
    let result: Profile = {
        name: i18n.t(`${root}.name`),
        info: i18n.t(`${root}.info`),
        phoneNumber: i18n.t(`${root}.phone-number`),
        email: i18n.t(`${root}.email`),
        jobIntent: {
            title: i18n.t(`${root}.job-intent.title`),
            target: i18n.t(`${root}.job-intent.target`),
        },
        expectSalary: {
            title: i18n.t(`${root}.expect-salary.title`),
            target: i18n.t(`${root}.expect-salary.target`),
        }
    }

    return result;
}

function getTranslatedPersonalAdvantageStrings(): PersonalAdvantage {
    let root = "personal-advantage";

    let count = Number(i18n.t(`${root}.skills-count`));
    let skillsList: String[] = new Array(count);
    for (let i = 0; i < count; i++) {
        skillsList[i] = i18n.t(`${root}.skills[${i}]`)
    }

    let result: PersonalAdvantage = {
        title: i18n.t(`${root}.title`),
        summary: i18n.t(`${root}.summary`),
        skills: skillsList
    }

    return result;
}

function getTranslatedEducationStrings(): Education {
    let root = "education";

    let result: Education = {
        title: i18n.t(`${root}.title`),
        school: i18n.t(`${root}.school`),
        degree: i18n.t(`${root}.degree`),
        major: i18n.t(`${root}.major`),
        date: i18n.t(`${root}.date`),
    }

    return result;
}

function getTranslatedProjectStrings(): Projects {
    let root = "projects";

    let count = +i18n.t(`${root}.programs-count`);
    let programList: Program[] = new Array(count);
    for (let i = 0; i < count; i++) {
        let path = `${root}.programs[${i}]`;
        let item: Program = {
            title: useI18n().t(`${path}.title`),
            functions: useI18n().t(`${path}.functions`),
            technique: useI18n().t(`${path}.technique`),
        }
        programList[i] = item;
    }

    let result: Projects = {
        title: i18n.t(`${root}.title`),
        programsCount: count,
        programs: programList,
    }

    return result;
}
function getTranslatedFooterStrings() {
    let result = {
        link: i18n.t("link"),
        version: i18n.t("version")
    }

    return result;
}


</script>
  
<style scoped>
.a4-paper {
    margin-right: auto;
    margin-left: auto;
    width: 210mm;
    height: 297mm;
    /*box-shadow: 2px 2px var(--color-background-1);*/
    background-color: white;
    padding: 3rem;
}

@media print {
    .a4-paper {
        padding: none;
        box-shadow: none;
    }
}
</style>
  
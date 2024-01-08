<script lang="ts">
import Vue from 'vue';
import { MainHeader } from '@/widgets/Header';
import {
  SectionPreview,
  SectionSliders,
  SectionVideo,
  SectionAdaptogens,
  SectionComments,
} from '@/widgets/MainSections';
import { getCurrentLocale } from './i18n/utils';
import { setLanguage } from './i18n/hooks';

export default Vue.extend({
  components: {
    MainHeader,
    SectionPreview,
    SectionSliders,
    SectionVideo,
    SectionAdaptogens,
    SectionComments,
  },
  mounted() {
    const currentLocale = getCurrentLocale();
    setLanguage(currentLocale);
  },
});
</script>

<template>
  <v-app>
    <MainHeader />
    <v-main>
      <SectionPreview />
      <SectionSliders />
      <SectionVideo />
      <SectionAdaptogens />
      <SectionComments />
    </v-main>
  </v-app>
</template>

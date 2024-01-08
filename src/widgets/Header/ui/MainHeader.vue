<script lang="ts">
import { BaseContainer, BaseLogo } from '@/shared/ui';
import { LanguageSelector } from '@/features/LanguageSelector';

export default {
  name: 'MainHeader',
  components: {
    BaseContainer,
    BaseLogo,
    LanguageSelector,
  },
};
</script>

<template>
  <header class="header">
    <BaseContainer>
      <v-row justify="space-between" align="center" no-gutters>
        <v-col class="d-flex" cols="6">
          <BaseLogo />
        </v-col>
        <v-col class="d-flex justify-end" cols="6">
          <LanguageSelector />
        </v-col>
      </v-row>
    </BaseContainer>
  </header>
</template>

<style lang="scss" scoped>
@import 'src/app/assets/styles/variables.scss';

.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: $white;
  padding: toRem(12) 0;
  box-shadow: $box_shadow;
  z-index: $zIndex_50;
}
</style>

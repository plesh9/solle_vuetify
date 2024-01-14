<script lang="ts">
import Vue from 'vue';
import { BaseContainer, BaseLogo } from '@/shared/ui';
import { LanguageSelector } from '@/features/LanguageSelector';
import { LINK_TO_BOX } from '@/shared/lib';
import { useTranslation } from '@/app/i18n/hooks';

export default Vue.extend({
  name: 'MainHeader',
  components: {
    BaseContainer,
    BaseLogo,
    LanguageSelector,
  },
  data() {
    return {
      LINK_TO_BOX,
      t: useTranslation('Header'),
      isScrolled: false,
    };
  },
  methods: {
    handleScroll() {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 600) {
        this.isScrolled = true;
      } else if (scrolled <= 0) {
        this.isScrolled = false;
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
});
</script>

<template>
  <header :class="{ active: isScrolled }" class="header">
    <BaseContainer>
      <v-row justify="space-between" align="center" no-gutters>
        <div class="d-flex">
          <BaseLogo :variant="isScrolled ? 'base' : 'white'" />
        </div>
        <div class="d-flex justify-end">
          <div
            class="header__box"
            :style="{ color: isScrolled ? 'inherit' : 'white' }"
          >
            <a class="header__link" :href="LINK_TO_BOX"> {{ t('get_box') }} </a>
            <LanguageSelector />
          </div>
        </div>
      </v-row>
    </BaseContainer>
  </header>
</template>

<style lang="scss" scoped>
@import 'src/app/assets/styles/variables.scss';

.header {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  padding: toRem(14) 0;
  z-index: $zIndex_50;
  transition: all 0.4s ease;

  @media (max-width: $mobile) {
    padding: toRem(4) 0;
  }

  &.active {
    animation: slideIn 1s ease forwards;
    position: fixed;
    background-color: $white;
    box-shadow: $box_shadow;
  }

  @keyframes slideIn {
    0% {
      transform: translateY(-100%);
    }

    100% {
      transform: translateY(0);
    }
  }

  &__box {
    @include flexRow(center);
    column-gap: toRem(16);

    @media (max-width: $mobile) {
      column-gap: toRem(8);
    }
  }

  &__link {
    color: currentColor;
    @media (any-hover: hover) {
      &:hover {
        text-decoration: underline;
      }
    }

    @media (max-width: $mobile) {
      font-size: toRem(10);
    }
  }
}
</style>

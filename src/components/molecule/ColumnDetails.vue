<template>
  <div class="h-full flex flex-col items-start justify-center">
    <ColumnTitle />
    <ColumnDescription />
    <div class="flex flex-col lg:flex-row gap-2">
      <ButtonPrimary
        v-if="btn1.cta_enabled"
        class="w-full lg:w-fit"
        :text="btn1.cta_text"
        :link-to="btn1.cta_redirection"
      />
      <ButtonPrimary
        v-if="btn2.cta_enabled"
        class="w-full lg:w-fit"
        :text="btn2.cta_text"
        :link-to="btn2.cta_redirection"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { toRefs } from 'vue'
import ButtonPrimary from '../atom/button/ButtonPrimary.vue'
import ColumnTitle from '@/components/atom/text/ColumnTitle.vue'
import ColumnDescription from '../atom/text/ColumnDescription.vue'

export default {
  components: {
    ButtonPrimary,
    ColumnTitle,
    ColumnDescription
  },
  props: {
    cta1: {
      type: Object,
      default() {
        return {
          cta_enabled: true,
          cta_redirection: '#',
          cta_text: 'Button One'
        }
      }
    },
    cta2: {
      type: Object,
      default() {
        return {
          cta_enabled: true,
          cta_redirection: '#',
          cta_text: 'Button Two'
        }
      }
    }
  },
  setup(props: any) {
    const { cta1, cta2 } = toRefs(props)

    return {
      btn1: cta1,
      btn2: cta2
    }
  }
}
</script>
<style></style>

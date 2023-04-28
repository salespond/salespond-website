<template>
  <div>
    <div v-if="banner" class="three-column-section w-full">
      <div class="flex flex-col lg:flex-row lg:gap-x-10 gap-y-10 mb-10">
        <div v-for="(item, id) in items" :key="id" class="flex-1">
          <template v-if="item.imagePanel">
            <img
              class="rounded-full overflow-hidden w-full max-w-[152px] max-h-[152px] mb-[20px]"
              src="/public/assets/sales_chart.png"
            />
          </template>
          <h3 class="text-black font-bold mb-[20px]">
            {{ item.contentTitle }}
          </h3>

          <div class="text-neutral-2 apercu-light prose">
            <p class="text-gray-500">
              Uplift productivity and boost morale with friendly competitions to keep inside sales
              teams hitting their KPIs.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { toRefs } from 'vue'
import { parseSanityImage } from '@/js/composable/parseSanityImage'

export default {
  name: 'ThreeColumnImage',
  props: {
    bannerText: {
      type: String,
      default: 'Boost sales efficiency and empower your inside sales teams'
    },
    textHighlight: {
      type: String,
      default: 'empower'
    },
    description: {
      type: String,
      default: 'Sample description'
    },
    columnItems: {
      type: Array,
      default() {
        return [
          {
            cta_redirection: '#',
            cta_text: 'Book now',
            cta_enabled: true,
            contentTitle: 'Build excitement for selling using gamification features',
            contentText:
              'Uplift productivity and boost morale with friendly competitions to keep inside sales teams hitting their KPIs.',
            imagePanel: {
              _type: 'image',
              asset: {
                _ref: 'image-9ea3c0bf7e9edad8ab3a967bee6e3b4843a9c2d0-472x462-png',
                _type: 'reference'
              }
            }
          },
          {
            contentTitle: 'Build excitement for selling using gamification features',
            contentText:
              'Uplift productivity and boost morale with friendly competitions to keep inside sales teams hitting their KPIs.',
            imagePanel: {
              _type: 'image',
              asset: {
                _ref: 'image-9ea3c0bf7e9edad8ab3a967bee6e3b4843a9c2d0-472x462-png',
                _type: 'reference'
              }
            }
          },
          {
            contentTitle: 'Build excitement for selling using gamification features',
            contentText:
              'Uplift productivity and boost morale with friendly competitions to keep inside sales teams hitting their KPIs.',
            imagePanel: {
              _type: 'image',
              asset: {
                _ref: 'image-9ea3c0bf7e9edad8ab3a967bee6e3b4843a9c2d0-472x462-png',
                _type: 'reference'
              }
            }
          }
        ]
      }
    },
    columnType: {
      type: String,
      default: 'normal'
    }
  },
  async setup(props: any) {
    const { description, bannerText, textHighlight, columnItems, columnType } = toRefs(props)

    const isSimple = columnType.value === 'simple'

    return {
      desc: description,
      banner: bannerText,
      highlight: textHighlight,
      items: columnItems,
      parseSanityImage,
      isSimple
    }
  }
}
</script>

<style scoped>
.three-column-section {
  width: 100%;
}

@media only screen and (min-width: 1440px) {
  .three-column-section {
    /* max-width: 1130px; */
    max-width: 1400px;
    margin: 0 auto;
    /* padding: 60px 100px; */
  }
}
</style>

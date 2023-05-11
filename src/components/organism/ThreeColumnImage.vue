<template>
  <div>
    <div v-if="items.length >= 1" class="three-column-section w-full">
      <div class="flex flex-col lg:flex-row lg:gap-x-10 gap-y-10 mb-10">
        <div v-for="(item, id) in items" :key="id" class="flex-1">
          <template v-if="item.value.image_panel">
            <img
              class="rounded-full overflow-hidden w-full max-w-[152px] max-h-[152px] mb-[20px]"
              :src="parseSanityImage(item.value.image_panel).url()"
              width="640"
              height="360"
            />
          </template>
          <h3 class="text-black font-bold mb-[20px]">
            {{ item.value.contentTitle }}
          </h3>

          <div
            class="text-neutral-2 apercu-light prose"
            v-html="toHTML(item.value.contentText)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import * as _ from 'lodash'
import { toRefs } from 'vue'
import { toHTML } from '@portabletext/to-html'
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
      type: Array<any>,
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
      isSimple,
      toHTML,
      get: _
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

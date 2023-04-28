<template>
  <div v-if="banner" v-motion-slide-visible-once-bottom>
    <heading-with-highlights class="mb-[60px]" :text="banner" :highlight="highlight" />
    <div class="two-column flex flex-col md:flex-row md:gap-x-[30px]">
      <div v-for="(item, id) in items" :key="id" class="md:flex-1">
        <div class="short-border bg-primary-1"></div>
        <h3 class="text-black apercu-medium mb-[20px]">
          {{ item.twoColumnContentTitle }}
        </h3>

        <template v-if="item.twoColumnContentText">
          <p class="text-neutral-2 apercu-light prose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A doloribus numquam praesentium
            minima cupiditate deserunt cum ut in temporibus. Earum, esse soluta. Ducimus similique
            quo ipsa quasi exercitationem. Cumque, voluptatem.
          </p>
        </template>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { toRefs } from 'vue'
import { toHTML } from '@portabletext/to-html'
import HeadingWithHighlights from '@/components/atom/text/HeadingWithHighlights.vue'

export default {
  name: 'TwoColumn',
  components: {
    HeadingWithHighlights
  },
  props: {
    bannerText: {
      type: String,
      default: 'Two column'
    },
    textHighlight: {
      type: String,
      default: 'column'
    },
    columnItems: {
      type: Object,
      default() {
        return {
          twoColumnSection1: {
            twoColumnContentText: [
              {
                _key: '4828abe2680d',
                _type: 'block',
                children: [
                  {
                    _key: '19c1c0a198f80',
                    _type: 'span',
                    marks: [],
                    text: 'Podiem exists to provide salespeople an all in one platform to track pipeline, reduce the time spent prospecting, and book meetings at scale. Podiem is the only assisted power dialer on the market to cover the globe and guarantee conversations. Our platform includes gamification, orchestration, assisted dialing, scheduling, and reporting.'
                  }
                ],
                markDefs: [],
                style: 'normal'
              }
            ],
            twoColumnContentTitle: 'Our purpose'
          },
          twoColumnSection2: {
            twoColumnContentText: [
              {
                _key: '4828abe2680d',
                _type: 'block',
                children: [
                  {
                    _key: '19c1c0a198f80',
                    _type: 'span',
                    marks: [],
                    text: 'Podiem exists to provide salespeople an all in one platform to track pipeline, reduce the time spent prospecting, and book meetings at scale. Podiem is the only assisted power dialer on the market to cover the globe and guarantee conversations. Our platform includes gamification, orchestration, assisted dialing, scheduling, and reporting.'
                  }
                ],
                markDefs: [],
                style: 'normal'
              }
            ],
            twoColumnContentTitle: 'Our mission'
          }
        }
      }
    }
  },
  setup(props: any) {
    const { bannerText, textHighlight, columnItems } = toRefs(props)

    return {
      banner: bannerText,
      highlight: textHighlight,
      items: columnItems,
      toHTML
    }
  }
}
</script>
<style lang=""></style>

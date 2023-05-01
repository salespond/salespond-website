<template>
  <div class="page-content">
    <section class="hero-banner-light flex items-center">
      <div class="s-container">
        <SubPageHeroBanner />
      </div>
    </section>

    <section class="article bg-white py-[50px] lg:py-[100px]">
      <div class="xs-container">
        <div class="prose">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, possimus?</p>
        </div>
      </div>
    </section>

    <section class="bg-gray-100 py-[50px] lg:py-[100px]">
      <div class="s-container">
        <div class="blog-result">
          <h2 class="text-3xl font-bold mb-[80px]">More Articles</h2>
          <div
            class="grid grid-cols-1 gap-y-[30px] lg:grid-cols-3 sxl:grid-cols-4 gap-x-[30px] md:gap-y-[30px]"
          >
            <div
              v-for="i in 3"
              :key="i"
              class="bg-white rounded-3xl p-[40px] shadow-lg hover:shadow-2xl transition-all duration-100 border border-gray-100"
            >
              <div class="image w-full mb-[20px]">
                <img src="/public/assets/callout.png" class="w-full" />
              </div>
              <div class="content mb-[25px]">
                <p class="text-primary text-sm mb-[15px] leading-none">3 mins</p>
                <div class="max-h-[70px] overflow-hidden mb-[15px] min-h-[60px]">
                  <p class="text-lg text-gray-700">
                    Compelling blog article headline with an 85 max character count ...
                  </p>
                </div>
              </div>

              <div>
                <button
                  class="border border-primary rounded-full text-primary hover:text-white hover:bg-primary py-2 px-[25px] text-[16px]"
                >
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import SubPageHeroBanner from '@/components/organism/SubPageHeroBanner.vue'

export default {
  components: {
    SubPageHeroBanner
  },
  setup() {
    const route = useRoute()

    const paramId = computed(() => route.params.id)
  }
}
</script>
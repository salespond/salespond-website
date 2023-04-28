<template>
  <div class="page-content">
    <section class="hero-banner-light flex items-center">
      <div class="s-container">
        <SubPageHeroBanner />
      </div>
    </section>

    <section class="bg-gray-100">
      <div class="callout-container py-[50px] lg:py-[80px]">
        <CalloutBlock />
      </div>
    </section>

    <section class="w-full bg-gray-100 py-[100px]">
      <div class="s-container relative">
        <div class="blog-nav grid grid-cols-1 lg:grid-cols-2 gap-4 h-[48px] mb-[80px]">
          <div
            class="flex flex-row justify-between lg:justify-start lg:space-x-[45px] items-center"
          >
            <div
              class="px-1 transition-all duration-100 cursor-pointer border-b-4 border-gray-100 hover:border-primary"
            >
              All
            </div>
            <div
              class="px-1 transition-all duration-100 cursor-pointer border-b-4 border-gray-100 hover:border-primary"
            >
              Tutorial
            </div>
            <div
              class="px-1 transition-all duration-100 cursor-pointer border-b-4 border-gray-100 hover:border-primary"
            >
              News
            </div>
            <div
              class="px-1 transition-all duration-100 cursor-pointer border-b-4 border-gray-100 hover:border-primary"
            >
              Tips
            </div>
            <div
              class="px-1 transition-all duration-100 cursor-pointer border-b-4 border-gray-100 hover:border-primary"
            >
              Resources
            </div>
          </div>

          <div class="flex flex-row">
            <input
              class="w-full lg:w-1/2 lg:ml-auto h-[43px] px-5 bg-gray-300 rounded-full"
              type="text"
              placeholder="Search articles"
            />
          </div>
        </div>

        <div class="blog-result">
          <div
            class="grid grid-cols-1 gap-y-[30px] lg:grid-cols-3 sxl:grid-cols-4 gap-x-[30px] md:gap-y-[30px]"
          >
            <div
              v-for="i in 12"
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
import SubPageHeroBanner from '@/components/organism/SubPageHeroBanner.vue'
import CalloutBlock from '@/components/organism/CalloutBlock.vue'

export default {
  components: {
    CalloutBlock,
    SubPageHeroBanner
  }
}
</script>

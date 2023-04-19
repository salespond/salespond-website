<template>
  <div class="page-content">
    <section class="hero-banner-light flex items-center">
      <div class="s-container">
        <SubPageHeroBanner />
      </div>
    </section>

    <section class="bg-template-gradient flex items-center">
      <div class="s-container">
        <div class="grid grid-cols-1 text-white lg:items-center py-[50px] lg:py-[120px]">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-x-[100px] lg:mb-[50px]">
            <div class="mb-[30px]">
              <h2 class="text-primary font-bold text-5xl mb-[30px]">
                Channel / Partner Activities
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div></div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-x-[100px]">
            <div class="rounded-xl overflow-hidden w-full">
              <img src="/public/assets/phone.jpg" alt="Salespond" />
            </div>

            <div class="flex flex-col gap-5">
              <hr class="border-b-[5px] border-primary w-[50px]" />
              <h2 class="text-3xl font-bold">WHAT TO DO?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa non et labore nam.
                Expedita sequi obcaecati sed recusandae commodi voluptas!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa non et labore nam.
                Expedita sequi obcaecati sed recusandae commodi voluptas!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa non et labore nam.
                Expedita sequi obcaecati sed recusandae commodi voluptas!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-template-light flex items-center">
      <div class="s-container">
        <div class="grid grid-cols-1 lg:items-center py-[50px] lg:py-[120px]">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-x-[100px] lg:mb-[50px]">
            <div class="mb-[30px]">
              <h2 class="text-primary font-bold text-5xl mb-[30px]">
                Channel / Partner Activities
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div></div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-x-[100px]">
            <div class="rounded-xl overflow-hidden w-full">
              <img src="/public/assets/phone.jpg" alt="Salespond" />
            </div>

            <div class="flex flex-col gap-5 order-first">
              <hr class="border-b-[5px] border-primary w-[50px]" />
              <h2 class="text-3xl font-bold">WHAT TO DO?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa non et labore nam.
                Expedita sequi obcaecati sed recusandae commodi voluptas!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa non et labore nam.
                Expedita sequi obcaecati sed recusandae commodi voluptas!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa non et labore nam.
                Expedita sequi obcaecati sed recusandae commodi voluptas!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gray-100">
      <div class="s-container py-[50px] lg:py-[80px]">
        <ContactSection />
      </div>
    </section>

    <section class="bg-gray-100">
      <div class="callout-container py-[50px] lg:py-[80px]">
        <CalloutBlock />
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import CalloutBlock from '@/components/organism/CalloutBlock.vue'
import ContactSection from '@/components/organism/ContactSection.vue'
import SubPageHeroBanner from '@/components/organism/SubPageHeroBanner.vue'

import SalesAcceleration from '@/core/application/SalesAcceleration'

export default {
  components: {
    SubPageHeroBanner,
    CalloutBlock,
    ContactSection
  },
  setup() {
    const salesAcceleration = new SalesAcceleration()
    salesAcceleration.getAllData().then((data: any) => {
      console.info(data)
    })
  }
}
</script>

<template>
  <div class="page-content">
    <section class="hero-banner flex items-center">
      <div class="s-container">
        <HeroBanner/>
      </div>
    </section>

    <section class="min-h-screen bg-gray-100 ">
      <div class="xs-container min-h-screen py-[50px] grid grid-cols-1 lg:grid-cols-2 items-center justify-center">
        <div class="h-full flex items-center justify-center">
          <img src="/public/assets/CISO-seal.png" class="w-[300px]" alt="Salespond CISO Seal">
        </div>
        <div class="">
          <p class="text-primary font-bold">Contact Us</p>
          <h1 class="text-6xl font-bold leading-none">SalesPond is proud to be the first sales company world-wide to have become CISO certified</h1>
          <p class="text-gray-500">Get in touch today to see why some of the world’s leading companies trust us to deliver reliable and professional results.</p>
        </div>
      </div>
    </section>

    <section class="bg-white">
      <div class="s-container">
        <div class="h-full py-[50px] lg:py-[120px]">
          <div class="mb-[50px]">
            <p class="text-primary font-bold">About Us</p>
            <sub-heading-with-highlights text="Our Story" highlight="Story"/>
          </div>
          <div class="h-full grid grid-cols-1 lg:grid-cols-2 gap-[50px] items-start">
            <div >
              <hr class="mb-[20px] border-[3px] border-primary w-[50px]">
              <h2 class="text-2xl font-bold mb-[10px]">Our purpose</h2>
              <p class="text-gray-500 mb-[20px]">SalesPond is a Sales and Marketing Services Provider. With hubs across the globe and experienced local staff we can provide support for your Sales and Marketing teams through a range of offerings including marketing campaigns, Lead Generation and Sales Development Reps for hire.</p>
              <p class="text-gray-500">SalesPond is a Sales and Marketing Services Provider. With hubs across the globe and experienced local staff we can provide support for your Sales and Marketing teams through a range of offerings including marketing campaigns, Lead Generation and Sales Development Reps for hire.</p>
            </div> 
            <div>
              <hr class="mb-[20px] border-[3px] border-primary w-[50px]">
              <h2 class="text-2xl font-bold mb-[10px]">The SalesPond Group</h2>
              <p class="text-gray-500">SalesPond is a Sales and Marketing Services Provider. With hubs across the globe and experienced local staff we can provide support for your Sales and Marketing teams through a range of offerings including marketing campaigns, Lead Generation and Sales Development Reps for hire.</p>
            </div> 
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gray-100">
      <div class="s-container">
        <div class="h-full py-[50px] lg:py-[120px]">
          <div class="mb-[50px]">
            <p class="text-primary font-bold">Clients</p>
            <sub-heading-with-highlights text="We are proud to represent" highlight="proud to represent"/>
          </div>
          <div class="h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[50px] items-start">
            <div v-for="i in 16" :key="i" class="overflow-hidden">
              <img src="/public/assets/logo-cisco.png" class="w-full">
            </div>
          </div>
        </div>
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
import HeroBanner from '@/components/organism/HeroBanner.vue'
import SubHeadingWithHighlights from '@/components/atom/text/SubHeadingWIthHighlights.vue'

export default {
  components: {
    CalloutBlock,
    HeroBanner,
    SubHeadingWithHighlights
  }
}
</script>

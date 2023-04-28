<template>
  <div class="page-content">
    <section class="hero-banner-light bg-gray-100">
      <div class="s-container py-[50px] lg:py-[80px]">
        <ContactSection />
      </div>
    </section>

    <section class="bg-white py-[100px] xl:pt-[120px]">
      <div class="section-container">
        <suspense>
          <three-column-image />
        </suspense>
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
import ThreeColumnImage from '@/components/organism/ThreeColumnImage.vue'

export default {
  components: {
    CalloutBlock,
    ContactSection,
    ThreeColumnImage
  }
}
</script>

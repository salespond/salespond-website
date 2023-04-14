<script setup lang="ts">
import ButtonPrimary from '@/components/atom/button/ButtonPrimary.vue'
import HeadingWithHighlights from '@/components/atom/text/HeadingWithHighlights.vue'

</script>

<template>
  <div class="page-content">
    <section class="hero-banner flex items-center">
      <div class="s-container grid grid-cols-1 lg:grid-cols-2 lg:items-center">
        <div class="py-[80px]">
          <p class="text-sm text-primary font-bold">SALESPOND</p>
          <h1 class="text-5xl lg:text-7xl font-bold text-white pr-3 mb-2">Modern Sales and Marketing</h1>
          <p class="text-gray-500 mb-[20px]">Our best practice approach will maximise results by bridging the gap between marketing and sales.</p>

          <ButtonPrimary text="Request Demo" />
        </div>
        <img src="/public/assets/work-from-home.png" alt="">
      </div>
    </section>

    <section class="bg-gray-100">
      <div class="s-container min-h-screen grid grid-cols-1 lg:grid-cols-2 lg:gap-[50px] items-center justify-center relative">
        <div class="w-full rounded-lg overflow-hidden mb-[50px]">
          <img src="/public/assets/sales1.jpg" alt="Sales chart" >
        </div>
        <div class=" h-full flex flex-col items-start justify-center">
          <h1 class="text-6xl lg:text-7xl font-bold text-primary pr-3 mb-2">Sales & Marketing</h1>
          <p class="text-gray-500 mb-[20px]">Our best practice approach will maximise results by bridging the gap between marketing and sales.</p>

          <div class="flex flex-col lg:flex-row gap-2">
            <ButtonPrimary class="w-full lg:w-fit" text="Sales Acceleration" />
            <ButtonPrimary class="w-full lg:w-fit" text="Marketing" />
          </div>
        </div>
      </div>
    </section>

    <section class="bg-template-gradient">
      <div class="s-container py-[50px] flex flex-col gap-y-[50px]">
        <div class="min-h-screen grid grid-cols-1 lg:grid-cols-2 lg:gap-[50px] items-center justify-center">
          <img src="/public/assets/channel.png" alt="Salespond fish" class="opacity-50 mb-[30px]">
          <div>
            <h2 class="text-6xl lg:text-7xl font-bold text-primary pr-3 mb-2">Channel</h2>
            <p class="text-gray-300 mb-[20px]">If your business sells via partners or the channel, SalesPond has many years of assisting to drive meaningful conversations and pipeline into your target market. If you need more partners, we can help there too.</p>
            <ButtonPrimary text="Go to Page" />
          </div>
        </div>
        <div class="min-h-screen grid grid-cols-1 lg:grid-cols-2 lg:gap-[50px] items-center justify-center">
          <img src="/public/assets/marketing.png" alt="Salespond fish" class="opacity-50 mb-[30px]">
          <div class="lg:order-first">
            <h2 class="text-6xl lg:text-7xl font-bold text-primary pr-3 mb-2">Training</h2>
            <p class="text-gray-300 mb-[20px]">Don’t waste valuable time and money trying to talk to the wrong audience. The most reliable data inthe world is custom-built for your target market.</p>
            <ButtonPrimary text="Go to Page" />
          </div>
          
        </div>
      </div>
    </section>

    <section class="bg-gray-100">
      <div class="s-container py-[50px]">
        <div class="grid grid-cols-1 lg:grid-cols-7 gap-6 lg:gap-[100px]">
          <div class="lg:col-span-4">
            <div class=" h-full flex flex-col items-start justify-center">
              <p class="text-sm text-primary font-bold">Contact Us</p>
              <h1 class="text-5xl lg:text-7xl font-bold text-black pr-3 mb-2">Keep in touch with us</h1>
              <p class="text-gray-500 mb-[20px]">Get in touch today to see why some of the world’s leading companies trust us to deliver reliable and professional results.</p>
            </div>
          </div>
          <div class="lg:col-span-3">
            <form class="bg-white px-[20px] lg:px-[30px] py-[50px] rounded-xl shadow-lg">
              <div class="flex flex-col gap-5 lg:flex-row mb-6">
                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="First name" required>
                <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Last name" required>
              </div>
              <div class="flex flex-col gap-5 lg:flex-row mb-6">
                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Email address" required>
              </div>
              <div class="flex flex-col gap-5 lg:flex-row mb-6">
                <input type="text" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Phone number" required>
                <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Company" required>
              </div>
              <div class="flex flex-col gap-5 lg:flex-row mb-6">
                <textarea rows="5" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg resize-none focus:ring-blue-500 focus:border-blue-500 p-2.5 w-full" placeholder="Message" required></textarea>
              </div>
              <div class="flex items-start mb-6">
                <div class="flex items-center h-5">
                  <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required>
                </div>
                <label for="remember" class="ml-2 text-sm font-medium text-gray-700 ">By checking this box, you are consenting to receive future communication from Podiem.</label>
              </div>
              <ButtonPrimary class="w-full mb-6" text="Submit" />

              <div>
                <p class="text-sm text-gray-400">By submitting your information to our website, you agree to the terms outlined in our <a href="#" class="text-primary underline">Privacy Policy.</a></p>
              </div>
            </form>

          </div>
        </div>
      </div>
    </section>

    <section class="bg-gray-100">
      <div class="callout-container py-[50px]">
        <div class="bg-white grid grid-cols-1 lg:grid-cols-2 lg:gap-[50px] items-center rounded-xl shadow-lg px-[30px] py-[60px] lg:p-[50px]">
          <div class="w-full text-center ">
            <img src="/public/assets/callout.png" alt="Salespond fish" class="w-full mb-[30px] lg:mb-0 lg:max-w-[450px] lg:mx-auto">
          </div>
          <div>
            <HeadingWithHighlights
              text="Sample Callout"
              highlight="Callout"
              text-location="home"
              class="font-bold text-black mb-[20px] "
            />
            <p class="text-gray-600 mb-[20px]">Don’t waste valuable time and money trying to talk to the wrong audience. The most reliable data inthe world is custom-built for your target market.</p>
            <ButtonPrimary text="Go to Page" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<template>
  <div class="bg-gray-100 py-[50px]">
    <!-- Footer -->
    <div class="s-container grid grid-cols-1 lg:grid-cols-7 mb-[50px]">
      <div class="lg:col-span-4">
        <div class="flex flex-col">
          <div
            class="flex flex-col gap-[20px] lg:flex-row lg:justify-between lg:pr-[50px] xl:pr-[100px]"
          >
            <dl>
              <dt>Salespond</dt>
              <dd><a href="#">FAQs</a></dd>
              <dd><a href="#">Pricing</a></dd>
            </dl>

            <dl>
              <dt>Company</dt>
              <dd><a href="#">About</a></dd>
              <dd><a href="#">Contact</a></dd>
            </dl>

            <dl>
              <dt>Follow Us</dt>
              <dd>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_126_2998)">
                    <path
                      d="M0 1.57575C0 0.705375 0.72325 0 1.61562 0H20.3844C21.2768 0 22 0.705375 22 1.57575V20.4242C22 21.2946 21.2768 22 20.3844 22H1.61562C0.72325 22 0 21.2946 0 20.4242V1.57575ZM6.79662 18.4167V8.48238H3.49525V18.4167H6.79662ZM5.14663 7.12525C6.2975 7.12525 7.01388 6.3635 7.01388 5.40925C6.99325 4.43437 6.29888 3.69325 5.16862 3.69325C4.03837 3.69325 3.3 4.43575 3.3 5.40925C3.3 6.3635 4.01638 7.12525 5.12463 7.12525H5.14663ZM11.8951 18.4167V12.8686C11.8951 12.5716 11.9171 12.2746 12.0051 12.0629C12.243 11.4703 12.7861 10.8556 13.6991 10.8556C14.894 10.8556 15.3711 11.7659 15.3711 13.1024V18.4167H18.6725V12.7188C18.6725 9.66625 17.0445 8.24725 14.872 8.24725C13.1202 8.24725 12.3351 9.20975 11.8951 9.88762V9.922H11.8731C11.8804 9.91052 11.8878 9.89906 11.8951 9.88762V8.48238H8.59513C8.63637 9.41463 8.59513 18.4167 8.59513 18.4167H11.8951Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_126_2998">
                      <rect width="22" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </dd>
            </dl>
          </div>
        </div>
      </div>

      <div class="lg:col-span-3 py-[30px] lg:py-0">
        <div class="mb-3">
          <div class="font-bold">Not quite ready for Salespond?</div>
          <p class="text-gray-500">
            Join our online community for free and hear about the latest news.
          </p>
        </div>

        <div class="relative">
          <input
            type="text"
            placeholder="Enter your email address"
            class="w-full h-[43px] px-5 bg-gray-300 rounded-full absolute top-0 left-0"
          />
          <ButtonPrimary class="absolute right-0" text="Subscribe" />
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="s-container lg:mt-[100px] grid grid-cols-1 lg:grid-cols-3">
      <div class="flex flex-row gap-4 mb-[20px]">
        <BrandIcon />
        <p class="text-gray-500">
          Join our online community for free and hear about the latest news.
        </p>
      </div>

      <dl class="flex flex-col gap-4 lg:flex-row lg:col-span-2 lg:ml-auto">
        <dd><a class="underline text-gray-500 text-sm" href="#">Terms of Use</a></dd>
        <dd><a class="underline text-gray-500 text-sm" href="#">Privacy Policy</a></dd>
        <dd><a class="underline text-gray-500 text-sm" href="#">Cookies</a></dd>
        <dd class="text-gray-500 text-sm">Copyright @ 2023 Salespond. All rights reserved.</dd>
      </dl>
    </div>
  </div>
</template>

<script lang="ts">
import BrandIcon from '../icon/BrandIcon.vue'
import ButtonPrimary from '../atom/button/ButtonPrimary.vue'

export default {
  components: {
    BrandIcon,
    ButtonPrimary
  }
}
</script>

<style scoped>
dl dt {
  font-weight: 600;
}

dl dd {
  line-height: 25px;
}
</style>

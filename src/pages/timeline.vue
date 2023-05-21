<script lang="ts">
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
  methods: {
    setBackgroundImage(event: MouseEvent): void {
      const imageElement = event.target as HTMLImageElement;
      const backgroundImage = `url(${imageElement.src})`;
      const appContainer = document.querySelector("#timeline") as HTMLElement;
      appContainer.style.backgroundImage = backgroundImage;
    },
    clearBackgroundImage(): void {
      const appContainer = document.querySelector("#timeline") as HTMLElement;
      appContainer.style.backgroundImage = "";
    },
  },
};
</script>

<template>
  <div id="timeline" class="container mx-auto w-full h-full">
    <div class="relative wrap overflow-hidden py-10 h-full">
      <div class="border-2-2 absolute border-opacity-20 border-base-200 h-full border" style="left: 50%" />
      <!-- right timeline -->
      <div class="mb-8 flex items-center w-full transform transition hover:-translate-y-2 right-timeline">
        <div class="order-1 w-5/12" />
        <div class="z-20 flex items-center order-1 bg-primary shadow-xl w-8 h-8 justify-center rounded-full">
          <!-- TODO 图标自定义 -->
          <Icon icon="streamline-emojis:baby-bottle" />
        </div>
        <div class="order-1 w-12 h-1 bg-primary z-0" />
        <div class="order-1 bg-primary rounded-lg shadow-xl w-5/12 px-6 py-4">
          <img class="w-full h-full rounded-md" src="../assets/image/bg.jpg" alt="background image">
          <h3 class="my-3 font-bold text-primary-content text-xl">
            <!-- TODO Date -->
            2022年11月15日
          </h3>
          <p class="text-sm leading-snug tracking-wide text-primary-content text-opacity-100">
            <!-- TODO Description -->
            百天照
          </p>
        </div>
      </div>

      <!-- left timeline -->
      <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
        <div class="order-1 w-5/12" />
        <div class="z-20 flex items-center order-1 bg-secondary shadow-xl w-8 h-8 justify-center rounded-full">
          <!-- TODO 图标自定义 -->
          <Icon icon="streamline-emojis:baby-angel-1" />
        </div>
        <div class="order-1 bg-secondary rounded-lg shadow-xl w-5/12 px-6 py-4">
          <img class="w-full h-full rounded-md" src="../assets/image/0001.jpg" alt="background image">
          <h3 class="my-3 font-bold text-secondary-content text-xl">
            <!-- TODO Date -->
            2022年11月15日
          </h3>
          <p class="text-sm leading-snug tracking-wide text-secondary-content text-opacity-100">
            <!-- TODO Description -->
            百天照
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

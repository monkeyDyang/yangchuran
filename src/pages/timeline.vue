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
      <!-- right timeline -->
      <div class="relative pb-8 flex items-center w-full right-timeline">
        <!-- center vertical line:  -->
        <div class="absolute left-1/2 h-full border-l-2 border-right border-primary" />
        <!-- icon -->
        <div class="absolute  w-8 h-8 -ml-4 order-1 z-20 flex items-center bg-primary shadow-xl justify-center rounded-full left-1/2">
          <Icon icon="streamline-emojis:baby-bottle" />
        </div>
        <!-- horizontal line -->
        <div class="relative left-1/2 w-24 h-1 bg-primary z-0" />
        <!-- card -->
        <div class="relative left-1/2 card w-96 bg-primary shadow-xl">
          <!-- image -->
          <figure><img src="../assets/image/bg.jpg"></figure>
          <!-- content -->
          <div class="card-body">
            <h2 class="card-title">
              2022年11月15日
              <div class="badge badge-base">
                NEW
              </div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>

      <!-- left timeline -->
      <div class="flex-row-reverse relative pb-8 flex items-center w-full left-timeline">
        <!-- center vertical line:  -->
        <div class="absolute left-1/2 h-full border-l-2 border-right border-secondary" />
        <!-- icon -->
        <div class="absolute  w-8 h-8 -ml-4 order-1 z-20 flex items-center bg-secondary shadow-xl justify-center rounded-full left-1/2">
          <Icon icon="streamline-emojis:baby-1" />
        </div>
        <!-- horizontal line -->
        <div class="relative right-1/2 w-24 h-1 bg-secondary z-0" />
        <!-- card -->
        <div class="relative right-1/2 card w-96 bg-secondary shadow-xl">
          <!-- image -->
          <figure><img src="../assets/image/0001.jpg"></figure>
          <!-- content -->
          <div class="card-body">
            <h2 class="card-title">
              2022年12月15日
              <div class="badge badge-base">
                NEW
              </div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script lang="ts">
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
};
</script>

<template>
  <div class="container mx-auto w-full h-full">
    <div class="relative overflow-hidden py-10 h-full">
      <!-- Right timeline -->
      <div class="relative pb-8 flex items-center w-full timeline timeline-right">
        <!-- Center vertical line -->
        <div class="absolute left-1/2 h-full border-l-2 border-right border-primary" />
        <!-- Icon -->
        <div class="absolute w-8 h-8 -ml-4 order-1 z-20 flex items-center bg-primary shadow-xl justify-center rounded-full left-1/2" aria-label="baby-bottle">
          <Icon icon="streamline-emojis:baby-bottle" />
        </div>
        <!-- Horizontal line -->
        <div class="relative left-1/2 w-24 h-1 bg-primary z-0" />
        <!-- Card -->
        <div class="relative left-1/2 card w-96 bg-primary shadow-xl">
          <!-- Image -->
          <figure>
            <img src="../assets/image/bg.jpg" alt="Background image">
          </figure>
          <!-- Content -->
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

      <!-- Left timeline -->
      <div class="flex-row-reverse relative pb-8 flex items-center w-full timeline timeline-left">
        <!-- Center vertical line -->
        <div class="absolute left-1/2 h-full border-l-2 border-right border-secondary" />
        <!-- Icon -->
        <div class="absolute w-8 h-8 -ml-4 order-1 z-20 flex items-center bg-secondary shadow-xl justify-center rounded-full left-1/2" aria-label="baby-1">
          <Icon icon="streamline-emojis:baby-1" />
        </div>
        <!-- Horizontal line -->
        <div class="relative right-1/2 w-24 h-1 bg-secondary z-0" />
        <!-- Card -->
        <div class="relative right-1/2 card w-96 bg-secondary shadow-xl">
          <!-- Image -->
          <figure>
            <img src="../assets/image/0001.jpg" alt="Image 0001">
          </figure>
          <!-- Content -->
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

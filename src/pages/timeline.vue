<script lang="ts">
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
  data() {
    return {
      // 时间轴展示对象
      timelineData: [
        {
          id: 1,
          icon: "streamline-emojis:baby-bottle",
          image: {
            name: "0001.jpg",
            url: "../src/assets/image/0001.jpg",
          },
          date: "2022年11月15日",
          description: "出生第 1 天",
        },
        {
          id: 2,
          icon: "streamline-emojis:baby-1",
          image: {
            name: "0002.jpg",
            url: "../src/assets/image/0002.jpg",
          },
          date: "2022年12月15日",
          description: "出生第 30 天",
        },
        {
          id: 3,
          icon: "streamline-emojis:crown",
          image: {
            name: "bg.jpg",
            url: "../src/assets/image/bg.jpg",
          },
          date: "2023年1月15日",
          description: "出生第 60 天",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="container mx-auto w-full h-full">
    <div class="relative overflow-hidden py-10 h-full">
      <div v-for="item in timelineData" :key="item.id">
        <!-- Timeline -->
        <div class="relative pb-8 flex items-center w-full timeline" :class="item.id % 2 === 0 ? 'flex-row-reverse' : ''">
          <!-- Center vertical line -->
          <div class="absolute left-1/2 h-full border-l-2 border-right border-primary" />
          <!-- Icon -->
          <div
            class="absolute w-8 h-8 -ml-4 order-1 z-20 flex items-center shadow-xl justify-center rounded-full left-1/2 bg-primary"
          >
            <Icon :icon="item.icon" />
          </div>
          <!-- Horizontal line -->
          <div class="relative w-1/6 h-1 z-0 bg-primary" :class="item.id % 2 === 0 ? 'right-1/2' : 'left-1/2'" />
          <!-- Card -->
          <div class="relative card w-1/4 shadow-xl bg-primary" :class="item.id % 2 === 0 ? 'right-1/2' : 'left-1/2'">
            <!-- Image -->
            <figure>
              <img :src="item.image?.url" :alt="item.image?.name">
            </figure>
            <!-- description -->
            <div class="card-body">
              <h2 class="card-date">
                {{ item.date }}
              </h2>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

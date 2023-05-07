<template>
  <div class="timeline-container">
    <a-timeline mode="alternate">
      <a-timeline-item>
        <img
          class="timeline-image"
          src="../assets/image/bg.jpg"
          alt="background image"
          @mouseover="setBackgroundImage"
          @mouseout="clearBackgroundImage"
        />
        2022年11月15日
      </a-timeline-item>
      <a-timeline-item>
        <img
          class="timeline-image"
          src="../assets/image/0001.jpg"
          alt="background image"
          @mouseover="setBackgroundImage"
          @mouseout="clearBackgroundImage"
        />
        2022年12月15日
      </a-timeline-item>
      <a-timeline-item>
        <img
          class="timeline-image"
          src="../assets/image/0001.jpg"
          alt="background image"
          @mouseover="setBackgroundImage"
          @mouseout="clearBackgroundImage"
        />
        2022年12月15日
      </a-timeline-item>
      <a-timeline-item>
        <img
          class="timeline-image"
          src="../assets/image/0001.jpg"
          alt="background image"
          @mouseover="setBackgroundImage"
          @mouseout="clearBackgroundImage"
        />
        2022年12月15日
      </a-timeline-item>
    </a-timeline>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    setBackgroundImage(event: MouseEvent) {
      const target = event.target as HTMLImageElement;
      const backgroundImage = `url(${target.src})`;
      const timelineContainer = document.querySelector(".timeline-container") as HTMLElement;
      timelineContainer.style.backgroundImage = backgroundImage;
    },
    clearBackgroundImage() {
      const timelineContainer = document.querySelector(".timeline-container") as HTMLElement;
      timelineContainer.style.backgroundImage = "";
    },
  },
};
</script>

<style scoped>
.timeline-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5em 15em;
  opacity: 0.8;
}

.timeline-image {
  max-width: 100%;
  max-height: 100%;
}
</style>

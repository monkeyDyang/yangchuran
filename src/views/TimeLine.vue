<template>
  <div class="timeline-container">
    <!-- TODO 滑动时间轴时，将当前中间的时间轴节点对应的图片设置为背景图片-->
    <a-timeline mode="alternate">
      <a-timeline-item>
        <img class="timeline-image" src="../assets/image/bg.jpg" alt="background image" />
        2022年11月15日
      </a-timeline-item>
      <a-timeline-item>
        <img class="timeline-image" src="../assets/image/bg.jpg" alt="background image" />
        2022年12月15日
      </a-timeline-item>
      <a-timeline-item>
        <img class="timeline-image" src="../assets/image/bg.jpg" alt="background image" />
        2023年1月15日
      </a-timeline-item>
      <a-timeline-item>
        <img class="timeline-image" src="../assets/image/bg.jpg" alt="background image" />
        2023年2月15日
      </a-timeline-item>
      <a-timeline-item>
        <img class="timeline-image" src="../assets/image/bg.jpg" alt="background image" />
        2023年3月15日
      </a-timeline-item>
    </a-timeline>
  </div>
</template>

<script lang="ts"></script>

<style scoped>
.timeline-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5em 15em;
}

.timeline-image {
  max-width: 100%;
  max-height: 100%;
}
</style>

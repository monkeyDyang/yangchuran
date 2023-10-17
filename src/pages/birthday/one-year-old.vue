<script setup lang="ts">

</script>

<template>
  <div class="h-screen">
    <!-- 生日快乐 -->
    <div class="h-screen bg-fixed bg-cover bg-center">
      <div>
        <img
          class="slide-in-left max-w-xs absolute left-1/2 top-1/2" src="@/assets/images/birthday/one-year-old/cake.png"
          alt=""
        >
      </div>
    </div>
    <div class="divider" />

    <!-- 相框 -->
    <div class="h-screen bg-fixed bg-cover bg-center bg-[url('@/assets/images/0001.jpg')] " />
    <div class="divider" />

    <div class="h-screen bg-fixed bg-cover bg-center bg-[url('@/assets/images/0002.jpg')] " />
    <div class="divider" />

    <div class="h-screen bg-fixed bg-cover bg-center bg-[url('@/assets/images/0001.jpg')] " />
    <div class="divider" />

    <!-- 照片墙 -->
    <div class="h-screen grid grid-cols-3 grid-rows-4 gap-10">
      <div class="img-2 bg-cover mask mask-star-2" />
      <div class="img-2 bg-cover mask mask-star-2" />
      <div class="img-2 bg-cover mask mask-star-2" />
      <div class="img-2 bg-cover mask mask-squircle" />
      <div class="img-2 bg-cover mask mask-squircle" />
      <div class="img-2 bg-cover mask mask-squircle" />
      <div class="img-2 bg-cover mask mask-circle" />
      <div class="img-2 bg-cover mask mask-circle" />
      <div class="img-2 bg-cover mask mask-circle" />
      <div class="img-2 bg-cover mask mask-heart" />
      <div class="img-2 bg-cover mask mask-heart" />
      <div class="img-2 bg-cover mask mask-heart" />
    </div>
    <div class="divider" />
  </div>
</template>

<style lang="less" scoped>
.img-1 {
  background-image: url('@/assets/images/0001.jpg');
}

.img-2 {
  background-image: url('@/assets/images/0002.jpg');
}

/* cake slide in left */
.slide-in-left {
  -webkit-animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

  @-webkit-keyframes slide-in-left {
    0% {
      -webkit-transform: translateX(-1000px);
      transform: translateX(-1000px);
      opacity: 0;
    }

    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-in-left {
    0% {
      -webkit-transform: translateX(-1000px);
      transform: translateX(-1000px);
      opacity: 0;
    }

    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }

}
</style>

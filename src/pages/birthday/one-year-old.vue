<script setup lang="ts">

</script>

<template>
  <div class="h-screen">
    <!-- 生日快乐 -->
    <div class="h-screen bg-fixed bg-cover bg-center bg-[url('@/assets/images/birthday/one-year-old/bg-1.png')]">
      <!-- 上 -->
      <div class="min-w-full">
        <!-- 彩旗 -->
        <img class="slide-in-top w-2/3 m-auto" src="@/assets/images/birthday/one-year-old/bunting.png" alt="">
        <img class="slide-in-top h-32 m-auto" src="@/assets/images/birthday/one-year-old/happy-birthday.png" alt="">
      </div>
      <!-- 左 -->
      <div>
        <!-- 气球 -->
        <img
          class="slide-in-bottom w-20 absolute left-10 top-1/3"
          src="@/assets/images/birthday/one-year-old/balloon-1.png"
        >
        <!-- 蛋糕 -->
        <img
          class="slide-in-left w-60 absolute left-1/3 top-1/2" src="@/assets/images/birthday/one-year-old/cake.png"
          alt=""
        >
        <img class="w-40 absolute left-60 top-1/2" src="@/assets/images/birthday/one-year-old/rabbit.png">
      </div>
      <!-- 下 -->
      <div />
      <!-- 右 -->
      <div>
        <!-- 气球 -->
        <img
          class="slide-in-bottom w-20 absolute right-10 top-10"
          src="@/assets/images/birthday/one-year-old/balloon-2.png"
        >
        <img
          class="slide-in-bottom w-20 absolute right-20 bottom-10"
          src="@/assets/images/birthday/one-year-old/balloon-3.png"
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

.slide-in-top {
  -webkit-animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

  @-webkit-keyframes slide-in-top {
    0% {
      -webkit-transform: translateY(-1000px);
      transform: translateY(-1000px);
      opacity: 0;
    }

    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-in-top {
    0% {
      -webkit-transform: translateY(-1000px);
      transform: translateY(-1000px);
      opacity: 0;
    }

    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }

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

  .slide-in-bottom {
    -webkit-animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

    @-webkit-keyframes slide-in-bottom {
      0% {
        -webkit-transform: translateY(1000px);
        transform: translateY(1000px);
        opacity: 0;
      }

      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
      }
    }

    @keyframes slide-in-bottom {
      0% {
        -webkit-transform: translateY(1000px);
        transform: translateY(1000px);
        opacity: 0;
      }

      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
      }
    }

  }

}
</style>

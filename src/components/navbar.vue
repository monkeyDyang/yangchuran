<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

// TODO 默认隐藏，鼠标移动到导航栏区域再弹出来

/**
 * Handles the scroll event.
 *
 * @return {void}
 */
const isNavbarHidden = ref(false);

/**
 * Handles the scroll event.
 *
 * @return {void}
 */
function handleScroll(): void {
  const navbar = document.getElementById("navbar");
  if (navbar) {
    const currentScrollPosition = document.documentElement.scrollTop;
    isNavbarHidden.value = currentScrollPosition > 0;
  }
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div id="navbar" :class="{ hidden: isNavbarHidden }" class="navbar fixed top-0 left-0 right-0 z-10 shadow-lg">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Homepage</a></li>
          <li><a>Timeline</a></li>
        </ul>
      </div>
    </div>
    <div class="navbar-end">
      <ul class="menu menu-horizontal px-1">
        <div tabindex="0" class="btn gap-1 normal-case btn-ghost">
          <Theme />
        </div>
        <div tabindex="0" class="btn btn-ghost gap-1 normal-case">
          <Translate />
        </div>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* TODO 添加动画效果，滑入滑出 */
.navbar {
  /* Navbar styles */
  transition: transform 0.3s;
}

.hidden {
  transform: translateY(-100%);
}
</style>

<script setup lang="ts">
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Homepage</a></li>
          <li><a>About</a></li>
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

<style scoped></style>

<template>
  <div class="default-layout">
    <UHorizontalNavigation :links="links" />
    <slot />
  </div>
  <Footer />
</template>

<script setup lang="ts">
const route = useRoute();

const links = [
  [
    {
      label: "PHLogo",
    },
  ],
  [
    {
      label: "Home",
    },
    {
      label: "Who We Are",
    },
    {
      label: "Media",
    },
    {
      label: "Contact Us",
    },
  ],
];
</script>

<style>
/* body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

footer {
  margin-top: auto;
} */

section {
  height: 50vh;
  padding: 0 7%;
}
p {
  font-weight: 100;
}
</style>

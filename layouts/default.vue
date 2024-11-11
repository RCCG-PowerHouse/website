<template>
  <UHorizontalNavigation :links="links" class="px-8" />
  <main>
    <slot />
  </main>
  <Footer />
</template>

<script setup lang="ts">
const route = useRoute();

const links = [
  [
    {
      avatar: {
        src: "/PHWLogoYes.png",
        size: "xl",
        as: "img",
      },
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
body {
  background-color: white;
  color: black;
  font-family: Outfit;
}

footer {
  margin-top: auto;
}
section {
  height: 50vh;
  padding: 0 5%;
}
</style>

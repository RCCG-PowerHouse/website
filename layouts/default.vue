<template>
  <div>
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
  padding: 0 7%;
}
p {
  font-weight: 100;
}
</style>

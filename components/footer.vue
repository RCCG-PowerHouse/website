<template>
  <footer class="mt-20" style="border: 1px solid transparent">
    <div
      class="bg-white w-9/12 max-w-7xl mx-auto rounded-lg border -mt-9 top py-3"
    >
      <UHorizontalNavigation :links="links" />
    </div>

    <section class="main flex justify-around max-h-1/2">
      <div class="flex-col flex justify-around font-medium">
        <Icon name="i-uiw:twitter" />
        <Icon name="i-bxl:facebook" />
        <Icon name="i-bxl:instagram-alt" />
      </div>

      <div class="flex-col flex text-sm justify-between col">
        <div>
          <p class="py-2">Redemption Crescent, Ups <br />Gbagada Lagos</p>
          <span class="text-md underline">Location</span>
        </div>

        <div>
          <p class="py-2">0814 866 7484</p>
          <span class="text-md underline">Contact Us</span>
        </div>
      </div>

      <div class="flex-col flex text-sm justify-between">
        <p>What We Believe</p>
        <p>Our Mission & Vision</p>
        <p>Leadership</p>
        <p>Departments</p>
      </div>

      <div class="flex-col flex text-sm justify-between">
        <p>Sermons</p>
        <p>Articles</p>
        <p>Upcoming Events</p>
      </div>

      <div class="flex-col flex text-sm justify-between">
        <p>Our Service times</p>
        <p>Sunday</p>
        <p>Wednesdays</p>
      </div>
    </section>

    <div
      class="flex border py-4 justify-center font-semibold bg-white text-black"
    >
      <p>
        <Icon name="i-ic:outline-copyright" />
        Copyright Rccg PowerHouse
      </p>

      <p>All Right's Reserved 2024</p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #382424;
  color: white;
}

.main {
  padding: 10% 5%;
}

.top {
  color: #53413f;
}
</style>

<script setup lang="ts">
const links = [
  [
    {
      label: "PHLogo",
    },
  ],
  [
    {
      label: "Who We Are",
    },
    {
      label: "Media",
    },
    {
      label: "Let's Connect",
    },
  ],
];
</script>

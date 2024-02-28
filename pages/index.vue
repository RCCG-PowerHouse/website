<template>
  <!-- HERO TEXT SECTION -->
  <section class="hero-section border grid content-center">
    <div>
      <p class="hero pb-10">
        Experience The Warmth of Fellowship, Worship, And The Joy of Serving
        Together
      </p>
      <p class="w-4/5 pb-10">
        Welcome to Powerhouse where everyone is welcome come as you are, and
        let's walk this inspiring path of faith, love, and purpose.. Join us
        today...
      </p>
      <UButton
        label="Watch Live Stream/Achive"
        :ui="{ rounded: 'rounded-full' }"
        variant="outline"
        size="xl"
      />
    </div>
  </section>
  <!-- VISION SECTION -->
  <section class="vision border grid content-center grid-cols-1 gap-2">
    <div class="">Vision</div>
    <div class="col-span-2">
      <p class="font-medium uppercase" style="color: #f34032">What We See</p>
      <p class="border text-left leading-7 w-4/5">
        Empowered by Faith, United in Love, and Committed to Service, Power
        House envisions a vibrant community where individuals discover and
        deepen their relationship with God. Striving for spiritual growth and
        embracing diversity, we aspire to be a beacon of hope, extending
        compassion and making a positive impact on the lives of those we touch.
        Together, we journey towards a shared vision of a transformed and
        uplifted world, guided by the teachings of Christ and bound by the bonds
        of love.
      </p>
    </div>
  </section>
  <!-- ARTCILES SECTION -->
  <section class="border grid grid-cols-1 grid-rows-3 gap-2">
    <p class="font-semibold border flex justify-center items-center">
      OUR POPULAR ARTICLES
    </p>
    <div class="grid grid-cols-3 grid-rows-3 gap-2 justify-items-stretch">
      <div class="border rounded">01</div>
      <div class="border">02</div>
      <div class="border">03</div>
      <div class="border">04</div>
      <div class="border">05</div>
      <div class="border">06</div>
    </div>
    <p class="border">View All Articles</p>
  </section>
  <!-- FAQ'S SECTION -->
  <section class="border grid grid-cols-3 gap-2 content-center">
    <div>FAQ'S</div>
    <div class="grid grid-cols-1 grid-rows-5 col-span-2 gap-1">
      <div class="font-semibold">QUESTIONS YOU MAY HAVE.</div>
      <div class="font-bold">
        <p class="py-1">
          How can I get involved in church activities and events?
        </p>
        <p class="font-light">
          We encourage everyone to get involved! Visit our "Get Involved" page
          for information on upcoming events, volunteer opportunities, and ways
          to join community groups.
        </p>
      </div>

      <div class="font-bold">
        How can I donate to the church online?
        <p class="font-light">
          Donating online is easy! Visit our "Give" page, where you can securely
          make a one-time donation or set up recurring contributions.
        </p>
      </div>

      <div class="font-bold">
        What programs do you have for children and youth?
        <p class="font-light">
          We have vibrant programs for children and youth! Explore our
          "Ministries" section to learn about Sunday School, youth groups, and
          special events tailored for various age groups.
        </p>
      </div>

      <div class="font-bold">
        How can I request prayer for myself or a loved one?
        <p class="font-light">
          Submitting a prayer request is simple. Visit our "Prayer Requests"
          page and fill out the form with your details.
        </p>
      </div>
    </div>
  </section>
  <!-- MAPS SECTION -->
  <section class="border">
    <div>
      <p>WE ARE CLOSER THAN YOU IMAGINE!</p>
      <p>
        Join the community where distance is just a concept, and togetherness is
        a reality
      </p>
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2284.685739676587!2d3.3807942168969403!3d6.550135856110031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d9e0e909475%3A0x899f3ffa902b3303!2sThe%20Redeemed%20Christian%20Church%20Of%20God%2C%20Christ%20Church!5e0!3m2!1sen!2sng!4v1709078309034!5m2!1sen!2sng"
      width="600"
      height="400"
      style="border: 0"
      allowfullscreen
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      class="w-full"
    ></iframe>
  </section>
</template>

<style scoped>
.hero {
  font-size: 52px;
  font-weight: 700;
  line-height: 62px;
  letter-spacing: -0.02em;
  text-align: left;
}

.vision {
  height: 30vh;
}
</style>

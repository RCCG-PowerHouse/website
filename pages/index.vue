<template>
  <!-- HERO TEXT SECTION -->
  <section class="hero-section flex justify-between items-center">
    <div class="hero-text">
      <p class="hero pb-10 w-4/5">
        Experience The Warmth of Fellowship, Worship, And The Joy of Serving
        Together
      </p>
      <p class="w-2/4 pb-10 leading-normal">
        Welcome to Powerhouse where everyone is welcome come as you are, and
        let's walk this inspiring path of faith, love, and purpose.. Join us
        today...
      </p>
      <UButton
        label="Watch Live Stream/Archive"
        :ui="{ rounded: 'rounded-full' }"
        variant="outline"
        size="xl"
      />
    </div>
  </section>
  <!-- VISION SECTION -->
  <section class="vision flex justify-between">
    <div class="flex items-center justify-center">
      <div class="vision-text vision-hero px-3">
        <p>Vision</p>
      </div>
      <div class="grid content-center w-4/5">
        <p class="font-medium uppercase" style="color: #f34032">What We See</p>
        <p class="text-left leading-7 w-4/5">
          Empowered by Faith, United in Love, and Committed to Service, Power
          House envisions a vibrant community where individuals discover and
          deepen their relationship with God. Striving for spiritual growth and
          embracing diversity, we aspire to be a beacon of hope, extending
          compassion and making a positive impact on the lives of those we
          touch. Together, we journey towards a shared vision of a transformed
          and uplifted world, guided by the teachings of Christ and bound by the
          bonds of love.
        </p>
      </div>
    </div>
    <div class="vision-text mission-hero py-5">
      <p>Mission</p>
    </div>
  </section>
  <!-- ARTCILES SECTION -->
  <section class="grid grid-cols-1 grid-rows-6 gap-2 article">
    <div
      class="font-semibold flex justify-center items-center headers row-span-1"
    >
      OUR POPULAR ARTICLES
    </div>
    <div class="flex justify-between gap-2 row-span-2">
      <div class="grow rounded-lg article-1 article-card">01</div>
      <div class="grow rounded-lg article-2 article-card">02</div>
      <div class="grow rounded-lg article-2 article-card">03</div>
    </div>
    <div class="flex justify-between gap-2 row-span-2">
      <div class="grow rounded-lg article-3 article-card">04</div>
      <div class="grow rounded-lg article-4 article-card">05</div>
    </div>
    <p class="justify-self-center m-2 headers">View All Articles</p>
  </section>
  <!-- FAQ'S SECTION -->
  <section class="grid grid-cols-3 gap-2 content-center faq py-4">
    <div class="flex items-center justify-center faq-hero vision-text">
      FAQ'S
    </div>
    <div class="flex flex-col col-span-2 gap-4">
      <div class="font-semibold headers row-span-1">
        Questions You May Have.
      </div>
      <div class="flex flex-col gap-1">
        <p class="font-black text-lg">
          How can I get involved in church activities and events?
        </p>
        <span class="font-thin">
          We encourage everyone to get involved! Visit our "Get Involved" page
          for information on upcoming events, volunteer opportunities, and ways
          to join community groups.
        </span>
      </div>

      <div class="flex flex-col gap-1 mb-1">
        <p class="font-black text-lg">How can I donate to the church online?</p>
        <p class="font-thin">
          Donating online is easy! Visit our "Give" page, where you can securely
          make a one-time donation or set up recurring contributions.
        </p>
      </div>

      <div class="flex flex-col gap-1 mb-1">
        <p class="font-black text-lg">
          What programs do you have for children and youth?
        </p>
        <p class="font-thin">
          We have vibrant programs for children and youth! Explore our
          "Ministries" section to learn about Sunday School, youth groups, and
          special events tailored for various age groups.
        </p>
      </div>

      <div class="flex flex-col gap-1 mb-1">
        <p class="font-black text-lg">
          How can I request prayer for myself or a loved one?
        </p>
        <p class="font-thin">
          Submitting a prayer request is simple. Visit our "Prayer Requests"
          page and fill out the form with your details.
        </p>
      </div>
    </div>
  </section>
  <!-- MAPS SECTION -->
  <section class="flex flex-col justify-content items-center maps">
    <div class="py-4">
      <p class="headers font-black">We are Closer Than You Imagined!</p>
      <p>
        Join the community where distance is just a concept, and togetherness is
        a reality
      </p>
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2284.685739676587!2d3.3807942168969403!3d6.550135856110031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d9e0e909475%3A0x899f3ffa902b3303!2sThe%20Redeemed%20Christian%20Church%20Of%20God%2C%20Christ%20Church!5e0!3m2!1sen!2sng!4v1709078309034!5m2!1sen!2sng"
      style="border: 0"
      allowfullscreen
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      class="w-9/12 h-4/5 rounded-lg"
    ></iframe>
  </section>
</template>

<style scoped>
.hero {
  font-size: 70px;
  font-weight: 700;
  line-height: 62px;
  text-align: left;
  background: -webkit-linear-gradient(#e92616, #d0bd06);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.headers {
  background-color: #e92616;
  background-image: linear-gradient(to right, #e92616 0%, #d0bd06 55%);
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 30px;
}

.hero-section {
  height: 80vh;
  background-image: url("image.png");
  background-repeat: no-repeat;
  background-position: right;
  background-color: rgba(250, 249, 249, 1);
}

.button {
  color: #3f241c;
}

.vision {
  height: 40vh;
  background-image: radial-gradient(#3b1e0deb 100%, #51181300 100%),
    url("vision.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: white;
}

.vision-text {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  text-align: center;
  color: transparent;
  -webkit-text-fill-color: transparent;
  font-size: 100px;
  font-weight: 700;
  line-height: 100px;
  letter-spacing: -0.02em;
}

.vision-hero {
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #9e5b5b;
}

.mission-hero {
  font-size: 90px;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #a67575;
}

.article {
  background-color: #faf9f9;
  height: 70vh;
}

.article-card {
  background-image: linear-gradient(#51181300, #3b1e0da6);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.article-1 {
  background-image: url("article-1.png");
}

.article-2 {
  background-image: url("article-2.png");
}

.article-3 {
  background-image: url("article-3.png");
}

.article-4 {
  background-image: url("article-4.png");
}

.faq {
  background-color: #f9f0ee80;
}

.faq-hero {
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #9e5b5b;
}

.maps {
  height: 50vh;
}
</style>

<template>
  <!-- HERO TEXT SECTION -->
  <section
    class="hero-section flex flex-col-reverse md:flex-row md:justify-between items-center py-10"
  >
    <div class="hero-text text-justify md:text-left">
      <h1 class="hero pb-10 w-full">
        Experience The Warmth of Fellowship, Worship, And The Joy of Serving
        Together
      </h1>
      <p class="pb-10 leading-normal">
        Welcome to Powerhouse where everyone is welcome come as you are, and
        let's walk this inspiring path of faith, love, and purpose.. Join us
        today...
      </p>
      <UButton
        label="Watch Live Stream/Archive"
        :ui="{ rounded: 'rounded-full' }"
        style="color: #3f241c; background-color: white"
        variant="outline"
        size="xl"
      />
    </div>
    <img src="/image.png" />
  </section>

  <!-- VISION SECTION -->
  <section class="vision flex flex-col justify-between lg:flex-row">
    <div class="flex items-center justify-center flex-col lg:flex-row md:py-10">
      <div class="vision-text vision-hero md:px-3">
        <p>Vision</p>
      </div>
      <div class="grid content-center w-full lg:w-4/5">
        <p class="font-medium uppercase" style="color: #f34032">What We See</p>
        <p class="text-left leading-wide lg:w-4/5">
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

      <div class="vision-text mission-hero">
        <p id="mission-hero">Mission</p>
      </div>
    </div>
  </section>

  <!-- ARTCILES SECTION -->
  <section class="grid grid-cols-1 grid-rows-6 gap-2 article">
    <h4
      class="font-semibold flex justify-center items-center headers row-span-1"
    >
      OUR POPULAR ARTICLES
    </h4>
    <div class="flex justify-between gap-2 row-span-2">
      <div class="grow rounded-lg article-1 article-card">01</div>
      <div class="grow rounded-lg article-2 article-card">02</div>
      <div class="grow rounded-lg article-2 article-card">03</div>
    </div>
    <div class="flex justify-between gap-2 row-span-2">
      <div class="grow rounded-lg article-3 article-card">04</div>
      <div class="grow rounded-lg article-4 article-card">05</div>
    </div>
    <p class="justify-self-center m-2 headers text-2xl">View All Articles</p>
  </section>

  <!-- FAQ'S SECTION -->
  <section
    class="flex flex-col gap-10 content-center faq py-4 lg:flex-row lg:justify-around"
  >
    <p class="flex items-center justify-center faq-hero vision-text grow">
      FAQ'S
    </p>
    <div class="flex flex-col col-span-2 gap-8 md:w-[90%] flex-none">
      <h4 class="font-semibold headers row-span-1 hidden lg:block">
        Questions You May Have.
      </h4>
      <div class="flex flex-col gap-1">
        <p class="font-black text-lg">
          How can I get involved in church activities and events?
        </p>
        <p class="font-thin">
          We encourage everyone to get involved! Visit our "Get Involved" page
          for information on upcoming events, volunteer opportunities, and ways
          to join community groups.
        </p>
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
    <div class="py-10 text-center">
      <h4 class="headers font-black">We are Closer Than You Imagined!</h4>
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
      class="w-9/12 h-[75%] rounded-lg"
    ></iframe>
  </section>
</template>

<style>
@import url("base.css");

.hero {
  line-height: 1em;
  background: linear-gradient(to right, #e92616, #d0bd06);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.headers {
  background-color: #e92616;
  /* background-image: linear-gradient(to right, #e92616 0%, #d0bd06 55%); */
  background-image: linear-gradient(90.49deg, #e92616 -14.37%, #d0bd06 97.24%);
  font-weight: 900;
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-section {
  height: 100vh;
  /* background-image: url("image.png");
  background-repeat: no-repeat;
  background-position: right;
  background-color: rgba(250, 249, 249, 1); */
}

.button {
  color: #3f241c;
}

.vision {
  height: max-content;
  background-image: radial-gradient(
      238.5% 957.83% at 37.26% 48.1%,
      rgba(59, 30, 13, 0.92) 0%,
      rgba(81, 24, 19, 0) 100%
    ),
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
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #a67575;
}

.article {
  background-color: #faf9f9;
  height: 100vh;
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
  min-height: max-content;
  background-color: #f9f0ee80;
}

.faq-hero {
  -webkit-text-stroke-width: 0.2px;
  -webkit-text-stroke-color: #9e5b5b;
}

.maps {
  height: 80vh;
}

@media screen and (max-width: 1023px) {
  .vision-text {
    writing-mode: vertical-rl;
    transform: rotate(-90deg);
  }

  #mission-hero {
    font-size: 50px;
  }
}
</style>

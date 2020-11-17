<template>
  <div class="content grid gap-4 sm:gap-8 mt-4">
    <div class="github">
      <h3>github Contributions</h3>
      <a
        href="https://github.com/ivgtr"
        target="_blank"
        class="inline-block w-full mt-4"
      >
        <img
          src="https://grass-graph.moshimo.works/images/ivgtr.png"
          alt="github"
          class="w-full h-full object-contain"
        />
      </a>
    </div>
    <div class="comicspace">
      <h3>comicspace Top5</h3>
      <a
        href="https://comicspace.jp/profile/ivgtr"
        class="inline-block w-full mt-4"
      >
        <img
          src="https://d2neqa82spgutp.cloudfront.net/api/v2.0/og-image/user/ivgtr.png"
          alt="comicspace"
          class="w-full h-full object-contain"
        />
      </a>
    </div>
    <div class="wakatime">
      <h3>wakatime Last 7days Data</h3>
      <div class="grid gap-4 sm:gap-8 mt-4">
        <a
          href="https://wakatime.com/@f7c27625-ee36-4679-bd87-213b923351f7"
          class="inline-block w-full"
        >
          <img
            src="https://wakatime.com/share/@f7c27625-ee36-4679-bd87-213b923351f7/f85cb3ce-90eb-4a3b-b9e0-6e1ef5610da5.svg"
            alt="wakatime"
            class="w-full h-full object-contain"
          />
        </a>
        <a
          href="https://wakatime.com/@f7c27625-ee36-4679-bd87-213b923351f7"
          class="inline-block w-full"
        >
          <img
            src="https://wakatime.com/share/@f7c27625-ee36-4679-bd87-213b923351f7/d6f88dd8-515e-417b-beef-e94758ba5e10.svg"
            alt="wakatime"
            class="w-full h-full object-contain"
          />
        </a>
      </div>
    </div>
    <div class="links">
      <h3>another Links</h3>
      <ul>
        <li class="mt-4">
          <a
            href="https://annict.jp/@ivgtr"
            class="inline-block w-full ml-1 text-blue-200 font-bold"
          >
            Annict
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  grid-template-rows: auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-flow: dense;
  .links {
    ul > li {
      display: flex;
      &::before {
        content: '-';
      }
    }
  }
}
</style>

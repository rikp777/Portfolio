<template>

  <div>
    <HeroSection/>
    <GithubCalendar v-if="$config.social.github"/>
    <Recommendations v-if="$config.recommendations.enabled"/>
    <LazyRecentBlog v-if="$config.projects.enabled && posts" :posts="posts"/>
    <div v-if="isOpen"
         class="fixed bottom-0 left-0 lg:flex items-center p-4 bg-gray-100 shadow-sm justify-center w-full">
      <div class="text-5xl pb-2 leading-none">
        🍪
      </div>
      <div class="lg:mx-8">

        <h1 class="font-medium ">{{ $t('cookies.title') }}</h1>
        <p class="mt-2">
          {{ $t('cookies.dueTo') }}<a class="hover:text-blue-600 text-blue-400" :href="$t('cookies.moreInfo')">info</a><br>
          {{ $t('cookies.settings') }}<br>
        </p>
      </div>
      <div class="flex justify-center mt-4 lg:mt-0 text-center">
        <div class="button ml-2 md:ml-0 hover:text-green-600 cursor-pointer bg-green-600 md:bg-gray-100 rounded-md text-center text-gray-100 md:text-black h-auto mr-2 py-1 px-2"
             @click="accept">{{ $t('cookies.ok') }}
        </div>
        <div class="button md:ml-2 hover:text-red-600 cursor-not-allowed bg-red-600 md:bg-gray-100 rounded-md text-center text-gray-100 md:text-black h-auto py-1 px-2 "
             @click="deny">{{ $t('cookies.no') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {bootstrap} from 'vue-gtag';
export default {
  head() {
    return {
      title: `🏠 ${this.$t('nav.home')} -- ${this.$config.name}`,
    }
  },
  data() {
    return {
      posts: null,
      isOpen: false
    }
  },
  methods: {
    deny() {
      if (process.browser) {
        this.isOpen = false;
        localStorage.setItem('GDPR:accepted', false);
      }
    },
    accept() {
      if (process.browser) {
        bootstrap().then(gtag => {
          this.isOpen = false;
          localStorage.setItem('GDPR:accepted', true);
          location.reload();
        })
      }
    },
    getGDPR() {
      if (process.browser) {
        return localStorage.getItem('GDPR:accepted', true);
      }
    },
  },
  async created() {
    if (!this.getGDPR() === true) {
      this.isOpen = true;
    }
    const fetchDocsLabel = 'fetchAllPosts'
    console.time(fetchDocsLabel)
    try {
      const posts = await this.$content('projects', { deep: true})
        .without(['body', 'toc', 'dir', 'extension', 'path', 'tags'])
        .limit(3)
        .skip(0)
        .sortBy('createdAt', 'desc')
        .fetch()
      this.posts = posts
    } catch (e) {
      console.error(e)
    } finally {
      console.timeEnd(fetchDocsLabel)
    }
    console.log(this.$router.options.routes)
  },
}
</script>

<style>
</style>

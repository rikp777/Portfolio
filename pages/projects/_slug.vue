<template>
<div class="max-w-7xl mx-auto border-gray-700 border-dashed border-l border-r">
  <div class="dark antialiased text-gray-200">
    <div class="px-4 py-4 max-w-6xl mx-auto sm:px-6 lg:px-8">
      <article data-aos="fade-up">
        <div class="space-y-12">
          <div class="py-0.5 border-t border-b border-dashed border-gray-700 flex items-center justify-between">
            <div class="text-indigo-700 font-bold">
              <nuxt-link class="hover:text-indigo-500" :to="localePath('/projects')">{{ $t('projects.header') }}</nuxt-link> <span class="text-gray-700">/</span>
              <span>{{project.slug}}</span>
              <span class="hidden md:inline-block">></span>
              <span v-for="item in project.tech" class="hidden md:inline-block">{{item.name}} </span>

            </div>
            <div><a target="_blank" rel="noreferrer" :href="project.twitterShareUrl" class="inline-flex items-center py-2 px-3 space-x-2 rounded-md bg-gray-900 text-gray-300 text-xs font-medium hover:text-gray-200 transition ease-in-out duration-100"><span>Share on Twitter</span><svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g transform="matrix(0.6666666666666666,0,0,0.6666666666666666,0,0)"><path d="M23.32,6.44c0.212-0.177,0.241-0.492,0.065-0.704c-0.068-0.082-0.161-0.14-0.265-0.166l-0.79-0.2 c-0.268-0.067-0.431-0.339-0.364-0.606C21.974,4.731,21.986,4.7,22,4.67l0.44-0.89c0.12-0.249,0.015-0.548-0.233-0.668 C22.099,3.06,21.976,3.049,21.86,3.08l-2,0.56c-0.151,0.044-0.314,0.014-0.44-0.08c-0.865-0.649-1.918-1-3-1c-2.761,0-5,2.239-5,5 l0,0v0.36c0.001,0.127-0.094,0.235-0.22,0.25C8.39,8.5,5.7,7.07,2.8,3.73c-0.128-0.142-0.325-0.2-0.51-0.15 C2.124,3.656,2.013,3.817,2,4C1.599,5.645,1.761,7.377,2.46,8.92c0.062,0.123,0.013,0.274-0.11,0.336 C2.303,9.279,2.251,9.288,2.2,9.28L1.08,9.06C0.807,9.016,0.551,9.202,0.507,9.474C0.498,9.533,0.499,9.592,0.51,9.65 c0.175,1.555,1.047,2.945,2.37,3.78c0.124,0.06,0.176,0.21,0.116,0.334c-0.025,0.051-0.065,0.092-0.116,0.116l-0.53,0.21 c-0.256,0.103-0.381,0.394-0.278,0.65c0.005,0.014,0.011,0.027,0.018,0.04c0.595,1.302,1.791,2.229,3.2,2.48 c0.13,0.047,0.197,0.191,0.15,0.32c-0.025,0.07-0.08,0.124-0.15,0.15C3.93,18.292,2.471,18.575,1,18.56 c-0.276-0.055-0.545,0.124-0.6,0.4s0.124,0.545,0.4,0.6l0,0c2.548,1.208,5.321,1.866,8.14,1.93c2.479,0.038,4.915-0.658,7-2 c3.484-2.326,5.571-6.241,5.56-10.43V8.19c0.001-0.147,0.067-0.286,0.18-0.38L23.32,6.44z" stroke="none" fill="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round"></path></g></svg></a></div>
          </div>
          <div class="px-4 sm:px-0 lg:px-4 pb-4 bg-gray-900 rounded-lg">
            <div class="flex flex-items-center justify-center  rounded-full">
              <UserAvatar :photoURL="project.author.image" :name="project.author.name" class="w-12 h-12 border-2 border-indigo-600 hover:border-hot-pink -mt-5 bg-gray-900 rounded-full"/>
            </div>
            <header class="py-4">
              <div class="space-y-1 text-center">
                <div >
                  <h1 class="text-2xl font-extrabold text-gray-100 tracking-tight">{{ project.title }}</h1>
                </div>


                <dl class="">
                  <div><dt class="sr-only">Published on</dt>
                    <dd class="text-xs font-medium text-gray-500">
                      <a target="_blank" rel="noreferrer" :href="project.website"><span class="text-indigo-600 hover:text-indigo-300" v-for="item in project.category">{{ item.name }} </span></a>
                      <span class="mx-1">
                        &middot;
                      </span>
                      {{ project.readingTime }}
                    </dd>
                  </div>
                </dl>
                <div class="overflow-hidden flex flex-wrap items-center flex-row justify-center">
                  <div class="px-3 text-xs flex flex-shrink-0 py-1 mt-1 mr-2 bg-indigo-600 rounded-md hover:bg-indigo-700">Duration: {{ project.duration }}</div>
                </div>
              </div>
            </header>

            <div class="p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
              <aside ref="toc" class="col-span-1 lg:flex lg:flex-col" v-if="project.toc.length > 0">
                <div class="sticky top-20">
                  <h2
                    class="uppercase text-gray-100 font-h2 text-lg tracking-wider"
                  >
                    Table of contents
                  </h2>
                  <nav class="mt-4">
                    <ul>
                      <li
                        @click="tableOfContentsHeadingClick(link)"
                        :class="{
                'pl-4': link.depth === 3,
              }"
                        class="toc-list"
                        v-for="link of project.toc"
                        :key="link.id"
                      >
                        <a
                          :class="{
                  'text-indigo-600 hover:text-indigo-700': link.id === currentlyActiveToc,
                  'text-gray-100 hover:text-gray-300': link.id !== currentlyActiveToc,
                }"
                          role="button"
                          class="transition-colors duration-75 text-base mb-2 block"
                          :href="`#${link.id}`"
                        >{{ link.text }}</a
                        >
                      </li>
                    </ul>
                  </nav>
                </div>
              </aside>
              <div class="col-span-3">
                <div class="prose dark:prose-dark break-words my-4 prose-sm max-w-4xl mx-auto">
                  <!--              <div class="flex items-center justify-center rounded">-->
                  <!--                <img class="object-contain h-48 w-full rounded " :src="project.image">-->
                  <!--              </div>-->

                  <nuxt-content :document="project" />
                  <p v-if="thank_reader">
                    Thank you for reading this topic about {{project.title}} I hope it was interesting any feedback is always welcome. Hope to see you in the next topic, <br>Byee! 👋🍺
                  </p>

                </div>
                <p class="text-gray-300 break-words my-4 prose-sm max-w-4xl mx-auto">TL;DR {{project.description}}</p>
                <div class="flex mt-2 space-x-2 flex-row prose-sm max-w-4xl mx-auto">
                  <a v-if="project.website" target="_blank" rel="noreferrer" :href="project.website" class="hover:text-indigo-500 text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd" />
                    </svg>
                  </a>
                  <a v-if="project.github" target="_blank" rel="noreferrer" :href="project.github" class="hover:text-indigo-500 text-gray-600">
                    <span class="sr-only">GitHub</span>
                    <svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </div>

              </div>
            </div>

           </div>

        </div>
        <div v-if="$config.firebase.enabled">
          <div class="my-6">
            <Like :slug="project.slug" />
          </div>
          <div id="comments" class="border-t border-gray-700 border-dashed mt-6 py-5">
            <CommentInput :slug="project.slug"/>
          </div>
          <div class="space-y-4 max-w-7xl">
            <Comment v-for="(comment, index) in comments" :comment="comment"  :key="index" />
          </div>
        </div>
      </article>
    </div>
  </div>

  <div @click="scrollToTop" class="cursor-pointer fixed z-50 bottom-4 right-4 w-8 w-8 rounded-full bg-gray-900 text-white block text-indigo-600 hover:text-hot-pink">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd" />
    </svg>
  </div>
</div>
</template>

<script>
export default {
  beforeDestroy() {
    this.observer.disconnect();
  },
  async asyncData({ $content, params, store, route, $config }) {
    let dirs = params.slug.split("_")
    let searchUrl = ""
    dirs.forEach(x => {
      searchUrl = searchUrl + "/" + x
    })
    console.log(searchUrl)
    const project = await $content('projects', searchUrl).fetch()
    console.log(project)
    // project.twitterShareUrl = `https://twitter.com/intent/tweet?text=${project.title} by @${project.author.social.twitter}&url=https://${$config.domain}${route.fullPath}`
    project.twitterShareUrl = `https://twitter.com/intent/tweet`
    return {
      project,
    }
  },
  head() {
    return {
      title: this.project.title + ` -- projects -- ${this.$config.name}`,
      meta: [
        { hid: 'description', name: 'description', content: this.project.description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.project.title },
        { hid: 'og:description', property: 'og:description', content: this.project.description },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: this.project.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.project.description }
      ]
    }
  },
  mounted() {
    import("mermaid/dist/mermaid").then(m => {
      m.initialize({
        startOnLoad: true
      });
      m.init();
    });

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        if (entry.isIntersecting) {
          this.currentlyActiveToc = id;
          console.log('current active toc', this.currentlyActiveToc)
        }
      });
    }, this.observerOptions);

    // Track all sections that have an `id` applied
    document.querySelectorAll('.nuxt-content h2[id], .nuxt-content h3[id]').forEach((section) => {
      this.observer.observe(section);
    });
  },
  methods: {
    tableOfContentsHeadingClick(link) {
      this.currentlyActiveToc = link.id;
      console.log('current active', this.currentlyActiveToc)
    },
    scrollToTop() {
      document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    cmp(a, b) {
      if (a.created < b.created) return 1
      if (a.created > b.created) return -1
      return 0
    }
  },
  computed: {
    thank_reader(){
      console.log(this.project)
      if(this.project.meta_data){
        if(!this.project.meta_data.thank_reader){
          return false
        }
      }
      return true
    },
    readingTime () {
      let minutes = 0
      const contentAsString = JSON.stringify(this.project.body)
      const words = contentAsString.split(' ').length
      const wordsPerMinute = 200

      minutes = Math.ceil(words / wordsPerMinute)

      return minutes
    },
    comments() {
      const comments = [ ...(this.$store.state.comments[this.project.slug] ? this.$store.state.comments[this.project.slug] : [])]
      return comments.sort(this.cmp)
    }
  },
  data() {
    return {
      toastOptions: { duration: 2000, theme: 'bubble' },
      currentlyActiveToc: "",
      observer: null,
      observerOptions: {
        root: this.$refs.nuxtContent,
        threshold: 0,
      },
    }
  },
  async fetch() {
    if (!this.$config.firebase.enabled) {
      return
    }
    try {
      await this.$store.dispatch('fetchComments', {slug: this.project.slug})
    } catch (e) {
      this.$toast.error(e.toString(), this.toastOptions)
      console.error(e)
    }
  },
}
</script>
<style scoped>
>>> .icon {
  @apply text-indigo-600 hover:text-hot-pink hidden;
}

>>> .breaker {
    @apply text-center py-2;
}

>>> .breaker::after {
  content: "• • •";
}

>>> .nuxt-content .caption {
  @apply text-center;
}

>>> .nuxt-content img {
  @apply mx-auto rounded-md;
}

</style>

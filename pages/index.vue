<template>
  <div>
    <HeroSection/>
    <GithubCalendar v-if="$config.social.github"/>
    <Recommendations v-if="$config.recommendations.enabled"/>
    <LazyRecentBlog v-if="$config.projects.enabled && posts" :posts="posts"/>
  </div>
</template>

<script>

export default {
  head() {
    return {
      title: `🏠 ${this.$t('nav.home')} -- ${this.$config.name}`,
    }
  },
  data() {
    return {
      posts: null
    }
  },
  async created() {
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

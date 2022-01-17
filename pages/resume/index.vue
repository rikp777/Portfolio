<template>
  <div class="relative max-w-7xl border-r border-l border-dashed border-gray-700 py-6 mx-auto">
    <div>
      <div data-aos="fade-up" class="text-center">
        <h2 class="text-2xl tracking-tight font-extrabold text-gray-200">
          {{ $t('resume.header') }}
        </h2>
        <span class="mx-auto text-gray-300">- 📓✍🏽 -</span>
        <p class="mt-2 px-2 max-w-2xl mx-auto text-sm leading-7 text-gray-400">
          {{ $t('resume.subtext') }}
        </p>
      </div>
    </div>
    <WorkExperience/>
    <Studies/>
    <Technologies/>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `📎 ${this.$t('nav.resume')} -- ${this.$config.name}`,
    }
  },
  data(){
    return {
      passwordIsCorrect: false,
      password: ''
    }
  },
  methods: {
    checkPassword(){
      if(this.password == this.$config.resume.password){
        this.passwordIsCorrect = true
      }
    }
  }
}
</script>

<style scoped>

</style>

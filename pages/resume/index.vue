<template>
<!--  <div class="max-w-7xl px-4 mx-auto py-12 border-l border-r border-dashed border-gray-700">-->
<!--    <div class="shadow-md max-w-5xl mx-auto bg-gray-700 overflow-hidden rounded-lg divide-gray-800">-->
<!--      <div data-aos="fade-up"  class="bg-gray-900 py-3 px-6 flex justify-between items-center">-->
<!--        <h1 class="text-lg flex flex-row font-semibold text-gray-200"><span class="pr-1">{{ $t('nav.resume') }}</span>-->
<!--          - <span class="pl-1 hidden md:block">{{ $config.name }}</span></h1>-->
<!--        <a target="_blank" rel="noreferrer" :href="$config.pdfUrl" :download="`${$config.name}.pdf`" v-if="passwordIsCorrect"-->
<!--           class="inline-flex text-indigo-500 hover:text-indigo-600 items-center px-2 py-1 border-->
<!--           border-transparent shadow-sm text-sm font-medium-->
<!--           rounded-md btn-color-style">-->
<!--          <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-3 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">-->
<!--            <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd" />-->
<!--          </svg>-->
<!--          {{ $t('download') }}-->
<!--        </a>-->
<!--        <div v-if="!passwordIsCorrect">-->
<!--          <small class="text-gray-200">{{ $t('resume.provide') }}{{$config.resume.pdfUrl}}</small>-->
<!--          <input class="shadow appearance-none border rounded py-2 px-3 text-gray-200 bg-gray-900 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" :placeholder="$t('resume.password')" v-model="password"  @change="checkPassword()">-->
<!--        </div>-->

<!--       </div>-->

<!--      <div class="px-4 py-5 sm:p-6 flex items-center justify-center" v-if="passwordIsCorrect">-->
<!--        <div class="w-full dark:text-gray-500 text-gray-800 font-bold">-->
<!--          <PdfViewer class="shadow-md" :src="$config.resume.pdfUrl"/>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
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

<template>
  <div class="max-w-7xl mx-auto border-l border-r border-dashed border-gray-700 pt-4 pb-6 px-4">
    <div class="max-w-prose text-center mx-auto pb-4">
      <p class="text-xs leading-6 text-indigo-600 font-semibold tracking-wide lowercase">{{ $t('technologies.subtext') }}</p>
      <a :href="``" target="_blank" rel="noreferrer" class="mt-2 text-3xl hover:text-hot-pink leading-8 font-extrabold tracking-tight text-gray-500">{{ $t('technologies.header') }}</a>
    </div>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-5">
      <div v-for="(technology, index) in $config.technologies.meta" :key="`rec-${index}`" class="relative h-full bg-gray-900 rounded-lg shadow-lg text-base w-full">
        <blockquote class="relative">
          <div class="rounded-t-lg px-5 py-5 sm:px-8 sm:py-8y">
            <div class="flex flex-row">
              <a :href="technology.url" target="_blank" rel="noreferrer">
                <cite class="flex items-center rounded-b-lg not-italic">
                  <span class="text-gray-400 font-semibold py-2">
                  <strong class="text-gray-200 font-semibold">{{ technology.name }}</strong>
                </span>
                </cite>
              </a>
            </div>
            <div class="relative text-sm text-gray-300 font-medium mt-4">
              <div v-for="(framework, index) in technology.frameworks" :key="index">
                <a :href="framework.url" target="_blank" class="hover:text-hot-pink">{{framework.name}}</a>


                <div v-show="framework.subs" class="mt-2">
                  <ul v-for="(sub, subIndex) in framework.subs" :key="subIndex" class="ml-5 list-disc">
                    <li><a :href="sub.url" target="_blank" class="hover:text-hot-pink">{{sub.name}}</a></li>
                  </ul>
                </div>

              </div>
            </div>


            <div class="relative text-sm text-gray-300 font-medium mt-4" v-show="technology.subs">
              <h2 class="font-semibold">Libs:</h2>
              <ul v-for="(sub, index) in technology.subs" :key="index" class="ml-5 list-disc">
                <li><a :href="sub.url" target="_blank" class="hover:text-hot-pink">{{sub.name}}</a></li>
              </ul>
            </div>
          </div>
        </blockquote>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Technologies.vue"
}
</script>

<style scoped>

</style>

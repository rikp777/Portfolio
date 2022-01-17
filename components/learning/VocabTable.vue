<template>
  <div>
    <section class="antialiased bg-gray-800 text-gray-300 px-4">
      <header class="px-5 py-4 border-b border-gray-100">
        <h2 class="font-semibold text-gray-800">Vocab {{words.length}} words</h2>
      </header>
      <form class="w-full max-w-lg">
        <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2" for="grid-first-name">
            From language
          </label>
          <t-select
            class="text-gray-300 placeholder-gray-400 bg-gray-800"
            placeholder="Select from"
            :options="toSelect"
            v-model="from"
            variant="demo"
          ></t-select></div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2" for="grid-last-name">
            To language
          </label>
          <t-select
            class="text-gray-300 placeholder-gray-400 bg-gray-800"
            placeholder="Select to"
            :options="fromSelect"
            v-model="to"
            variant="demo"
          ></t-select>
        </div>
      </div>
      </form>
      <div class="p-3" v-if="to && from">
        <div class="overflow-x-auto">
          <table class="hidden lg:block md:table-auto md:w-full">
            <thead class="text-xs font-semibold uppercase text-gray-300 bg-gray-900">
              <tr>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-left">{{ from }}</div>
                </th>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-left">{{ to }}</div>
                </th>
              </tr>
            </thead>
            <tbody class="text-sm divide-y divide-gray-100">
            <tr v-for="(word,index) in words" class="invisible md:visible">
              <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="w-20 h-20 flex-shrink-0 mr-5 sm:mr-3">
                    <nuxt-img preload :src="word.src" quality="80" width="90" height="90" class="hover:scale-125 object-cover h-20 w-20 rounded-full"/>
                  </div>
                  <div class="font-medium text-gray-300">{{ word.languages.find(language => language.language == from).word }}</div>
                </div>
              </td>
              <td class="p-2 whitespace-nowrap">
                <div class="text-left">{{ word.languages.find(language => language.language == to).word }}</div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="sm:block md:block lg:hidden">
          <div class="grid md:grid-cols-2 gap-4 sm:grid-col-1">
            <template v-for="(word,index) in words">
              <div class="flex justify-center">
                <div class="rounded-lg bg-gray-800 shadow-lg">
                  <div class="grid grid-cols-3 md:flex-row md:max-w-xl ">
                    <div class="col-span-1 ">
                      <nuxt-img preload :src="word.src" quality="100" width="500" height="500" class="w-full md:h-40 h-96 pt-0 object-cover rounded-t-lg md:rounded-tl-lg md:rounded-r-none"/>
                    </div>
                    <div class="col-span-2 p-6 flex flex-col justify-start">
                      <div class="text-gray-300">
                        <div class="grid grid-cols-2 gap-4 text-gray-300 text-base mb-2">
                          <div>{{ from }}</div>
                          <div>{{ word.languages.find(language => language.language == from).word }}</div>
                        </div>
                        <div class="grid grid-cols-2 gap-4 text-gray-300 text-base mb-2">
                          <div>{{ to }}</div>
                          <div>{{ word.languages.find(language => language.language == to).word }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import words from "~/static/languages/vocab/vocab/words";
export default {
  name: "VocabTable",
  meta: {
    header: "Vocabulary",
    subtext: "Learn french",
    meta: [
      {
        name: "keywords",
        content: "french, words, german, vocabulary, verbs, adjectives, nouns"
      },
      {
        name: "description",
        content: "Find more than a thousand verbs, adjectives and nouns in French."
      }
    ],
  },
  data() {
    return {
      words: words,
      from: 'en',
      to: "fr",
      languages: ['en', 'nl', 'fr', 'de', 'it'],
      fromSelect: [],
      toSelect: []
    }
  },
  watch: {
    from(new_value, old_value) {
      this.fromSelect = this.languages.filter((value, index) => {
        return new_value !== value
      });
    },
    to(new_value, old_value) {
      this.toSelect = this.languages.filter((value, index) => {
        return new_value !== value
      });
    }
  },
  created() {
    this.toSelect = this.languages.filter((value, index) => {
      return this.to !== value
    });
    this.fromSelect = this.languages.filter((value, index) => {
      return this.from !== value
    });
  },
}
</script>

<style scoped>

</style>

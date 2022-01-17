<template>
  <div>
    <section class="antialiased bg-gray-800 text-gray-300 px-4">
      <header class="px-5 py-4 border-b border-gray-100">
        <h2 class="font-semibold text-gray-800">Vocab {{words.length}} words</h2>
      </header>
      <div class="p-3">
        <div class="overflow-x-auto">
          <table class="hidden lg:block md:table-auto md:w-full">
            <thead class="text-xs font-semibold uppercase text-gray-300 bg-gray-900">
              <tr>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-left">word</div>
                </th>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-left">french</div>
                </th>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-left">german</div>
                </th>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-left">nl</div>
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
                  <div class="font-medium text-gray-300">{{ word.languages.find(language => language.language == "en").word }}</div>
                </div>
              </td>
              <td class="p-2 whitespace-nowrap">
                <div class="text-left">{{ word.languages.find(language => language.language == "fr").word }}</div>
              </td>
              <td class="p-2 whitespace-nowrap">
                <div class="text-left">{{ word.languages.find(language => language.language == "de").word }}</div>
              </td>
              <td class="p-2 whitespace-nowrap">
                <div class="text-left">{{ word.languages.find(language => language.language == "nl").word }}</div>
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
                      <nuxt-img preload :src="word.src" quality="100" width="500" height="500" class="w-full h-96 pt-0 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:pt-10"/>

                    </div>
                    <div class="col-span-2 p-6 flex flex-col justify-start">
                      <h5 class="text-gray-300 text-xl font-medium mb-2">{{ word.languages.find(language => language.language == "en").word }}</h5>

                      <div class="text-gray-300">
                        <div class="grid grid-cols-2 gap-4 text-gray-300 text-base mb-2">
                          <div>French</div>
                          <div>{{ word.languages.find(language => language.language == "fr").word }}</div>
                        </div>
                        <div class="grid grid-cols-2 gap-4 text-gray-300 text-base mb-2">
                          <div>German</div>
                          <div>{{ word.languages.find(language => language.language == "de").word }}</div>
                        </div>
                        <div class="grid grid-cols-2 gap-4 text-gray-300 text-base mb-2">
                          <div>Dutch</div>
                          <div>{{ word.languages.find(language => language.language == "nl").word }}</div>
                        </div>
                      </div>

                      <div class="">
                        <div class="">

                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="my-2 mx-2 inline-block align-middle">
                    <span class="bg-gray-200 px-2 py-1 text-xs font-semibold text-gray-700">{{word.type}}</span>
                  </div>
                </div>
              </div>
<!--              <div class="max-w-lg mx-auto">-->
<!--                <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">-->
<!--                  <a href="#">-->
<!--                    <div class="w-80 h-96 relative">-->
<!--                      <div class="absolute inset-0 z-0">-->
<!--                        <img src="https://static.wikia.nocookie.net/jumanji/images/1/1b/Jumanji_2017_Poster.jpg/revision/latest/scale-to-width-down/1000?cb=20181023182751" alt="" srcset="" style="filter: blur(4px)" />-->
<!--                      </div>-->

<!--                      <div class="absolute inset-0 z-10">-->
<!--                        <div class="flex flex-col transform scale-75 space-y-4">-->
<!--                          <img src="https://static.wikia.nocookie.net/jumanji/images/1/1b/Jumanji_2017_Poster.jpg/revision/latest/scale-to-width-down/1000?cb=20181023182751" alt="" srcset="" />-->
<!--                          <div class="text-white text-2xl text-center">Jumanji</div>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--&lt;!&ndash;                    <div class="h-16 ml-auto">&ndash;&gt;-->
<!--&lt;!&ndash;                      <nuxt-img preload :src="word.src" quality="100" class= "border border-gray-100 shadow-sm w-full blur" />&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="">&ndash;&gt;-->
<!--                  </a>-->
<!--                  <div class="p-5 z-1">-->
<!--                    <a href="#">-->
<!--                      <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">Noteworthy technology acquisitions 2021</h5>-->
<!--                    </a>-->
<!--                    <p class="font-normal text-gray-700 mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>-->
<!--                    <a class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">-->
<!--                      Read more-->
<!--                    </a>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="">-->
<!--                <div class="rounded shadow-lg block sm:w-1/2 md:w-full">-->
<!--                <div class="flex justify-center">-->
<!--                  <nuxt-img preload :src="word.src" quality="100" width="150" height="150" class="hover:scale-125 hover:z-40 object-cover"/>-->
<!--                </div>-->
<!--                <div class="px-6 py-4">-->
<!--                  <div class="">-->
<!--                    <div class="">-->
<!--                      <div class="font-bold text-xl mb-2">-->
<!--                        {{ word.languages.find(language => language.language == "en").word }}-->
<!--                      </div>-->
<!--                      <div>-->
<!--                        <div class="grid grid-cols-2 gap-4 text-gray-300 text-base mb-2">-->
<!--                          <div>French</div>-->
<!--                          <div>{{ word.languages.find(language => language.language == "fr").word }}</div>-->
<!--                        </div>-->
<!--                        <div class="grid grid-cols-2 gap-4 text-gray-300 text-base mb-2">-->
<!--                          <div>German</div>-->
<!--                          <div>{{ word.languages.find(language => language.language == "de").word }}</div>-->
<!--                        </div>-->
<!--                        <div class="grid grid-cols-2 gap-4 text-gray-300 text-base mb-2">-->
<!--                          <div>Dutch</div>-->
<!--                          <div>{{ word.languages.find(language => language.language == "nl").word }}</div>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->

<!--                </div>-->
<!--                <div class="px-6 pt-4 pb-2">-->
<!--                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{word.type}}</span>-->
<!--                </div>-->
<!--              </div>-->
<!--              </div>-->
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
      words: words
    }
  },
}
</script>

<style scoped>

</style>

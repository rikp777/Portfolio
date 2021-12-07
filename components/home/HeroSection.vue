<template>
  <div class="relative bg-gray-800 overflow-hidden">
    <div class="relative">
      <main class="">
        <div class="mx-auto py-8 max-w-7xl border-l border-r border-dashed border-gray-700">
          <div data-aos="zoom-in" class="lg:grid lg:grid-cols-12">
            <div class="px-4 sm:px-6 lg:border-r lg:border-dashed lg:border-gray-700 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
              <div>
                <nuxt-link v-if="$config.projects.enabled" :to="localePath('/projects')" class="group inline-flex hover:bg-black items-center text-white bg-gray-900 rounded-full p-0.5 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
                  <span class="px-3 py-0.5 text-white text-xs font-semibold leading-5 tracking-wide bg-indigo-600 rounded-full">{{ $t('hero.iBlogTech') }}</span>
                  <span class="ml-4 text-xs">{{$t('hero.haveALook')}}</span>
                  <svg class="transition duration-500 transform block group-hover:rotate-180 hover-arrow ml-2 w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </nuxt-link>
                <h1 class="mt-4 text-3xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-3xl xl:text-3xl">
                  <span class="md:block">{{ $t('hero.friendlyNeighborhood') }}</span>
                  <div>
                    <vue-typer :text="$t('hero.words')"></vue-typer>
                  </div>
                </h1>
                <p class="mt-3 text-base text-gray-300 sm:mt-5">
                  {{ $t('hero.description') }}
                </p>
                <p v-if="$config.internships.enabled" class="mt-8 text-sm text-white lowercase tracking-wide font-semibold sm:mt-10 uppercase ">{{ $t('internships.title') }}</p>
                <div v-if="$config.internships.enabled" class="mt-5 w-full sm:mx-auto lg:ml-0">
                  <div class="flex flex-wrap space-x-1 items-start items-center space-x-4">

                    <div v-for="(firm, index) in $config.internships.meta" :key="index">
                      <a :ref="`btnRef-${index}`" :href="firm.url" target="_blank" class="flex items-center justify-center" v-on:mouseenter="toggleTooltip(index)" v-on:mouseleave="toggleTooltip(index)">
                        <img :src="firm.src" class="h-8 rounded-sm sm:h-9 mr-5 " :alt="firm.name"/>
                      </a>
                      <small class="text-gray-300 hidden md:inline-block" v-text="firm.year"></small>
                      <div class="hidden md:inline-block">
                        <div :ref="`tooltipRef-${index}`" v-bind:class="{'hidden': !tooltipShow[index], 'md:block': tooltipShow[index]}" class=" bg-indigo-600 bg-opacity-90 border-0 ml-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg">
                        <div>
                          <div class="bg-indigo-600 bg-opacity-90 text-white opacity-75 font-semibold p-3 mb-0 border-b border-solid border-blueGray-100 uppercase rounded-t-lg">
                            {{firm.name}}
                          </div>
                          <div class="text-white p-3">
                            {{ firm.period }}
                          </div>
                          <div class="text-white p-3" v-show="firm.description">
                            {{firm.description }}
                          </div>
                          <div class="text-white p-3" v-show="firm.grade">
                            Final grade: {{ firm.grade }}
                          </div>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-8 px-5 sm:mt-16 lg:mt-0 lg:col-span-6">
              <div class="flex-shrink-0 w-full sm:mx-auto flex flex-1 items-center justify-center rounded-lg sm:overflow-hidden">
                <img class="rounded-md h-80" :src="$config.image" :alt="$config.name">
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { createPopper } from "@popperjs/core";
export default {

  data() {
    return {
      tooltipShow: []
    }
  },
  methods: {
    toggleTooltip(index) {
      console.log(this.tooltipShow[index])
      if(this.tooltipShow[index]){
        this.$set(this.tooltipShow, index, false)
      } else {
        this.$set(this.tooltipShow, index, true)
        createPopper(this.$refs[`btnRef-${index}`][0], this.$refs[`tooltipRef-${index}`][0],{
          placement: "right",
          modifiers: [
            {
              name: 'preventOverflow',
              options: {
                mainAxis: true,
                altAxis: true,
                altBoundary: true,
                tether: false,
              },
            },
            {
              name: 'offset',
              options: {
                offset: [0, 12],
              },
            },
          ],
        });
      }
    }
  },
  created() {
    if(this.tooltipShow.length == 0) {
      this.$config.internships.meta.forEach((item, index) => {
        this.tooltipShow[index] = false
      })
    }
  }
}
</script>

<style scoped>
>>> .vue-typer .custom.char {
  @apply text-indigo-600;
}
>>> .vue-typer .custom.char.selected {
  @apply bg-indigo-600 text-white;
}

>>> .vue-typer .custom.caret {
  width: 5px;
  @apply bg-indigo-600;
}

.hover-arrow {
  position: relative;
  stroke-width: 1px;
}
</style>

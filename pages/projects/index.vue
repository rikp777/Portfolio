<template>
  <div class="relative max-w-7xl border-r border-l border-dashed border-gray-700 py-6 mx-auto">

    <div v-if="current === 'minor' || current === 'cyber'" >
    </div>
    <div v-else>
      <div data-aos="fade-up" class="text-center">
        <h2 class="text-2xl tracking-tight font-extrabold text-gray-200">
          {{ $t('projects.header') }}
        </h2>
        <span class="mx-auto text-gray-300">- 📓✍🏽 -</span>
        <p class="mt-2 px-2 max-w-2xl mx-auto text-sm leading-7 text-gray-400">
          {{ $t('projects.subtext') }}
        </p>
      </div>
    </div>


    <div class="mt-5 gap-4 mx-4 grid max-w-none lg:grid-cols-2">
      <div data-aos="zoom-in" class="select-none px-4 items-center justify-center sm:justify-start overflow-hidden flex pt-4 border-b-2 pb-5">
        <span class="text-gray-300 mr-5 hidden md:inline-block">{{ $t('projects.technologies') }}</span>
        <nav class="flex flex-wrap items-center justify-center flex-row space-x-2 sm:space-x-4" aria-label="Tabs">
          <button @click="current = tech" :class="{ 'bg-gray-900 text-gray-300': tech === current }" v-for="tech in techs" :key="tech"
                  class="flex text-gray-300 focus:outline-none focus:ring-transparent focus:ring-offset-transparent hover:text-hot-pink px-3 py-2 font-medium text-sm rounded-xl">
            {{ tech }}
          </button>
        </nav>
      </div>
      <div data-aos="zoom-in" class="select-none px-4 items-center justify-center sm:justify-start overflow-hidden flex pt-4 border-b-2 pb-5">
        <span class="text-gray-300 mr-5 hidden md:inline-block">{{ $t('projects.categories') }}</span>
        <nav class="flex flex-wrap items-center justify-center flex-row space-x-2 sm:space-x-4" aria-label="Tabs">
          <button @click="current = category" :class="{ 'bg-gray-900 text-gray-300': category === current }" v-for="category in categories" :key="category"
                  class="flex text-gray-300 focus:outline-none focus:ring-transparent focus:ring-offset-transparent hover:text-hot-pink px-3 py-2 font-medium text-sm rounded-xl">
            {{ category }}
          </button>
        </nav>
      </div>

      <div v-if="current === 'minor' || current === 'cyber'">
        <div class="">
          <div class="mt-5 h-auto py-10 px-10 w-3/3 bg-gray-900 flex flex-col space-y-5 mx-auto rounded-3xl shadow-xl hover:rotate-1 transition-transform">
            <h1 class="font-medium text-white text-xl tracking-wide">MINOR</h1>
            <p class="font-normal tracking-wide text-base text-white lg:w-4/5">{{ $t('projects.minor.subtext') }}</p>
            <div class="flex flex-col">
              <backquotes class="font-normal text-white text-sm tracking-wider">Rik Peeters</backquotes>
              <backqoutes class="font-normal text-white text-sm tracking-wider">Fontys ICT</backqoutes>
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <div class="mt-5 h-auto py-20 px-10 w-3/3 bg-gray-900 flex flex-col space-y-5 mx-auto rounded-3xl shadow-xl hover:rotate-1 transition-transform">
          <h1 class=" font-medium text-white text-xl tracking-wide">Introduction to the category {{ current }}</h1>
          <p class="font-normal tracking-wide text-xl text-white lg:w-4/5">blablabla</p>
        </div>
      </div>
    </div>

    <div class="flex justify-end items-center my-3">
      <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
        <input v-model="showImage" type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
        <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
      </div>
      <label for="toggle" class="text-xs text-white mr-5">Show image</label>
    </div>
    <div data-aos="zoom-in" class="mt-5 gap-4 mx-4 grid max-w-none lg:grid-cols-3">
      <ProjectCard class="hover:-rotate-12" v-for="project in projectsBy" :key="project.slug" :project="project" :showImage="showImage"/>
    </div>

  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `📚 ${this.$t('nav.projects')} -- ${this.$config.name}`
    }
  },
  computed: {
    minor(){
      if(current == "minor"){
        return true
      }
      return false
    },
    techs() {
      let techs = []
      console.log("techs")
      this.projects.forEach((project) => {
        if(project.tech){
          project.tech.forEach((tech) => {
            if (tech.name.trim() !== "") {
              techs.push(tech.name.trim())
            }
          })
        }
      })
      console.log(techs)
      return [this.ALL, ...new Set(techs)]
    },
    categories() {
      let categories = []
      this.projects.forEach((project) => {
        if(project.category){
          project.category.forEach((category) => {
            if (category.name.trim() !== "") {
              categories.push(category.name.trim())
            }
          })
        }
      })
      return [this.ALL, ...new Set(categories)]
    },
    projectsBy() {
      if (this.current === this.ALL)
        return this.projects
      console.log("filter by", this.current)
      let data = []
      this.projects.forEach(project => {
        if (project.tech) {
          project.tech.forEach(tech => {
            if (tech.name.includes(this.current)) {
              console.log("tech name found", tech.name)
              data.push(project)
            } else {
              console.log("tech not found", this.current)
            }
          })
        }
      })
      this.projects.forEach(project => {
        if(project.category){
          project.category.forEach(category => {
            console.log(project)
            console.log(category.name + " " + this.current)
            if(category.name == this.current ){
              console.log("category name found", category.name)
              data.push(project)
            }else{
              console.log("category not found", this.current)
            }
          })
        }
      })
      // let first = this.projects.filter(project => project.tech.find(tech => tech.name.includes(this.current)))
      // if(first.length == 0){
      //   console.log("category")
      //   console.log(this.projects)
      //   data = this.projects.filter(project => project.category.find(category => category.name.includes(this.current)))
      // }else{
      //   console.log("tech")
      //   console.log(first)
      //   data = first
      // }
      return data
    }
  },
  data() {
    return {
      current: this.$t('projects.all'),
      ALL: this.$t('projects.all'), // exporting it to template
      file: "../static/unox.mp3",
      showImage: false
    }
  },
  async asyncData({ $content }) {
    const fetchDocsLabel = 'fetchAllProjects'
    console.time(fetchDocsLabel)
    const projects = await $content('projects', { deep: true})
      .without(['body', 'toc'])
      .sortBy('id', 'asc')
      .fetch()
    console.log("Hierr")
    console.log(projects)
    console.timeEnd(fetchDocsLabel)
    return {
      projects
    }
  }
}
</script>

<style>
/* CHECKBOX TOGGLE SWITCH */
/* @apply rules for documentation, these do not work as inline style */
.toggle-checkbox:checked {
  @apply: right-0 border-green-400;
  right: 0;
  border-color: #68D391;
}
.toggle-checkbox:checked + .toggle-label {
  @apply: bg-green-400;
  background-color: #68D391;
}
</style>

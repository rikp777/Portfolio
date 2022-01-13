<template>
  <div class="max-w-7xl mx-auto border-l border-r border-dashed border-gray-700 pt-4 pb-6 px-4">
    <div class="max-w-prose text-center mx-auto pb-4">
      <p class="text-xs leading-6 text-indigo-600 font-semibold tracking-wide lowercase">{{ $t('studies.subtext') }}</p>
      <a :href="`https://linkedin.com/in/`" target="_blank" rel="noreferrer" class="mt-2 text-3xl hover:text-hot-pink leading-8 font-extrabold tracking-tight text-gray-500">{{ $t('studies.header') }}</a>
    </div>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div v-for="(study, index) in studies" :key="`rec-${index}`" class="relative h-full bg-gray-900 rounded-lg shadow-lg text-base w-full">
        <blockquote class="relative">
          <div class="rounded-t-lg px-5 py-5 sm:px-8 sm:py-8y">
            <div class="flex flex-row">
              <a :href="study.url" target="_blank" rel="noreferrer">
                <cite class="flex items-center rounded-b-lg not-italic">
                  <div class="flex-shrink-0 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mr-4" v-show="study.src">
                    <img class=" h-8" :src="study.src" alt="Varun">
                  </div>
                  <span class="text-gray-400 font-semibold py-2" >
                    <strong class="text-gray-200 font-semibold" v-show="!study.src">{{ study.name}}</strong>
                    {{getDateFormat(study.subs[study.subs.length -1].startAt).format('MMM YYYY')}} - {{ showStringDiffTotal(study.subs) }}
                  </span>
                </cite>
              </a>
            </div>
            <div class="relative text-sm text-gray-300 font-medium mt-4" v-show="study.description">
              <svg class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-800" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p class="relative">
                {{ $t(`descriptions.${study.description}`) }}
              </p>
            </div>
            <div class="relative text-sm text-gray-300 font-medium mt-4">
              <template v-for="(sub, index) in study.subs">
                <div class="content my-3">
                  <div class="text-white font-bold">
                    {{sub.title}}
                  </div>
                  <div class="text-white  text-xs">
                    {{ $t(`workTypes.${sub.type}`) }}
                  </div>
                  <div class="text-gray-200 ">
                    {{ getDateFormat(sub.startAt).format("MMMM YYYY") }} -
                    <template>
                              <span v-if="sub.endAt == null">
                                {{ $t('present') }}
                              </span>
                      <span v-else>
                                {{ getDateFormat(sub.endAt).format("MMMM YYYY") }}
                              </span>
                    </template>
                    |
                    <span>
                              {{showStringDiff(sub)}}
                            </span>
                  </div>
                  <div class="text-sm text-gray-300 font-medium mt-2" v-show="sub.description">
                    {{ $t(`descriptions.${sub.description}`) }}
                  </div>
                </div>
              </template>
            </div>
          </div>
        </blockquote>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      studies: []
    }
  },
  methods: {
    sortStudies(){
      let array = this.$config.studies.meta.sort((a,b) => {
        let aStartAt = b.subs[b.subs.length -1].startAt
        let bStartAt = a.subs[a.subs.length -1].startAt
        return new Date(aStartAt) - new Date(bStartAt)
      })
      this.studies = array
    },
    getDateFormat(dateString){
      let date = this.$moment()
      if(dateString != null){
        date = this.$moment(dateString, 'DD-MM-YYYY')
      }

      return date
    },
    showStringDiffTotal(possitions){
      var a = this.getDateFormat(possitions[possitions.length -1].endAt)
      var b = this.getDateFormat(possitions[possitions.length -1].startAt)

      var years = a.diff(b, 'year');
      b.add(years, 'years');

      var months = a.diff(b, 'months');
      b.add(months, 'months');

      if(years == 0){
        return `${months} ${this.$t(`monthsShort`)}`
      }
      if(months == 0){
        return `${years} ${this.$t(`yearsShort`)}`
      }
      return `${years} ${this.$t(`yearsShort`)} ${months} ${this.$t(`monthsShort`)} `
    },
    showStringDiff(possition){
      var a = this.getDateFormat(possition.endAt)
      var b = this.getDateFormat(possition.startAt)

      var years = a.diff(b, 'year');
      b.add(years, 'years');

      var months = a.diff(b, 'months');
      b.add(months, 'months');

      if(years == 0){
        return `${months} ${this.$t(`monthsShort`)}`
      }
      if(months == 0){
        return `${years} ${this.$t(`yearsShort`)}`
      }
      return `${years} ${this.$t(`yearsShort`)} ${months} ${this.$t(`monthsShort`)}`
    }
  },
  created() {
    this.sortStudies()
  }
}
</script>

<style scoped>

</style>

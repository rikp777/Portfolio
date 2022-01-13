<template>
  <div class="max-w-7xl mx-auto border-l border-r border-dashed border-gray-700 pt-4 pb-6 px-4">
    <div class="max-w-prose text-center mx-auto pb-4">
      <p class="text-xs leading-6 text-indigo-600 font-semibold tracking-wide lowercase">{{ $t('workedAt.subtext') }}</p>
      <a :href="`https://linkedin.com/in/`" target="_blank" rel="noreferrer" class="mt-2 text-3xl hover:text-hot-pink leading-8 font-extrabold tracking-tight text-gray-500">{{ $t('workedAt.header') }}</a>
    </div>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div v-for="(company, index) in companies" :key="`rec-${index}`" class="relative h-full bg-gray-900 rounded-lg shadow-lg text-base w-full">
        <blockquote class="relative">
          <div class="rounded-t-lg px-5 py-5 sm:px-8 sm:py-8y">
            <div class="relative" v-if="!company.profession">
              <div class="absolute top-0 right-0">
<!--                <span class="inline-flex items-center justify-end px-2 py-1 mr-2 text-xs font-bold leading-none text-red-200 bg-red-800 rounded-full show md:hidden">non prof</span>-->

                <span  class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-200 bg-red-800 rounded-full hidden md:block">non prof</span>
              </div>
            </div>
            <div class="flex flex-row">
              <a :href="company.url" target="_blank" rel="noreferrer">
                <cite class="flex items-center rounded-b-lg not-italic">
                  <div class="flex-shrink-0 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mr-4" v-show="company.src">
                    <img class=" h-8" :src="company.src" alt="Varun">
                  </div>
                  <span class="text-gray-400 font-semibold py-2" >
                    <strong class="text-gray-200 font-semibold" v-show="!company.src">{{ company.name}}</strong>
                    {{getDateFormat(company.positions[company.positions.length -1].startAt).format('MMM YYYY')}} - {{ showStringDiffTotal(company.positions) }}
                  </span>

                </cite>
                </a>
            </div>

            <div class="relative text-sm text-gray-300 font-medium mt-4" v-show="company.description">
              <svg class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-800" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p class="relative">
                {{ $t(`descriptions.${company.description}`) }}
              </p>
            </div>
            <div class="relative text-sm text-gray-300 font-medium mt-4">
              <template v-for="(position, index) in company.positions">
                <div class="content my-3">
                  <div class="text-white font-bold">
                    {{position.title}}
                  </div>
                  <div class="text-white  text-xs">
                    {{ $t(`workTypes.${position.type}`) }}
                  </div>
                  <div class="text-gray-200 ">
                    {{ getDateFormat(position.startAt).format("MMMM YYYY") }} -
                    <template>
                              <span v-if="position.endAt == null">
                                {{ $t('present') }}
                              </span>
                      <span v-else>
                                {{ getDateFormat(position.endAt).format("MMMM YYYY") }}
                              </span>
                    </template>
                    |
                    <span>
                              {{showStringDiff(position)}}
                            </span>
                  </div>
                  <div class="text-sm text-gray-300 font-medium mt-2" v-show="position.description">
                    {{ $t(`descriptions.${position.description}`) }}
                  </div>
                </div>
              </template>
            </div>
          </div>
          <div class="flex justify-end m-3" v-if="!company.profession">
            <span class="inline-flex items-center justify-end px-2 py-1 mr-2 text-xs font-bold leading-none text-red-200 bg-red-800 rounded-full show md:hidden">non prof</span>
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
      companies: []
    }
  },
  methods: {
    sortCompanies(){
      let array = this.$config.workedAt.meta.sort((a,b) => {
        let aStartAt = b.positions[b.positions.length -1].startAt
        let bStartAt = a.positions[a.positions.length -1].startAt
        return new Date(aStartAt) - new Date(bStartAt)
      })
      this.companies = array
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
      var b = this.getDateFormat(possitions[0].startAt)

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
      return `${years} ${this.$t(`yearsShort`)} ${months} ${this.$t(`monthsShort`)} `
    }
  },
  created() {
    this.sortCompanies()
  }
}
</script>

<style scoped>

</style>

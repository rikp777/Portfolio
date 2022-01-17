<template>
  <div>
    <LearningDashboard />
  </div>
</template>

<script>
import LearningDashboard from "~/pages/learning/language/LearningDashboard";
export default {
  components: {LearningDashboard},
  head() {
    return {
      title: `👀 ${this.$t('nav.languages')} -- ${this.$config.name}`
    }
  },
}
</script>

<style scoped>

</style>

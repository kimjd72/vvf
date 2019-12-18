<template>
  <v-card>
    <v-card-actions>
      <v-btn flat color="primary" @click="start">프로그레스바 시작</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  date () {
    return {
    }
  },
  methods: {
    start () {
      console.log('start')
      this.$store.commit('setLoading', true)
      setTimeout(() => {
        this.$store.commit('setLoading', false)
      }, 2000)
    }
  }
}
</script>

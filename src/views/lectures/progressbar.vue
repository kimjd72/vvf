<template>
  <v-card>
    <v-card-actions>
      <v-btn flat color="primary" @click="start">프로그레스바 시작</v-btn>
      <v-btn flat color="primary" @click="end">프로그레스바 종료</v-btn>
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
      this.$Progress.start()
    },
    end () {
      console.log('end')
      this.$Progress.finish()
    }
  }
}
</script>

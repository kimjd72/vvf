<template>
    <v-card>
        <my-son v-for="i in 3" :key="i"
            :name="i" @move="onMove"></my-son>
        <my-daughter></my-daughter>
        <v-card-actions>
            <v-btn color="success" @click="change">제목 변경</v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
import MySon from '@/components/mySon'
import MyDaughter from '@/components/myDaughter'

export default {
  components: {
    MySon, MyDaughter
  },
  methods: {
    onMove (payload) {
      console.log(payload)
    },
    change () {
      // does not work
      this.$global = 'asdfasdf'
    }
  }
}
</script>

<template>
    <v-card>
        <v-text-field
            v-model="title"
            label="제목"
        ></v-text-field>
        <v-btn color="success" @click="change">change title</v-btn>
    </v-card>
</template>
<script>
export default {
  data () {
    return {
      title: ''
    }
  },
  methods: {
    change () {
      console.log('change')
      this.$store.commit('setTitle', this.title ? this.title : 'untitled')
    }
  }
}
</script>

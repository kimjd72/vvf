<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs12>
        <v-toolbar flat transparent>axios eg</v-toolbar>
      </v-flex>
      <v-flex xs3>
        <v-card>
          <v-card-title primary-title>create</v-card-title>
          <v-card-text>
            <v-textarea outline v-model="textCreate"></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="primary" @click="create">submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card>
          <v-card-title primary-title>read</v-card-title>
          <v-card-text>
            <v-textarea outline v-model="textRead"></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="primary" @click="read">submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card>
          <v-card-title primary-title>update</v-card-title>
          <v-card-text>
            <v-textarea outline v-model="textUpdate"></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="primary" @click="update">submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card>
          <v-card-title primary-title>delete</v-card-title>
          <v-card-text>
            <v-textarea outline v-model="textDelete"></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="primary" @click="del">submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      textCreate: '',
      textRead: '',
      textUpdate: '',
      textDelete: ''
    }
  },
  methods: {
    async create () {
      const r = await this.$axios.post('http://localhost:5000/vvvf-f26a8/us-central1/test/123')
      this.textCreate = r.data
    },
    async read () {
      const r = await this.$axios.get('http://localhost:5000/vvvf-f26a8/us-central1/test')
      this.textRead = r.data
    },
    async update () {
      const r = await this.$axios.put('http://localhost:5000/vvvf-f26a8/us-central1/test/putparam')
      this.textUpdate = r.data
    },
    async del () {
      const r = await this.$axios.delete('http://localhost:5000/vvvf-f26a8/us-central1/test/deleteparam')
      this.textDelete = r.data
    }
  }
}
</script>

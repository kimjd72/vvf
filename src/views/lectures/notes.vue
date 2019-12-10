<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs5>
        <v-text-field v-model="title" label="title"></v-text-field>
      </v-flex>
      <v-flex xs5>
        <v-text-field v-model="content" label="content"></v-text-field>
      </v-flex>
      <v-flex xs2>
        <v-btn color="success" @click="post(id)">{{ id ? '수정' : '등록' }}</v-btn>
      </v-flex>
    </v-layout>
    <v-data-iterator
      :items="items"
      :rows-per-page-items="rowsPerPageItems"
      :pagination.sync="pagination"
      content-tag="v-layout"
      row
      wrap
    >
      <template v-slot:item="props">
        <v-flex xs12 sm6 md4>
          <v-card @click="onNote(props.item)">
            <v-card-title>
              <h4>{{ props.item.title }} ({{ props.item.id }})</h4>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>{{ props.item.content }}</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" flat @click="del(props.item.id)">삭제</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </template>
    </v-data-iterator>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    rowsPerPageItems: [4, 8, 12],
    pagination: {
      rowsPerPage: 4
    },
    items: [],
    id: '',
    title: '',
    content: ''
  }),
  mounted () {
    this.get()
  },
  methods: {
    onNote (item) {
      this.title = item.title
      this.content = item.content
      this.id = item.id
    },
    async post (id) {
      const { title, content } = this
      if (id) {
        await this.$firebase.firestore().collection('notes').doc(id).set({ title, content })
        this.get()
      } else {
        await this.$firebase.firestore().collection('notes').add({
          title, content
        })
      }
      this.id = ''
      this.title = ''
      this.content = ''
      this.get()
    },
    async get () {
      const snapshot = await this.$firebase
        .firestore().collection('notes').get()
      this.items = []
      snapshot.forEach(v => {
        const { title, content } = v.data()
        this.items.push({ title, content, id: v.id })
      })
    },
    async del (id) {
      await this.$firebase.firestore().collection('notes').doc(id).delete()
      this.get()
    }
  }
}
</script>

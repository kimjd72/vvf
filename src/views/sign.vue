<template>
  <v-card>
    <v-card-title>로그인</v-card-title>
    <v-card-text>
      <v-text-field label="email" v-model="email"></v-text-field>
      <v-text-field label="password" v-model="password" type="password"></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="signInEmail">
        <v-icon>mdi-login</v-icon>로그인
      </v-btn>
      <v-btn color="primary" @click="signInGoogle">
        <v-icon>mdi-google</v-icon>구글로그인
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async signInGoogle () {
      var provider = new this.$firebase.auth.GoogleAuthProvider()
      this.$firebase.auth().languageCode = 'ko'
      const r = await this.$firebase.auth().signInWithPopup(provider)
      const token = r.credential.accessToken
      const user = r.user
      console.log(token, user)
    },
    async signInEmail () {
      const { email, password } = this
      const r = await this.$firebase.auth().signInWithEmailAndPassword(email, password)
      console.log(r)
    }
  }
}
</script>

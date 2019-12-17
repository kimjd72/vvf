<template>
  <v-card flat color="transparent" fluid>
    <v-card-title primary-title>
      <span class="title">로그인</span>
      <v-spacer></v-spacer>
      <span class="caption">
        또는
        <a href="javascript:;" class="body-1" @click="signOut">회원가입</a>
      </span>
    </v-card-title>
    <v-card-title primary-title>
      <v-btn color="primary" block class="pl-2" @click="signInGoogle">
        <v-icon>mdi-google</v-icon>
        <v-divider vertical class="mx-1"></v-divider>
        <v-spacer></v-spacer>
        <span>Google 계정으로 로그인</span>
        <v-spacer></v-spacer>
      </v-btn>
    </v-card-title>
    <v-container grid-list-md fluid>
      <v-layout row wrap>
        <v-flex xs5>
          <v-divider class="mt-2"></v-divider>
        </v-flex>
        <v-flex xs2 style="text-align: center;">
          또는
        </v-flex>
        <v-flex xs5>
          <v-divider class="mt-2"></v-divider>
        </v-flex>
      </v-layout>
    </v-container>
    <v-form v-model="valid" ref="form" lazy-validation>
      <v-card-text>
          <v-text-field
              label="이메일"
              v-model="email"
          >
          </v-text-field>
          <v-text-field
              label="비밀번호"
              type="password"
              v-model="password"
          >
          </v-text-field>
      </v-card-text>
    </v-form>
    <v-card-actions>
        <v-checkbox label="로그인 정보저장"></v-checkbox>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="signInEmail">이메일 로그인</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data () {
    return {
      valid: false,
      email: '',
      password: ''
    }
  },
  methods: {
    async signInGoogle () {
      var provider = new this.$firebase.auth.GoogleAuthProvider()
      this.$firebase.auth().languageCode = 'ko'
      const r = await this.$firebase.auth().signInWithPopup(provider)
      if (r && r.user) {
        console.log('login success and move home')
        this.$router.push('/')
      }
    },
    async signInEmail () {
      const { email, password } = this
      await this.$firebase.auth().signInWithEmailAndPassword(email, password)
    },
    async signOut () {
      await this.$firebase.auth().signOut()
    }

  }

}
</script>

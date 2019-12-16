<template>
  <!-- <v-card>
    <v-card-title>로그인</v-card-title>
    <v-card-text>
      <v-text-field label="email" v-model="email"></v-text-field>
      <v-text-field label="password" v-model="password" type="password"></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="signInEmail">
        <v-icon>mdi-login</v-icon>메일로그인
      </v-btn>
      <v-btn color="primary" @click="signInGoogle">
        <v-icon>mdi-google</v-icon>구글로그인
      </v-btn>
      <v-btn color="primary" @click="signOut">
        <v-icon>mdi-logout</v-icon>로그아웃
      </v-btn>
    </v-card-actions>
  </v-card>-->
  <v-container grid-list-md>
    <v-layout row wrap align-center justify-center fluid>
      <v-flex sm6 class="hidden-sm-and-down">
        <v-img
          src="https://cfl.dropboxstatic.com/static/images/empty_states/sign-in-boulder-vfl2oGV4v.png"
        ></v-img>
      </v-flex>
      <v-flex xs12 sm6>
        <sign-in v-if="type === 'login'"></sign-in>
        <sign-up v-else></sign-up>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import SignIn from '@/components/auth/signIn'
import SignUp from '@/components/auth/signUp'

export default {
  components: { SignIn, SignUp },
  data () {
    return {
      email: '',
      password: '',
      type: 'login'
    }
  },
  methods: {
  }
}
</script>

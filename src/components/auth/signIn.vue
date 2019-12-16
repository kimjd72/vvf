<template>
  <v-card flat color="transparent">
    <v-card-title primary-title>
      <span class="title">로그인</span>
      <v-spacer></v-spacer>
      <span class="caption">
        또는
        <a href="javascript:;" class="body-1">회원가입</a>
      </span>
    </v-card-title>
    <v-card-title primary-title>
      <v-btn color="primary" block>
        <v-icon>mdi-google</v-icon>
        <v-divider vertical class="mx-2"></v-divider>
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
        <v-flex xs2>
          <span style="background: red;">또는</span>
        </v-flex>
        <v-flex xs5>
          <v-divider class="mt-2"></v-divider>
        </v-flex>
      </v-layout>
    </v-container>
    <v-form>
      <v-card-text>
          <v-text-field
              label="이메일"
          ></v-text-field>
          <v-text-field
              label="비밀번호"
          ></v-text-field>
      </v-card-text>
    </v-form>
    <v-card-actions>
        <v-checkbox label="로그인 정보저장"></v-checkbox>
        <v-spacer></v-spacer>
        <v-btn color="primary">로그인</v-btn>
    </v-card-actions>
  </v-card>
</template>

<template>
  <v-app v-if="$store.state.layoutType === 'basic'">
    <v-navigation-drawer
      app
      width="220"
      fixed
      :clipped="$vuetify.breakpoint.mdAndUp"
      v-model="drawer"
    >
      <v-list dense>
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon>mdi-home</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile>

        <v-list-group
          v-for="(item, index) in items"
          :key="'menu-' + index"
          :prepend-icon="item.icon"
          v-model="item.active"
          no-action
        >
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>{{item.title}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>

          <v-list-tile
            v-for="(subItem, subIndex) in item.subItems"
            :key="'menu-' + index + '-' + subIndex"
            :to="subItem.to"
          >
            <v-list-tile-content>
              <v-list-tile-title>{{subItem.title}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      v-if="$store.state.user"
      app
      color="blue darken-3"
      dark
      :clipped-left="$vuetify.breakpoint.mdAndUp"
      fixed
    >
      <v-toolbar-title>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span>{{ $store.state.user ? $store.state.user.displayName : '로그인 안함' }}</span>
        <!-- <span>{{ $store.state.token }}</span> -->
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="signOut">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
      <v-btn icon to="/myinfo">
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-toolbar>
    <v-toolbar v-else app color="blue darken-3" dark fixed>
      <v-toolbar-title>
        <span>{{ $store.state.title }}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="signOut">
        <v-icon>mdi-login</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <v-toolbar v-if="$store.state.user" color="transparent" flat>
        <v-toolbar-title>
          <span>코드관리</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <span class="caption">Home > 시스템 > 코드관리</span>
      </v-toolbar>
      <router-view></router-view>
    </v-content>

    <v-footer app dark height="auto">
      <v-card class="flex" flat tile>
        <v-card-actions
          class="grey darken-3 justify-center caption"
        >copyright © Since 2019 By. Gallery Hyundai. All rights reserved.</v-card-actions>
      </v-card>
    </v-footer>
  </v-app>
  <v-app v-else-if="$store.state.layoutType === 'empty'">
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      drawer: null,
      selectedMenu: null,
      items: [
        {
          title: '시스템',
          to: '',
          icon: 'mdi-vhs',
          subItems: [
            { title: '코드관리', to: '/code/list' },
            { title: '관리자메뉴관리', to: '/mngrmenu/list' },
            { title: '관리자권한관리', to: '/role/list' },
            { title: '관리자URL관리', to: '/mngrurl/list' },
            { title: '프론트메뉴관리', to: '/menu/list' },
            { title: '프론트URL관리', to: '/url/list' },
            { title: '다국어문자열관리', to: '/charst/list' }
          ]
        },
        {
          title: '관리자',
          to: '',
          icon: 'mdi-account',
          subItems: [
            { title: '관리자관리', to: '/mngr/list' },
            {
              title: '로그인기록',
              to: '/mngr-login/list',
              icon: 'mdi-file-tree'
            }
          ]
        },
        {
          title: '강좌',
          to: '',
          icon: 'mdi-account',
          subItems: [
            { title: '카드', to: '/lectures/card' },
            { title: '레이아웃', to: '/lectures/layout' },
            { title: '노트', to: '/lectures/notes' },
            { title: '액시오스', to: '/lectures/axios' },
            { title: '컴포넌트', to: '/lectures/mother' },
            { title: '뷰액스', to: '/lectures/vuex' }
          ]
        }
      ]
    }
  },
  methods: {
    async signOut () {
      await this.$firebase.auth().signOut()
    }
  }
}
</script>

<template>
  <v-app v-if="$store.state.layoutType === 'basic'">
    <!-- top toolbar, left menu and navigation drawer -->
    <app-header></app-header>

    <!-- contents -->
    <v-content>
      <v-toolbar v-if="$store.state.selectedMenu" color="transparent" flat>
        <v-toolbar-title>
          <span>{{ $store.state.selectedMenu.title }}</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <span class="caption">{{ $store.state.selectedMenu.titlePath }}</span>
      </v-toolbar>
      <router-view></router-view>
    </v-content>

    <!-- footer -->
    <app-footer></app-footer>

    <!-- loading bar -->
    <loading></loading>
  </v-app>
  <v-app v-else-if="$store.state.layoutType === 'empty'">
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import appHeader from '@/components/inc/appHeader.vue'
import appFooter from '@/components/inc/appFooter.vue'
import loading from '@/components/inc/loading.vue'

export default {
  name: 'App',
  components: { appHeader, appFooter, loading },
  data () {
    return {
      // drawer: null
    }
  },
  methods: {
    // async signOut () {
    //   await this.$firebase.auth().signOut()
    // }
  }
}
</script>

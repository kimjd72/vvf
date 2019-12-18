<template>
  <div>
    <!-- left menu and navigation drawer -->
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
          v-for="(item, index) in $store.state.menuList"
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

    <!-- top toolbar -->
    <v-toolbar app color="blue darken-3" dark :clipped-left="$vuetify.breakpoint.mdAndUp" fixed>
      <v-toolbar-title>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span>{{ $store.state.title }}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="signOut">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
      <v-btn icon to="/myinfo">
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-toolbar>

  </div>
</template>
<script>
export default {
  data () {
    return {
      drawer: null
    }
  },
  methods: {
    async signOut () {
      await this.$firebase.auth().signOut()
      this.$store.commit('logout')
    }

  }
}
</script>

<template>
  <v-list>
    <v-list-tile v-for="(item) in items" :key="item.title">
      <v-list-tile-avatar>
        <v-icon>{{item.icon}}</v-icon>
      </v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-title>{{item.title}}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>
<script>
export default {
  data () {
    return {
      items: [
        {
          icon: 'mdi-alert',
          title: 'Home'
        },
        {
          icon: 'mdi-alert',
          title: 'About'
        },
        {
          icon: 'mdi-alert',
          title: 'About'
        }
      ]
    }
  }
}　
</script>

<template>
<v-card>
    <v-card-title primary-title>
        <div>
            <h3 class="headline mb-0">mySon.vue </h3>
            <div>son-{{ name }}</div>
        </div>
    </v-card-title>
    <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="move(name)">Move</v-btn>
    </v-card-actions>
</v-card>
</template>
<script>
export default {
  props: ['name'],
  methods: {
    move (name) {
      this.$emit('move', { param1: name })
    }
  }
}
</script>

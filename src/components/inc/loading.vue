<template>
  <v-dialog v-model="$store.state.loading" fullscreen full-width>
    <v-container fluid fill-height style="background-color: rgba(128, 128, 128, 0.7);">
      <v-layout justify-center align-center>
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
      </v-layout>
    </v-container>
  </v-dialog>
</template>

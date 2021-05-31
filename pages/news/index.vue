<template>
  <v-container id="news">
    <h2>LATEST NEWS</h2>
    <v-row>
      <v-col cols="12" md="3">
        <div />
      </v-col>
      <v-col cols="12" md="7">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fkswrestlingcenter&tabs=timeline&width=500&height=900&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId"
          width="500"
          height="900"
          style="border:none;overflow:hidden;"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      </v-col>
      <v-col cols="12" md="2">
        <div />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  head () {
    return {
      title: 'Social Media'
    }
  }
}
</script>

<style>

</style>

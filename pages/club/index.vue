<template>
  <div class="container">
    <section id="about">
      <h2 class="flier">Folkstyle, Freestyle & Greco Training Club</h2>
      <hr>

      <div class="flier">
        <img src="../../assets/kctc/clubFlier.png">
      </div>

      <br><br><br>

      <v-carousel :show-arrows="false" :hide-delimiters="true" cycle>
        <v-carousel-item
          v-for="(pic, index) in pictures"
          :key="index"
          :src="pic.src"
        />
      </v-carousel>

      <br><br><br>

      <hr>
    </section>
    <div class="clr" />
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'KCTC Club'
    }
  },
  data () {
    return {
      pictures: [
        { id: 1, src: 'https://user-images.githubusercontent.com/73113073/113141220-0b6f8000-91ef-11eb-8c10-fe713300b54e.png' },
        { id: 2, src: 'https://user-images.githubusercontent.com/73113073/113141224-0ca0ad00-91ef-11eb-9f5e-10e7164e10db.png' },
        { id: 3, src: 'https://user-images.githubusercontent.com/73113073/113141213-090d2600-91ef-11eb-824a-902157e3b94d.png' }
      ]
    }
  }
}
</script>

<style scoped>
.flier {
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  width: 80%;
}
</style>

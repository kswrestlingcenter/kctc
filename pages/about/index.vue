<template>
  <div class="container">
    <section id="about">
      <h2>WHO WE ARE</h2>
      <hr>
      <v-carousel :show-arrows="false" cycle>
        <v-carousel-item
          v-for="(pic, index) in pictures"
          :key="index"
          :src="pic.src"
        />
      </v-carousel>
      <br><br><br>
      <p>KC Wrestling K.W.C. provides premium facilities for hosting Wrestling and M.M.A driven events. We provide premium venue services with a focus on innovating the user experience. **20 WRESTLING MATS** is the amount of space we are talking about. We aim to drive economic growth and and enhance the quality of wrestling life by providing facilities that are safe, versatile and active. Send us a message if you wish to know more.</p>
      <br>
      <hr>
    </section>
    <div class="clr" />
  </div>
</template>

<script>
// import infoQuery from '~/apollo/info'
export default {
  head () {
    return {
      title: 'About Us'
    }
  },
  data () {
    return {
      pictures: [
        { src: 'https://user-images.githubusercontent.com/73113073/103420070-3c420980-4b5b-11eb-9436-582c0314aec3.jpg' },
        { src: 'https://user-images.githubusercontent.com/73113073/103420074-3d733680-4b5b-11eb-8540-bc23c011f98b.png' },
        { src: 'https://user-images.githubusercontent.com/73113073/103420072-3cdaa000-4b5b-11eb-826f-00246d184e46.jpg' },
        { src: 'https://user-images.githubusercontent.com/73113073/103420073-3cdaa000-4b5b-11eb-9c03-c238eaf59856.jpg' }
      ]
      // facilityInfo: [],
      // query: ''
    }
  }
  // apollo: {
  //   facilityInfo: {
  //     prefetch: true,
  //     query: infoQuery
  //   }
  // }
}
</script>

<style scoped>

</style>

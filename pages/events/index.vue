<template>
  <div class="container">
    <section id="eventpage">
      <h2>UPCOMING EVENTS</h2>
      <hr>
      <br>
      <div v-if="events.length === 0">
        Currently no events to display
      </div>
      <div v-else class="eventbox">
        <div v-for="event of events" :key="event.id" class="eventcard">
          <img class="eventicon" :src="event.logoUrl">
          <h1>{{ event.name }}</h1>
          <div class="eventblurb">
            {{ event.date }}
            <br>
            <br>
            {{ event.description }}
            <br>
            <br>
          <a v-if="event.signup" :href="event.signup" target="__blank">
                  SIGN UP
                </a>
                <br>
          <a v-if="event.eventFlyer" :href="event.eventFlyer" target="__blank">
                  VIEW FLYER
                </a>
                <br>
        </div>
        </div>
        <br>
          <div>
          <!-- comment out until needed to create event page -->
          <!-- <div class="moreInfoButton" @click="$router.push(`/events/${event.id}`)">
            MORE INFO
          </div> -->
        </div>
      </div>
      <br>
      <br>
      <br>
      <hr>
    </section>
    <div class="clr" />
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Events'
    }
  },
  data () {
    return {
      events: [
        // { id: 1, name: 'KCTC Freestyle Open', date: '04/24/2021', logoUrl: '/assets/kctc/kctc_logo.png', eventFlyer: 'https://www.trackwrestling.com/tw/uploads/O-629539132-KCTC_Freestyle_&_Greco_1_-_Google_Docs.pdf', description: 'First annual KCTC freestyle tournament. Open to wrestlers ages 8 to 18. Girls and boys divisions.', signup: 'https://www.trackwrestling.com/registration/TW_Register.jsp?tournamentGroupId=195937132' },
        // { id: 2, name: 'KCTC Greco Open', date: '04/24/2021', logoUrl: '/assets/kctc/kctc_logo.png', eventFlyer: 'https://www.trackwrestling.com/tw/uploads/O-629539132-KCTC_Freestyle_&_Greco_1_-_Google_Docs.pdf', description: 'First annual KCTC greco tournament. Open to wrestlers ages 8 to 18.', signup: 'https://www.trackwrestling.com/registration/TW_Register.jsp?tournamentGroupId=195937132' },
        { id: 4, name: 'Winter Camps Summer Champs', date: '06/03/2021', eventFlyer: 'https://cdn3.sportngin.com/attachments/photo/8e72-158653761/winterChampsCamp_large.jpg', description: 'Featuring NCAA Champ Austin O\'Conner, 2021 NCAA AA Clay Lautt, & 2021 NCAA AA Zach Sherman', signup: 'https://kswrestlingcenter.sportngin.com/register/form/885516487' },
        { id: 3, name: 'Diamonds in the Rough', date: '06/18/2021', logoUrl: '/assets/kwclogo.png', eventFlyer: 'https://www.trackwrestling.com/tw/uploads/O-629255132-Copy_of_DNR_KWC-1_2.jpg', description: 'All girls divisions k-12.' + '\n' + 'Registration: $50 per wrestler until 3/18/21, $75 per wrestler after 3/18/21.', signup: 'https://www.trackwrestling.com/registration/TW_Register.jsp?tournamentGroupId=195846132' }
      ],
      query: ''
    }
  }
}
</script>

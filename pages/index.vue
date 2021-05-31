<template>
  <div>
    <section id="banner">
      <div id="biglogo">
        <div v-show="$vuetify.breakpoint.mdAndUp" />
        <span>Winning is the goal. <br><br>Wrestling is the journey.<br><br>Are you ready?</span>
        <img v-show="$vuetify.breakpoint.mdAndUp" src="../assets/KCTC-logo-black.jpg">
        <div v-show="$vuetify.breakpoint.mdAndUp" />
      </div>
    </section>
    <div class="twocolumn">
      <div id="leftside">
        <section>
          <iframe
                class="google-map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12421.17655703115!2d-94.7903587!3d38.8943885!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x892dbb21abb0db5a!2sKansas%20Wrestling%20Center!5e0!3m2!1sen!2sus!4v1609179719983!5m2!1sen!2sus"
                width="500"
                height="450"
                frameborder="0"
                style="border:0;"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              />
            <br>
            <br>
          <div>
            <h2>Upcoming Events</h2>
            <br>
            <div class="eventpreview">
              <div v-for="event of events" :key="event.id" class="eventcard">
                <img class="eventicon" :src="event.imageUrl">
                <h1>{{ event.name }}</h1>
                <div class="eventblurb">
                  {{ event.date }}
                  <br>
                </div>
                <NuxtLink to="/events" class="moreInfoButton" @click="$router.push(`/events/${event.id}`)">
                  MORE INFO
                </NuxtLink>
              </div>
            </div>
            <v-btn to="events" class=".button--grey">
              Go To Events Page
            </v-btn>
          </div>
        </section>
      </div>
        <section id="rightside">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fkswrestlingcenter&tabs=timeline&width=400&height=1000&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
                width="400"
                height="1000"
                style="border:none;overflow:hidden"
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
              </iframe>
        </section>
    </div>
    <section id="quickcontact">
      <div class="content">
        <h3>Stay in the know</h3>
        <br>
        <br>
        <v-form>
          <input v-model="visitorName" class="stayInKnow" type="text" name="name" placeholder="Enter name">
          <input v-model="visitorEmail" class="stayInKnow" type="email" name="email" placeholder="champ@yourEmail.com">
          <!-- <v-text-field
            label="Name"
            v-model="visitorName2"
          ></v-text-field>
          <v-text-field
            label="Email of Contact Person"
            type="email"
            v-model="visitorEmail2"
            :rules="emailRules"
            required
          ></v-text-field> -->
          <br>
          <v-btn name="submit" @click="submitInformation()">
            Join our mailing list!
          </v-btn>
        </v-form>
        <br>
        <br>
      </div>
      <br>
      <div class="clr" />
    <v-snackbar
      v-model="successfulSnackbar"
    >
      SUCCESSFULLY ADDED {{visitorEmail}} TO OUR MAILING LIST!!!

      <template v-slot:action="{ attrs }">
        <v-btn
          color="green"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-snackbar
      v-model="errorSnackbar"
    >
      {{errorMessage}}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="red"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    </section>
  </div>
</template>

<script>
// import eventsQuery from '~/apollo/events'
// import newsQuery from '~/apollo/news'
import Joi from 'joi'
export default {
  // async created () {
  //   try {
  //     this.events = await this.$axios.$get('/events/nextThree')
  //   } catch (err) {
  //     console.log({ err })
  //     this.events = [
  //       { id: 1, name: 'Event 1', date: 'today', eventFlyer: 'http://eventURL.pdf' },
  //       { id: 2, name: 'JOCO test', date: 'tomorrow', eventFlyer: 'http://eventURL.pdf' },
  //       { id: 3, name: 'Championship', date: 'Feb. 24th 2021', eventFlyer: 'http://eventURL.pdf' }
  //     ]
  //   }
  // },
  data () {
    return {
      visitorName: '',
      visitorEmail: '',
      visitorName2: '',
      visitorEmail2: '',
      errorMessage: '',
      events: [
        // { id: 1, name: 'KCTC Freestyle Open', date: '04/24/2021', eventFlyer: 'https://www.trackwrestling.com/tw/uploads/O-629539132-KCTC_Freestyle_&_Greco_1_-_Google_Docs.pdf', description: 'First annual KCTC freestyle tournament. Open to wrestlers ages 8 to 18. Girls and boys divisions.', signup: 'https://www.trackwrestling.com/registration/TW_Register.jsp?tournamentGroupId=195937132' },
        // { id: 2, name: 'KCTC Greco Open', date: '04/24/2021', eventFlyer: 'https://www.trackwrestling.com/tw/uploads/O-629539132-KCTC_Freestyle_&_Greco_1_-_Google_Docs.pdf', description: 'First annual KCTC greco tournament. Open to wrestlers ages 8 to 18.', signup: 'https://www.trackwrestling.com/registration/TW_Register.jsp?tournamentGroupId=195937132' },
        { id: 4, name: 'Winter Camps Summer Champs', date: '06/03/2021', eventFlyer: 'https://cdn3.sportngin.com/attachments/photo/8e72-158653761/winterChampsCamp_large.jpg', description: 'Featuring NCAA Champ Austin O\'Conner, \n3x KS HS State Champ Clay Lautt\n2021 NCAA AA Zach Sherman', signup: 'https://kswrestlingcenter.sportngin.com/register/form/885516487' },
        { id: 3, name: 'Diamonds in the Rough', date: '06/18/2021', eventFlyer: 'https://www.trackwrestling.com/tw/uploads/O-629255132-Copy_of_DNR_KWC-1_2.jpg', description: 'All girls divisions k-12.' + '\n' + 'Registration: $50 per wrestler until 3/18/21, $75 per wrestler after 3/18/21.', signup: 'https://www.trackwrestling.com/registration/TW_Register.jsp?tournamentGroupId=195846132' }
      ],
      query: '',
      successfulSnackbar: false,
      errorSnackbar: false,
      categories: []
    }
  },
  methods: {
    submitInformation () {
      const validationError = this.isValidMarketingEntry()

      if (validationError) {
        this.errorMessage = validationError || 'Please enter your name'
        this.errorSnackbar = true
        return
      }
      const visitor = { name: this.visitorName, email: this.visitorEmail } // REMOVE THIS ONE AFTER FORMAT
      this.$axios.$post('/mailingList', visitor)
        .then((result) => {
          if (result.error) {
            this.errorMessage = result.error
            this.errorSnackbar = true
          } else {
            this.successfulSnackbar = true
          }
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log('AxiosError: ', error)
        })
    },
    isValidMarketingEntry () {
      const marketingEntrySchema = Joi.object({
        visitorName: Joi.string().min(3).max(30).required(),
        visitorEmail: Joi.string().email({ tlds: { allow: ['com', 'net', 'gov', 'io', 'edu', 'org'] } }).required()
      })

      const { error } = marketingEntrySchema.validate({
        visitorName: this.visitorName,
        visitorEmail: this.visitorEmail
      })

      return error || null // return error if error else return null
    }
  }
  // apollo: {
  //   events: {
  //     prefetch: true,
  //     query: eventsQuery
  //   },
  //   categories: {
  //     prefetch: true,
  //     query: newsQuery
  //   }
  // }
}
</script>

<style scoped>
.stayInKnow {
  color: white;
}
.twocolumn{
display: grid;
  grid-template-columns: 5fr 3fr;
  grid-gap: 10px;
}
</style>

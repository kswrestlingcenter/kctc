<template>
  <div class="container">
    <div id="contactpage">
      <h2>Contact Us</h2>
      <hr>
      <br>
      <br>
      <div id="contactbox">
        <div id="homeside2" class="center">
          <br><br><br><br>
          <h5 class="center">
            KC Training Center
          </h5>
          <br>
          <iframe
            class="google-map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12421.17655703115!2d-94.7903587!3d38.8943885!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x892dbb21abb0db5a!2sKansas%20Wrestling%20Center!5e0!3m2!1sen!2sus!4v1609184702742!5m2!1sen!2sus"
            width="400"
            height="300"
            frameborder="0"
            style="border: 0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          />
          <br><br><br>
          <p>1671 E Kansas City Rd</p>
          <p>Olathe, KS 66061</p>
          <br><br>
          <p>Adam Venegas</p>
          <p>(913)206-7918</p>
          <p>adam@kctrainingcenter.com</p>
        </div>
        <div id="aside2" class="aside2">
          <form id="form">
            <h2>Contact Form</h2>
            <br>
            <div>
              <label>First Name</label>
              <input v-model="contactFirstName" type="text" name="firstName" placeholder="Enter first name">
            </div>
            <div>
              <label>Last Name</label>
              <input v-model="contactLastName" type="text" name="lastName" placeholder="Enter last name">
            </div>
            <div>
              <label>Email</label>
              <input v-model="contactEmail" type="email" name="email" placeholder="champ@email.com">
            </div>
            <div>
              <label>Subject</label>
              <select v-model="contactSubject" name="Subject">
                <option value="General">
                  General Question
                </option>
                <option value="Host">
                  Host an event
                </option>
                <option value="Facility">
                  Facility Info
                </option>
              </select>
            </div>
            <div>
              <textarea v-model="contactMessage" name="Message" placeholder="Your message here" />
            </div>
            <div class="button">
              <v-btn @click="submitInformation()"> Submit </v-btn>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="clr" />
    <v-snackbar
      v-model="successfulSnackbar"
    >
      Message Sent!

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
  </div>
</template>
<script>
import Joi from 'joi'
export default {
  head () {
    return {
      title: 'Contact Us'
    }
  },
  data () {
    return {
      contactFirstName: '',
      contactLastName: '',
      contactEmail: '',
      contactSubject: '',
      contactMessage: '',
      errorMessage: '',
      successfulSnackbar: false,
      errorSnackbar: false
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
      const contact = {
        firstName: this.contactFirstName,
        lastName: this.contactLastName,
        email: this.contactEmail,
        subject: this.contactSubject,
        message: this.contactMessage
      }
      console.log(contact)
      this.$axios.$post('/contactForm', contact)
        .then((result) => {
          console.log('n/n/n/results', result, '/n/n/end')
          if (result.error) {
            this.errorMessage = result.error
            this.errorSnackbar = true
          } else {
            this.successfulSnackbar = true
            this.contactFirstName = null
            this.contactLastName = null
            this.contactEmail = null
            this.contactSubject = null
            this.contactMessage = null
          }
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log('AxiosError: ', error)
        })
    },
    isValidMarketingEntry () {
      const marketingEntrySchema = Joi.object({
        firstName: Joi.string().min(2).max(30).required(),
        lastName: Joi.string().min(3).max(30).required(),
        email: Joi.string().email({ tlds: { allow: ['com', 'net', 'gov', 'io', 'edu', 'org', 'mail'] } }).required(),
        subject: Joi.string().min(2).max(30).required(),
        message: Joi.string().min(2).max(100).required()
      })

      const { error } = marketingEntrySchema.validate({
        firstName: this.contactFirstName,
        lastName: this.contactLastName,
        email: this.contactEmail,
        subject: this.contactSubject,
        message: this.contactMessage
      })

      return error || null // return error if error else return null
    }
  }
}
</script>

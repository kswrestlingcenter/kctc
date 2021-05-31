<template>
  <div>
    <header>
      <div>
        <div class="socialicons">
          Connect with Us!
          <v-btn icon href="https://www.facebook.com/ksWrestlingCenter">
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="#F2F2F2" d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
            </svg>
          </v-btn>
          <v-btn icon href="https://www.twitter.com">
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="#F2F2F2" d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
            </svg>
          </v-btn>
          <v-btn icon href="https://www.instagram.com/explore/locations/100585901828803/kansas-wrestling-center/">
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="#F2F2F2" d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
            </svg>
          </v-btn>
        </div>
      </div>
      <div class="nav">
        <NuxtLink to="/">
          <img class="logo-img" height="100px" src="../assets/KCTC-logo-black.jpg" alt="KWC Logo">
        </NuxtLink>
        <li>
          <NuxtLink to="/" class="button">
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/events" class="button">
            Events
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/club" class="button">
            Club
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/news" class="button">
            Social Media
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" class="button">
            Contact
          </NuxtLink>
        </li>
      </div>
    </header>
    <main>
      <Nuxt />
    </main>
    <footer style="position:fixed;bottom:0;">
      <h6>
        &copy; {{ new Date().getFullYear() }} — KsWrestlingCenter.com
      </h6>
    </footer>
  </div>
</template>

<script>
export default {
  head () {
    return {
      titleTemplate: 'KWC - %s',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'KWC - Kansas Wrestling Center. Our facility houses 20 full size wrestling mats. We are also home to the KCTC wrestling club.'
        }
      ]
    }
  }
}
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #eeeeee;
}
.logo-img {
  padding-top: 5px;
  display: inline-block;
  overflow: hidden;
  border-radius: 50%;
  /* height: 44%; */
}
header {
  position: fixed;
  width: 100%;
  z-index: 10;
  /* background-color: white; */
}

section {
  padding: 50px;
}
.content{
  width: 100%;
  margin: auto;
}
.clr {
  clear:both;
}
.nav {
  background-color: #eeeeee;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  margin: 0;
  padding:0 0 0 10%;
  color: black;
  width: 100%;
  height: 140%;
  z-index: 10;
}
li {
  display: inline;
  float: right;
  padding-top: 40px;
}
.socialicons {
  display: inline;
  float: right;
  background-color: #222629;
  border-bottom: rgb(128, 0, 0) 5px solid;
  color: #F2F2F2;
  width:100%;
  text-align: right;
  padding-right: 10px;
}
footer {
  text-align: center;
  padding-right: 5px;
  float: bottom;
  background-color: #f2f2f2;
}
h3 {
  font-weight: 600;
  font-size: 2.5em;
  color:#F2F2F2;
  word-spacing: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  text-align: left;
  text-shadow: 2px 3px 4px #000000;
}
h2 {
  font-weight: 600;
  font-size: 2.5em;
  color: #100041;
  word-spacing: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  text-align: left;
  text-shadow: 1px 1px 1px #000000;
}
h5 {
  font-weight: 600;
  font-size: 2.5em;
  color: #100041;
  word-spacing: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  text-align: left;
  text-shadow: 1px 1px 1px #000000;
}
.center{
  text-align: center;
}
#banner {
  background-image: url("../assets/wrestlers1.png");
  background-blend-mode: overlay;
  border-top:white 120px solid;
  background-color: #100041;
  background-position: center center;
  background-size: cover;
  width: 100%;
  padding-top: 2px;
  box-shadow: 10px 10px 4px #000000;
  z-index: 8;
}
#biglogo {
  color: #F2F2F2;
  display: block;
  width: 100%;
  margin: auto;
  display: grid;
  padding: 10px;
  grid-template-columns: .5fr 1fr 1fr .5fr;
  grid-template-rows: 1fr;
}
#biglogo span {
  font-size: 35px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-weight: 800;
  display: block;
  color: white;
  margin: auto;
  padding-top: 30px;
  padding-right: 15%;
  text-align: center;
  text-shadow: 5px 5px 4px #000000;
}
#biglogo img {
  border: 5px solid rgb(128, 0, 0);
  border-radius: 50%;
  margin:10px auto 0 auto;
  display: block;
  box-shadow: 10px 10px 4px #000000;
  width: 100%;
  max-height: 500px;
}
#welcome {
  min-height: 500px;
  width: 100%;
  margin: auto;
}
#upcomingevents {
  min-height: 200px;
  background-image: url("../assets/mavsgym.png");
  background-blend-mode: soft-light;
  background-color: #181818;
  background-position: center center;
  background-size: cover;
  width: 100%;
  /* border-radius: 5px; */
  border-top: 5px rgb(128, 0, 0) solid ;
  border-bottom: 5px rgb(128, 0, 0) solid ;
  margin: 20px;
  padding:10px 10px 20px 50px;
  box-shadow: 3px 3px 4px #000000;
}
.eventpreview {
  display: grid;
  width: 100%;
  margin: 20px;
  padding-bottom: 10px;
  grid-gap: 40px;
  grid-template-rows: 1fr 1fr 1fr;
}
.eventcard {
  border: 0px solid #f2f2f2;
  border-radius: 0px;
  background-color: #ffffff;
  box-shadow: 5px 10px 1em #888888;
  text-align: center;
  width: 100%;
}
.eventicon {
  margin: auto;
}
.eventblurb {
  margin: auto;
  padding: 10px;
}
.newspreview {
  display: grid;
  min-height: 100px;
  width: 70%;
  margin: auto;
  padding-bottom: 20px;
  grid-gap: 50px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr
}
.newscard {
  border: 1px solid #474b4f;
  border-radius: 0px;
  text-align: center;
  min-height: 500px;
  box-shadow: 3px 3px 4px #000000;
}
.newscard1 {
  border: 1px solid #474b4f;
  border-radius: 0px;
  text-align: center;
  box-shadow: 3px 3px 4px #000000;
  display: grid;
  min-height: 100px;
  width: 90%;
  margin: 20px auto;
  padding: 20px;
  grid-gap: 10px;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr
}
.newsicon {
  min-height: 300px;
  margin: auto;
}
#affiliates {
  min-height: 300px;
  width: 100%;
  margin: auto;
}
#quickcontact {
  min-height: 300px;
  width: 100%;
  margin: auto;
  background-image: url("../assets/mavsgym.png");
  background-blend-mode: soft-light;
  background-color: #181818;
  background-position: center center;
  background-size: cover;
  width: 100%;
  /* border-radius: 5px; */
  border-top: 5px rgb(128, 0, 0) solid ;
  border-bottom: 5px rgb(128, 0, 0) solid ;
  margin: 20px;
  padding:10px 10px 20px 50px;
  box-shadow: 3px 3px 4px #000000;
}
iframe {
  width: 100%;
  margin:  auto;
  box-shadow: 5px 10px 1em #888888;
}
.google-map {
  box-shadow: 5px 10px 1em #888888;
  width: 90%;
}
.linkbanner {
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
.carousel {
  min-height: 50vh;
  border: 1px black solid;
  margin: auto;
  background-image: url("../assets/mavsgymcolor.png");
  background-size: cover;
  background-position: center;
}
.newstitle {
  font-weight: 300;
  font-size: 30px;
  color: rgb(11, 11, 12);
  text-decoration-line: underline;
  font-style: italic;
  word-spacing: 5px;
  padding-bottom: 1px;
  padding-left: 150px;
  padding-right: 0px;
}
.eventbox {
  display: grid;
  min-height: 200px;
  width: 100%;
  margin: auto;
  padding-top: 20px;
  grid-gap: 50px;
  grid-template-columns: 1fr 1fr 1fr;
}
.links {
  padding-top: 1px;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
#form {
  margin:auto;
  text-align: right;
  padding: 30px;
  border-radius: 1px;
  display: block;
  float: right;
  width: 100%;
  box-shadow: 5px 10px 1em #888888;
}
#form2 {
  margin:auto;
  text-align: left;
  padding: 10px 0 0 40px;
  border-radius: 4px;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 1fr;
  width: 80%;
  box-shadow: 5px 10px 2em black;
  background-color: #F2F2F2;
  border: 2px black solid ;
  }
#form2 input {
  width: 95%;
  font-family:'arial';
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
input {
  width: 80%;
  font-family:'arial';
  padding: .5em .5em;
  margin: 1em .25em;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
textarea {
  width: 80%;
  min-height: 15vh;
  font-family:'arial';
  padding: .5em .5em;
  margin: 1em .25em;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
select {
  width: 80%;
  font-family:'arial';
  padding: .5em .5em;
  margin: 1em .25em;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.button {
  display: block;
  text-align: left;
  border-radius: 4px;
  border: 0px solid #3b8070;
  color: red;
  text-decoration: none;
  padding: 15px 30px;
}
.button2 {
  display: block;
  text-align: left;
  border-radius: 4px;
  border: 0px solid #3b8070;
  color: white;
  text-decoration: none;
  padding: 15px 30px;
}
.button3 {
  display: block;
  text-align: left;
  border-radius: 4px;
  border: 0px solid #3b8070;
  color: black;
  text-decoration: none;
  padding: 10px 10px;
}
.moreInfoButton {
  display: inline-block;
  align-self: flex-end;
  text-align: left;
  border-radius: 4px;
  border: 0px solid #3b8070;
  color: black;
  text-decoration: none;
  padding: 15px 30px;
}
.nav .button {
  display: inline-block;
  border-radius: 4px;
  border: 0px solid #3b8070;
  color: black;
  text-decoration: none;
  padding: 15px 30px;
  font-weight: 300;
  font-size: 20px;
}

.button:hover {
  color: #240090;
}
.button2:hover {
  color: #240090;
}
.moreInfoButton:hover {
  color: #240090;
}
.nav .button:hover {
  color: #240090;
  font-size:20px;
}
.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
  z-index: -15;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.darker-span {
  filter: brightness(50%);
}
.brighter-span {
  filter: brightness(150%);
}
#about {
  padding-top: 140px;
}
#eventpage {
  padding-top: 140px;
}
#news {
  padding-top: 140px;
}
#eventpage {
  padding-top: 140px;
}
#contactpage {
  padding-top: 140px;
}
#contactbox {
  padding-top: 140px;
  display: grid;
  min-height: 200px;
  width: 100%;
  margin: auto;
  padding-top: 20px;
  grid-gap: 50px;
  grid-template-columns: 1fr 1fr;
}

</style>

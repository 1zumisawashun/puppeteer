<template>
  <v-app>
    <v-app-bar app color="primary">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-5 white--text"
        column
      >
        <v-chip color="white"
          ><router-link to="/automemo" class="link-container">Automemo</router-link></v-chip
        >
        <v-chip color="white"
          ><router-link to="/meetingowl" class="link-container">MeetingOwl</router-link></v-chip
        >
        <v-chip color="white"
          ><router-link to="/iot" class="link-container">POCKETALK</router-link></v-chip
        >
        <v-chip color="white"
          ><router-link to="/mimi" class="link-container">POCKETALKmimi</router-link></v-chip
        >
        <v-chip color="white"
          ><router-link to="/molekule" class="link-container">Molekule</router-link></v-chip
        >
        <v-chip color="white"
          ><router-link to="/theragun" class="link-container">Theragun</router-link></v-chip
        >
        <v-chip color="white"
          ><router-link to="/iot" class="link-container">FamilyDot</router-link></v-chip
        >
      </v-chip-group>
    </v-app-bar>

    <v-main>
      <!-- <HelloWorld /> -->
      <router-view></router-view>
    </v-main>
    <v-footer dark padless>
      <v-card flat tile color="primary" class="white--text text-center">
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
          Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
          accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
          a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
          lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
          iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum
          tempor vel ut orci. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<style scoped>
.link-container{
  text-decoration: blue;
}
</style>

<script>
//import HelloWorld from "./components/HelloWorld";
export default {
  name: "App",
  components: {
    //HelloWorld,
  },
  data: () => ({
    icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
  }),
};
</script>

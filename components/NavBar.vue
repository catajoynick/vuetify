<template>

  <!-- start: nav bar -->
  <nav>
    <!-- start: app bar -->
    <v-app-bar
      color="grey accent-4"
      app
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <!-- start: toolbar title -->
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">todo</span>
        <span>ninja</span>
      </v-toolbar-title>
      <!-- end: toolbar title -->
      <v-spacer></v-spacer>

      <!-- start: dropdown menu -->
      <div class="text-center mx-2">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-menu-down</v-icon>
              <span>Menu</span>

            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="link in menu_links"
              :key="link.link"
            >
              <NuxtLink
                :to="`/${link.link}`"
                class="text-decoration-none"
              >

                <v-list-item-title class="black--text text-capitalize links">
                  {{ link.link }}
                </v-list-item-title>
              </NuxtLink>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <!-- end: drop down menu -->

      <!-- start: button / SIGN OUT  -->
      <v-btn color="grey">
        sign out
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
      <!-- end: button / SIGN OUT -->
    </v-app-bar>
    <!-- end: app bar -->

    <!-- start: navigation drawer -->
    <v-navigation-drawer
      v-model="drawer"
      class="teal"
      app
    >

      <!-- start: drawer image -->
      <v-row
        justify="center"
        class="my-4"
      >
        <v-col cols="6">
          <v-avatar size="100">
            <img
              src="/avatar-1.png"
              alt=""
            >
          </v-avatar>
        </v-col>
      </v-row>
      <!-- end: drawer image -->

      <!-- Start: Pop up button -->
      <v-row>
        <v-col
          cols="12"
          class="px-2"
        >
          <Popup />
        </v-col>
      </v-row>
      <!-- End: Pop up button -->

      <!-- start: lists -->
      <v-list-item
        v-for="link in links"
        :key="link.text"
        :to="link.route"
      >
        <v-list-item-content>
          <v-list-item-title class="white--text">
            <v-icon
              left
              class="white--text"
            >
              {{ link.icon }}
            </v-icon>
            {{link.text}}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <!-- end: lists -->

    </v-navigation-drawer>
    <!-- end: navigation drawer -->

  </nav>
  <!-- end: nav bar -->

</template>

<script>
import Popup from './Popup.vue'
export default {
  components: { Popup },
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/dashboard' },
        { icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
        { icon: 'mdi-account', text: 'Team', route: '/team' },
      ],
      menu_links: [
        { link: 'dashboard' },
        { link: 'projects' },
        { link: 'team' },
      ],
    }
  },
}
</script>

<style>
</style>

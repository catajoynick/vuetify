<template>
  <div class="team">

    <h1 class="font-weight-light">Team</h1>

    <!-- start: main container -->
    <v-container class="my-5">

      <v-row class="text-center">
        <v-col
          v-for="person in team"
          :key="person.name"
          cols="12"
          md="4"
          xs="12"
          lg="3"
        >

          <!-- start: Team/Person card -->
          <v-card
            text
            class="text-xs-center ma-3"
            outlined
          >
            <!-- start: Team/Person Card Image -->
            <v-avatar size="128">
              <v-img
                class="pt-4"
                :src="person.avatar"
              ></v-img>
            </v-avatar>
            <!-- end: Team/Person Card Image -->

            <!-- start: Team/person Card Name-->
            <div class="subtitle-1 grey--text">
              {{ person.name }}
            </div>
            <!-- end: Team/person Card Name-->

            <!-- start: Team/Person Card button -->
            <v-card-actions>
              <v-btn
                color="deep-purple lighten-2"
                text
              >
                <v-icon>mdi-message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
            <!-- end: Team/Person Card button -->

          </v-card>
          <!-- start: Team/Person card -->
        </v-col>
      </v-row>
    </v-container>
    <!-- end: main container -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          name: 'The Net Ninja',
          role: 'Web developer',
          avatar: '/avatar-1.png',
        },
        { name: 'Ryu', role: 'Graphic designer', avatar: '/avatar-2.png' },
        { name: 'Chun Li', role: 'Web developer', avatar: '/avatar-3.png' },
        {
          name: 'Gouken',
          role: 'Social media maverick',
          avatar: '/avatar-4.png',
        },
        { name: 'Yoshi', role: 'Sales guru', avatar: '/avatar-5.png' },
      ],
    }
  },
}
</script>

<style>
</style>

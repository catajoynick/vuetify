<template>

  <!-- start: dashboard -->
  <div class="dashboard">

    <!-- START: GRID CONTAINER -->
    <v-container class="pa-3">
      <!-- start: 1st row sorting buttons -->
      <v-row class="my-3 ">

        <!-- start: sort by title button -->
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              text
              grey
              class="mx-2"
              @click="sortBy('title')"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon
                left
                small
              > mdi-account
              </v-icon>
              <span class="caption text-lowercase">By title</span>
            </v-btn>
          </template>
          <span>Sorts by title</span>
        </v-tooltip>
        <!-- end: sort by title button -->

        <!-- start: sort by person button -->
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              text
              grey
              class="mx-2"
              @click="sortBy('person')"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon
                left
                small
              > mdi-account
              </v-icon>
              <span class="caption text-lowercase">By person</span>
            </v-btn>
          </template>
          <span>Sorts by person</span>
        </v-tooltip>
        <!-- end: sort by person button -->

      </v-row>
      <!-- end: 1st row sorting buttons -->

      <!-- start: card -->
      <v-card
        class="pa-3 mb-3"
        v-for="project in projects"
        :key="project.title"
      >
        <v-row
          row
          wrap
          :class="`pa-3 project ${project.status}`"
        >
          <v-col
            cols="12"
            md="6"
          >
            <div class="caption grey--text">Project Title</div>
            <div> {{project.title}} </div>
          </v-col>
          <v-col xs="2">
            <div class="caption grey--text">Person</div>
            <div> {{project.person}} </div>
          </v-col>
          <v-col xs="2">
            <div class="caption grey--text">Due date</div>
            <div> {{project.due}} </div>
          </v-col>
          <v-col xs="2">
            <div class="right">
              <v-chip
                small
                :class="`v-chip ${project.status} white--text caption my-2`"
              >
                {{project.status}}
              </v-chip>
            </div>
          </v-col>
        </v-row>
      </v-card>
      <!-- start: card -->
    </v-container>
    <!-- END:  GRID CONTAINER -->

  </div>
  <!-- end: dashboard -->
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: 'Design a new website',
          person: 'The Net Ninja',
          due: '1st Jan 2019',
          status: 'ongoing',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!',
        },
        {
          title: 'Code up the homepage',
          person: 'Chun Li',
          due: '10th Jan 2019',
          status: 'complete',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!',
        },
        {
          title: 'Design video thumbnails',
          person: 'Ryu',
          due: '20th Dec 2018',
          status: 'complete',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!',
        },
        {
          title: 'Create a community forum',
          person: 'Gouken',
          due: '20th Oct 2018',
          status: 'overdue',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!',
        },
      ],
    }
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1))
    },
  },
}
</script>

<style>
/* start:  Project styles */
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.overdue {
  border-left: 4px solid orange;
}
.project.ongoing {
  border-left: 4px solid tomato;
}
/* end:  Project styles */

/* start: Chip styles */
.v-chip.complete {
  background-color: #3cd1c2 !important;
}
.v-chip.overdue {
  background-color: orange !important;
}
.v-chip.ongoing {
  background-color: tomato !important;
}
/* end: Chip styles */
</style>

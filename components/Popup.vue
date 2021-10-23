<template>

  <!-- start: Pop up -->
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          class="my-2"
        >
          <v-icon color="green">
            mdi-plus
          </v-icon>
          Add new project
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          <h5>Add a new project.</h5>
        </v-card-title>

        <v-card-text>
          <v-form
            class="px-3"
            ref="form"
          >
            <v-text-field
              label="Title"
              v-model="title"
              prepend-icon="mdi-folder"
              :rules="inputRules"
            ></v-text-field>

            <v-textarea
              label="Information"
              v-model="content"
              prepend-icon="mdi-pencil"
              :rules="inputRules"
            ></v-textarea>

            <div class="text-center">
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">

                  <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    block
                  >
                    {{ picker }}
                  </v-btn>
                </template>
                <v-list>
                  <v-row justify="center">
                    <v-date-picker v-model="picker"></v-date-picker>
                  </v-row>
                </v-list>
              </v-menu>
            </div>
          </v-form>
          <v-btn
            class="success mx-0 mt-3"
            @click="submit"
          >
            Add Project
          </v-btn>
        </v-card-text>
        <v-divider></v-divider>
      </v-card>
    </v-dialog>
  </div>
  <!-- end: Pop up -->

</template>

<script>
import format from 'date-fns/format'
export default {
  data() {
    return {
      dialog: false,
      title: '',
      content: '',
      picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      inputRules: [(v) => v.length >= 3 || 'Minimum Length is 3 characters'],
    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        console.log(this.title, this.content)
      } else {
        console.log('Something went wrong..')
      }
    },
  },
  computed: {
    formattedDate() {
      return this.picker ? format(this.picker, 'dd-MM-yyyy') : ''
    },
  },
}
</script>

<style>
</style>

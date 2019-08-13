<template>
  <v-container fluid grid-list-lg px-10 pt-5 fill-height>
    <v-layout column wrap>
      <v-flex d-flex xs1>
        <h1>
          <span class="form-title">{{contact.name}}</span>
        </h1>
      </v-flex>
      <v-flex xs2>
        <v-layout row wrap>
          <v-flex xs2>
            <v-layout column wrap px-2>
              <v-flex>
                <span class="field-label">Company</span>
              </v-flex>
              <v-flex class="field-value">
                <span>{{contact.company}}</span>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs2>
            <v-layout column wrap px-2>
              <v-flex>
                <span class="field-label">Email</span>
              </v-flex>
              <v-flex class="field-value">
                <span>{{contact.email}}</span>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs2>
        <v-layout row wrap>
          <v-flex xs2>
            <v-layout column wrap px-2>
              <v-flex>
                <span class="field-label">Mobile Phone</span>
              </v-flex>
              <v-flex class="field-value">
                <span>{{contact.mobile_phone}}</span>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs2>
            <v-layout column wrap px-2>
              <v-flex>
                <span class="field-label">Home Phone</span>
              </v-flex>
              <v-flex class="field-value">
                <span>{{contact.home_phone}}</span>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs2>
            <v-layout column wrap px-2>
              <v-flex>
                <span class="field-label">Birthday</span>
              </v-flex>
              <v-flex class="field-value">
                <span>{{contact.birthday}}</span>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs2>
        <v-layout row wrap>
          <v-flex xs2>
            <v-layout column wrap px-2>
              <v-flex>
                <span class="field-label">Office Phone</span>
              </v-flex>
              <v-flex class="field-value">
                <span>{{contact.office_phone}}</span>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs2>
            <v-layout column wrap px-2>
              <v-flex>
                <span class="field-label">Fax</span>
              </v-flex>
              <v-flex class="field-value">
                <span>{{contact.fax}}</span>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex v-if="contact.tags.length > 0" px-2>
        <v-flex xs1>
          <span class="field-label">Tags</span>
        </v-flex>
        <v-flex xs2>
          <ul>
            <li v-for="(tag, index) in contact.tags" :key="index">{{tag}}</li>
          </ul>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "ContactDetails",

  // Mocked data for later API integration
  data: () => ({
    contact: {
      name: "Carlos Andres Saavedra Regalado",
      company: "Arkusnexus",
      email: "csaavedra@arkusnexus.com",
      mobile_phone: "(664) 111-1111",
      home_phone: "(664) 222-2222",
      birthday: "01/01/1990",
      office_phone: "(664) 111-1111",
      fax: "(664) 222-2222",
      tags: []
    }
  })
};
</script>

<style lang="scss" scoped>
.form-title {
  color: #2dc2e7;
}
.field-label {
  font-weight: bold;
  font-size: 16px;
  color: #d0d0d0;
}
.field-value {
  border-bottom: 1px solid #d0d0d0;
  min-height: 40px;
}
</style>

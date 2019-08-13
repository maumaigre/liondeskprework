<template>
  <v-container fluid grid-list-lg px-10 pt-5 fill-height class="container container-details">
    <v-layout column wrap>
      <v-flex d-flex xs1>
        <h1>
          <v-icon large class="back-icon" color="white" @click="handleBack()">arrow_back</v-icon>
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
      <v-flex v-if="contact.tags != 'Empty'" px-2>
        <v-flex xs1>
          <span class="field-label">Tags</span>
        </v-flex>
        <v-flex xs2>
          {{contact.tags}}
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import RestServices from "../services/RestServices";

export default {
  name: "ContactDetails",
  data: () => ({
    contact: {
      name: "",
      company: "",
      email: "",
      mobile_phone: "",
      home_phone: "",
      birthday: "",
      office_phone: "",
      fax: "",
      tags: ""
    }
  }),
  mounted() {
    const restServices = new RestServices();

    restServices.getContact(this.$route.params.id).then(res => {
      const empty = "Empty";
      const contact = res.data;

      this.contact.name = `${contact.first_name} ${contact.last_name}`;
      this.contact.company = contact.company || empty;
      this.contact.email = contact.email || empty;
      this.contact.mobile_phone = contact.mobile_phone || empty;
      this.contact.home_phone = contact.home_phone || empty;
      this.contact.birthday = contact.birthday || empty;
      this.contact.office_phone = contact.office_phone || empty;
      this.contact.fax = contact.fax || empty;
      this.contact.tags = contact.tags || empty;
    });
  },
  methods: {
    handleBack: function() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
$primary: #ffffff;

.container.container-details {
  height: calc(100% - 64px);
}

.form-title {
  color: $primary;
}

.field-label {
  font-weight: bold;
  font-size: 16px;
  color: $primary;
}

.field-value {
  border-bottom: 1px solid $primary;
  min-height: 40px;
}

.back-icon {
  margin-right: 10px;
  padding-bottom: 5px;
}
</style>

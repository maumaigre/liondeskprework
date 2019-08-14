<template>
  <v-container fluid grid-list-lg px-10 pt-5 fill-height class="container container-details">
    <v-layout column wrap>
      <v-flex d-flex xs1>
        <h1>
          <v-icon large class="back-icon" color="white" @click="handleBack()">arrow_back</v-icon>
          <span class="form-title">{{contact.name || 'Contact not found'}}</span>
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
                <span>{{contact.company || 'Empty'}}</span>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs2>
            <v-layout column wrap px-2>
              <v-flex>
                <span class="field-label">Email</span>
              </v-flex>
              <v-flex class="field-value">
                <span>{{contact.email || 'Empty'}}</span>
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
                <span>{{contact.mobile_phone || 'Empty'}}</span>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs2>
            <v-layout column wrap px-2>
              <v-flex>
                <span class="field-label">Home Phone</span>
              </v-flex>
              <v-flex class="field-value">
                <span>{{contact.home_phone || 'Empty'}}</span>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs2>
            <v-layout column wrap px-2>
              <v-flex>
                <span class="field-label">Birthday</span>
              </v-flex>
              <v-flex class="field-value">
                <span>{{contact.birthday || 'Empty'}}</span>
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
                <span>{{contact.office_phone || 'Empty'}}</span>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs2>
            <v-layout column wrap px-2>
              <v-flex>
                <span class="field-label">Fax</span>
              </v-flex>
              <v-flex class="field-value">
                <span>{{contact.fax || 'Empty'}}</span>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex v-if="contact.tags != ''" px-2>
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
      const contact = res.data;
      
      this.contact = {
        name: `${contact.first_name} ${contact.last_name}`,
        company: contact.company,
        email: contact.email,
        mobile_phone: contact.mobile_phone,
        home_phone: contact.home_phone,
        birthday: contact.birthday,
        office_phone: contact.office_phone,
        fax: contact.fax,
        tags: contact.tags,
      }
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

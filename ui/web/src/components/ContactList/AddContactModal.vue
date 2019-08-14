<template>
    <div>
      <v-row justify="center">
        <v-dialog width="520" height="350" v-model="showDialog" class="dialog">
          <v-card class="card">
            <v-card-title class="title">Add new contact</v-card-title>
            <v-text-field
                label="Contact name"
                placeholder="Contact name"
                solo>
            </v-text-field>
            <v-btn>Add Contact</v-btn>
          </v-card>
        </v-dialog>
      </v-row>
    </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
    props:{
        showDialog: Boolean,
        name: String
    },
    methods:{
        handleAddContact() {
            this.$emit('onAddContact');
            this.showDialog = false;
        }
    }
    
}
</script>


<style lang="scss" scoped>
.dialog{
  .card{
    width: 100%;
    height: 100%;
    padding: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title{
      margin: 0 0 24px 6px;
      padding: 0;
      text-align: center;
      font-size: 24px!important;
    }
  }
}
</style>
<template>
    <v-dialog @click:outside="closeDialog()" width="500" class="add-contact-dialog" v-model="showDialog" >
      <v-card class="add-contact-dialog-card">
        <v-card-title class="title">Add new contact</v-card-title>
        <v-text-field
            label="First name"
            placeholder="First name"
            solo
            v-model="first_name"
          >
        </v-text-field>
        <v-text-field
            label="Last name"
            placeholder="Last name"
            solo
            v-model="last_name"
          >
        </v-text-field>
        <v-btn @click="handleAddContact()">Add Contact</v-btn>
      </v-card>
    </v-dialog>
</template>

<script>
import RestServices from '../../services/RestServices';
export default {
    props:{
        showDialog: Boolean,
    },
    data: ()=>({
        first_name: "",
        last_name: ""
    }),
    methods:{
        handleAddContact() {
            const restServices = new RestServices();
            restServices.createContact({
              first_name: this.first_name,
              last_name: this.last_name
            }).then(res=>{
              this.$emit('onAddContact');
              this.$emit('onCloseDialog');
            }, err=>{
              console.error(err);
            })
        },
        closeDialog(){
            this.$emit('onCloseDialog');
        }
    }
    
}
</script>


<style lang="scss">
.add-contact-dialog-card{
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
    font-size: 24px;
  }
}
</style>
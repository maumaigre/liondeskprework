<template>
    <div>
      <v-row justify="center">
        <v-dialog v-model="showDialog" max-width="400" @click:outside="closeDialog()">
          <v-card>
            <v-card-title class="headline">Delete contact confirmation</v-card-title>
            <v-card-text>
              Are you sure you want to delete {{name}} from your contacts list?
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="normal" @click="closeDialog()">
                Cancel
              </v-btn>
              <v-btn color="error" @click="handleDelete()">
                Yes, delete
              </v-btn>
            </v-card-actions>
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
        handleDelete() {
            this.$emit('onDeleteContact');
            this.showDialog = false;
        },
        closeDialog(){
           this.$emit('onCloseDialog');
       }
    }
    
}
</script>

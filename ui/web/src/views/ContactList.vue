<template >
    <div class="contact-list" v-if="contacts">
        <ContactCard :contact="contact" :key="contact.id" v-for="contact in contacts" @updateContacts="getContacts"/>
        <v-btn
            @click="showAddModal"
            color="gray"
            dark
            fab
            class="add-fab"
        >
            <v-icon>add</v-icon>
        </v-btn>
        <AddContactModal v-if="addModalShown" @onAddContact="getContacts()" @onCloseDialog="closeAddModal()" :showDialog="addModalShown" />
    </div>
</template>

<script>
import Services from './../services/RestServices';
import ContactCard from './../components/ContactList/ContactCard';
import AddContactModal from './../components/ContactList/AddContactModal';

export default {
    components: {
        ContactCard,
        AddContactModal
    },
    data: ()=> ({
        addModalShown: false,
        contacts: []
    }),
    methods: {
        getContacts(){
            const services = new Services();

            services.getContacts().then(res =>{
                this.contacts = res.data.data;
            }, err =>{
                console.error(err)
            });
        },
        showAddModal(){
            this.addModalShown = true;
        },
        closeAddModal(){
            this.addModalShown = false;
        }
    },
    mounted(){
        this.getContacts();
    }
}
</script>

<style lang="scss" scoped>
.contact-list{
    display: flex;
    width: 100%;
    margin: 0 auto;
    max-width: 1200px;
    padding: 5% 2.5%;
    justify-content: space-between;
    flex-wrap: wrap;
    height: calc(100% - 64px);
}

button.v-btn--fab.add-fab{
    position: fixed;
    bottom: 4%;
    right: 3%;
    width: 72px;
    height: 72px;
}
</style>

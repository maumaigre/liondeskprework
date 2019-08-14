<template >
    <div class="contact-list" v-if="contacts">
        <ContactCard :contact="contact" :key="contact.id" v-for="contact in contacts" @updateContacts="getContacts"/>
    </div>
</template>

<script>
import Services from './../services/RestServices';
import ContactCard from './../components/ContactList/ContactCard';

export default {
    components: {
        ContactCard
    },
    data: ()=> ({
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
        }
    },
    mounted: function(){
        this.getContacts();
        
    },
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
</style>

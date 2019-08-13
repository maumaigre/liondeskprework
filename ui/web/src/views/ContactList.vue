<template >
    <div class="contact-list" v-if="contacts">
        <ContactCard :contact="contact" :key="contact.id" v-for="contact in contacts"/>
    </div>
</template>


<script>
import Services from './../services/RestServices';
import ContactCard from './../components/ContactList/ContactCard';

export default {
    components: {
        ContactCard
    },

    mounted(){
        const services = new Services();


        services.getContacts().then(res=>{
            this.contacts = res.data.data;
        }, err =>{
            console.error(err)
        });
    },
    data: ()=> ({
        contacts: []
    })
}
</script>

<style lang="scss" scoped>
.contact-list{
    display: flex;
    width: 100%;
    padding: 5% 3.5%;
    justify-content: space-around;
    background: rgba(0,0,0, 0.2);
    height: 100%;
}
</style>
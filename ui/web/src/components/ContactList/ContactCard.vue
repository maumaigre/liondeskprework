<template>
	<div>
		<DeleteModal :showModal="showModal" :name="contact.first_name" @onDeleteContact="deleteContact"></DeleteModal>
		<v-card @click="handleCardClick()" class="contact-card">
		<v-card-title class="title">{{contact.first_name}} {{contact.last_name}}</v-card-title>
		<v-card-text>{{contact.email}}</v-card-text>
		<v-card-text>{{contact.mobile_phone}}</v-card-text>
		<v-card-actions class="actions">.
			<v-btn text>Edit</v-btn>
			<v-btn text @click.stop="showModal">Delete</v-btn>
		</v-card-actions>
   </v-card>
	</div>
	
</template>

<script>
import DeleteModal from '../DeleteModal';
import RestServices from '../../services/RestServices/index';

export default {
	name: "ContactCard",
	data(){
		return{
			showModal: false
		}
	},
	props: {
		contact: Object
	},
	methods: {
		handleCardClick(){
			this.$router.push(`/contact/${this.contact.id}`)
		},
		deleteContact(){
			const restService = new RestServices();
			restService.deleteContact(this.contact.id)
			.then( res => {
				console.log(res);
				this.$emit('updateContacts');
			})
			.catch( error => console.error(error));
			this.showModal  = false;
    	}

	}
};
</script>

<style lang="scss" scoped>
.contact-card{
	width: 300px;
	height: 200px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	.title{
		font-size: 16px!important;
		height: 60px;
	}
	.actions{
		display: flex;
		align-self: flex-end;
	}
}
</style>
<template>
	<div style="margin-bottom: 5%;">
		<v-card @click="handleCardClick()" class="contact-card">
			<v-card-title class="title">{{contact.first_name}} {{contact.last_name}}</v-card-title>
			<v-card-text>{{contact.email}}</v-card-text>
			<v-card-text>{{contact.mobile_phone}}</v-card-text>
			<v-card-actions class="actions">
				<v-btn text>Edit</v-btn>
				<v-btn text @click.stop="showModal = true">Delete</v-btn>
			</v-card-actions>
		</v-card>
		<DeleteModal v-if="showModal === true" :showDialog="showModal" :name="contact.first_name" @onDeleteContact="deleteContact"></DeleteModal>
	</div>
</template>

<script>
import DeleteModal from '../DeleteModal';
import RestServices from '../../services/RestServices/index';

export default {
	name: "ContactCard",
	components:{
		DeleteModal
	},
	data(){
		return{
			showModal: false,
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
			.then( () => {
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
	margin-bottom: 5%;
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
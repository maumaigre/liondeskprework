<template>
	<v-card @click="handleCardClick()" class="contact-card" max-width="500">
		<v-card-title class="title">{{contact.first_name}} {{contact.last_name}}</v-card-title>
		<v-card-text>{{contact.email}}</v-card-text>
		<v-card-text>{{contact.mobile_phone}}</v-card-text>
		<v-card-actions class="actions">.
			<v-btn text>Edit</v-btn>
			<v-btn text>Delete</v-btn>
		</v-card-actions>
   </v-card>
</template>

<script>
export default {
	name: "ContactCard",
	props: {
		contact: Object
	},
	methods: {
		handleCardClick(){
			this.$router.push(`/${this.contact.id}`)
		}
	},
	mounted(){
		console.log(this.contact);
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
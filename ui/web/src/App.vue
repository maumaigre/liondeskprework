<template>
  <v-app class="app">
	<v-container class="container">
	  <div class="topbar">
		<img
		  @click="handleLogoClick()"
		  src="https://theme.zdassets.com/theme_assets/698924/0c1ebb156a07d16e99aa7fe9a9b1509f9ec59c6d.png"
		/>
	  </div>
	  <router-view></router-view>
	</v-container>
  </v-app>
</template>

<style lang="scss" scoped>
.app {
	height: 100vh;
	.topbar {
		position: fixed;
		top: 0;
		z-index: 99;
		display: flex;
		align-items: center;
		justify-content: center;
		background: gray;
		padding: 8px;
		height: 64px;
		width: 100%;
		img {
			width: 42px;
			height: 42px;
			cursor: pointer;
		}
	}
	.container {
		max-width: unset;
		width: 100%;
		overflow: auto;
		padding: 0;
		height: 100%;
		padding-top: 2.5%;
		background: rgba(0, 0, 0, 0.2);
	}
}
</style>

<script>
export default {
	name: "App",
	components: {},
	data: () => ({}),
	methods: {
		handleLogoClick() {
			this.$router.push("/");
		}
	}
};
</script>

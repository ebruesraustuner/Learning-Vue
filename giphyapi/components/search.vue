<template>
	<div class="search">
		<input type="text" v-model="query" />
		<button v-on:click="handleSearch"> Search </button>
	</div>
</template>
<script>
export default {
	data() {
		return {
			query: ''
		}
	},
	methods: {
		handleSearch() {
			console.log(this.query);
		}
	}
}
</script>
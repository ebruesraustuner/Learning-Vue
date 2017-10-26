<template>
	<div class="search">
		<input type="text" v-model="query" @keypress.enter="handleSearch" />
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
			this.$emit('SearchRequested', this.query);
		}
	}
}
</script>
<style>
	.search {
		display: flex;
		justify-content: center;
		align-items: space-around;
	}
	.search input {
		padding: 10px 20ox;
		border: 1px solid #CCC;
		border-radius: 4px;
		height: 24px;
		width: 320px;
	}
	.search button {
		padding: 5px 15px;
		border: 1px solid #CCC;
		border-radius: 6px;
		font-size: 12px;

	}
</style>
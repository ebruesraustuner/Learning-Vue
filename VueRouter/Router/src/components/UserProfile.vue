<template> 
	<div> 
		<a @click="goBack"> Go Back to User List</a>
		<h1> {{userData.name}}</h1>
		<ul>
			<li> {{userData.phone}}</li>
			<li> {{userData.email}}</li>
			<li> {{userData.website}}</li>
		</ul>
		<router-link :to="postsLinks">Posts</router-link>
		<router-link :to="nextUserLink">Next User</router-link>
	</div>
</template> 

<script>
export default {
	name: 'UserProfile',
	data() {
		return {
			userData: {}
		}
	},
	methods: {
		fetchData() {
			fetch(`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`)
		.then((res) => { return res.json() })
		.then((data) => { this.userData = data; })
		},
		goBack() {
			this.$router.push('/');
		}
	},
	watch: {
		'$route': 'fetchData'
	},
	computed: {
		postsLinks() {
			return `/user/${this.$route.params.id}/posts`;
		},
		nextUserLink() {
			return `/user/${parseInt(this.$route.params.id,10) + 1}`;
		}
	},

	created() {
		this.fetchData()
	}
}
</script>
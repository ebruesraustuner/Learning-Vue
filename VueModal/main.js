Vue.component('modal', {
	props: ['title', 'body'],

	data(){
		return {
			isVisible: true
		};
	},
	template: '<div class=box v-show="isVisible"><div style="padding-left:80em"><button type="button" @click="hideModal">X</button></div>{{ title }} <br> {{ body }}<br></div>'
,

methods: {
	hideModal(){
		this.isVisible = false;
	}
}
});


new Vue({
	el: '#root',
});
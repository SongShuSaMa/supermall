<template>
	<div>
		<div class="toast">{{ message }}</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				message: "",
			}
		},
		methods: {
			showToast(message,time=2000){
				var toasclass = document.querySelector(".toast");
				toasclass.style.opacity = 1;
				this.message = message;
				setTimeout(() =>{
					toasclass.style.opacity = 0;
				},time)
			}
		}
	}
</script>

<style>
	.toast{
		background-color: rgba(0,0,0,0.6);
		border-radius: 4px;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		z-index: 9;
		padding: 5px 10px;
		color: #fff;
		opacity: 0;
		transition: all 1s;
	}
	
</style>

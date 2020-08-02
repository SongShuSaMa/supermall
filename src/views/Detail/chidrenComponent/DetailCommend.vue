<template>
	<div class="detailcomment" v-if="detailCommentInfo.user">
		<div class="detailcommentmenu">
			<span>用户评价</span><span>更多</span>
		</div>
		
		<div class="detailcommentinfo">
			
			<div class="commentuser">
				<img :src="detailCommentInfo.user.avatar" alt="">
				{{ detailCommentInfo.user.uname }}
			</div>
			
			<div class="commentcontent">
				{{ detailCommentInfo.content }}
			</div>
			<div class="commenttime">{{ detailCommentInfo.created | getCreated}}  {{ detailCommentInfo.style }}</div>
			<div><img class="commentimages" v-for="item in detailCommentInfo.images" :src="item" alt=""></div>
		</div>
	</div>
</template>

<script>
	import {formatDate} from 'common/util'
	export default {
		props:{
			detailCommentInfo: {
				type: Object,
				default (){
					return {}
				}
			}
		},
		filters:{
			getCreated(value){
				const date = new Date(value * 1000);
				return formatDate(date,"yyyy/M/d h:m:s");
			}

		}
	}
</script>

<style scoped>
	.detailcomment{
		margin-top: 20px;
		border-top: 4px solid #eee;
	}
	
	
	.detailcommentmenu{
		display: flex;
		justify-content: space-between;
		padding: 10px;
		margin: 5px;
		border-bottom: 1px solid #eee;
		color: #000;
		font-size: 14px;
	}
	
	.detailcommentinfo{
		padding: 10px;
	}
	
	
	.commentuser>img{
		width: 30px;
		height: 30px;
		margin-right: 5px;
		vertical-align: middle;
	}
	
	.commentcontent{
		margin-top: 10px;
		font-size: 14px;
	}
	
	.commenttime{
		margin-top: 10px;
		font-size: 14px;
		color: #a1a1a1;

	}
	
	.commentimages{
		width: 60px;
		height: 60px;
		margin-top: 10px;
		margin-right: 6px;
		border-radius: 4px;
	}
</style>

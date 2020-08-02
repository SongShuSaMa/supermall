<template>
	<div class="detailparams" v-if="itemParams.rule">
		<table class="detailSizeTable">
			<tr class="detailparamstr" v-for="(item,index) in itemParams.rule.tables[0]">
				<td class="detailparamstd" v-for="item2 in item">
					{{ item2 }}
				</td>
			</tr>
		</table>
		
		<table>
			<tr class="detailparamstr" v-for="item in itemParams.info.set">
				<td class="detailparamstd2">{{ item.key }}</td>
				<td style="color: #e50000">{{ item.value }}</td>
			</tr>
		</table>
	</div>
</template>

<script>
	export default {
		props: {
			itemParams: {
				type: Object,
				default (){
					return {}
				}
			}
		}
	}
</script>

<style>
	.detailparams{
		width: 100%;
	}
	
	.detailparamstr{
		width: calc(100vw - 20px);
		display: flex;
		border-bottom: 1px solid #eeeeee;
		font-size: 14px;
		height: 34px;
		line-height: 34px;
		margin-left: 10px;
		color: #595959;
	}
	
	.detailparamstd{
		flex: 1;
	}
	
	.detailparamstd2{
		width: 30%;
	}
</style>

<template>
	<div class="BookRecord">
		<el-row>
			<el-col :span="6">
				 <el-input
				    placeholder="请输入学生姓名进行查询"
				    prefix-icon="el-icon-search"
				    v-model="keywords" @change="findQuery">
					</el-input>
			</el-col>
			<el-col :span="18">

			</el-col>
		</el-row>
		<el-row class="tabletop" style="text-align: center;">
			<el-col>
				<el-table
			    :data="records"
			    style="width: 100%;text-align: center;"
			    height="460"
			    border
			    header-cell-style="text-align:center;background-color:#FAFAFA;">
			    <el-table-column
			      prop="Book_name"
			      label="书名" class="bookname">
			    </el-table-column>
			    <el-table-column
			      prop="Student_name"
			      label="学生姓名">
			    </el-table-column>
			    <el-table-column
			      prop="borrow_date"
			      label="借书日期" :formatter="dateFormat">
			    </el-table-column>
			    <el-table-column
			      prop="return_date"
			      label="还书日期" :formatter="dateFormat">
			    </el-table-column>
			  </el-table>
			</el-col>
		</el-row>
	</div>
</template>
<script type="text/javascript">
	import {mapState,mapGetters,mapActions} from 'vuex'
	import moment from 'moment'

	export default{
		name:'testRecord',
		computed:{
			...mapGetters(['records'])
		},
	    data() {
	      return { 
	        keywords:'',

	      };
	    },
	    created(){
			this.findAllRecords();

		},
		methods:{
			//日期显示问题
			dateFormat(row,column) {  
		        var date = row[column.property];
		        if (date == undefined) {
		          return "";
		        }
		        return moment(date).format("YYYY-MM-DD");  
		    },
		    //模糊查询
		    findQuery(){
				var params = {keys:this.keywords};
				console.log(params);
		      	this.findQueryStudent(params);

		    },
		    ...mapActions(['findAllRecords','findQueryStudent'])
		},
	}
</script>
<style type="text/css">
	.tabletop{
		margin-top: 10px;
	}
</style>
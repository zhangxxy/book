<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<!-- 11111111 -->
		    <el-tab-pane label="还书" name="first">
				<div class="BookRecord">
					<el-row>
						<el-col :span="6">
							 <el-input
							    placeholder="请输入书名进行查询"
							    prefix-icon="el-icon-search"
							    v-model="keywordsreturn" @change="findQueryreturn">
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
						    <el-table-column label="操作" width="160">
						      <template slot-scope="scope">
						        <el-button v-model="types"
						          size="mini"
						          type="primary"
						          @click="handleDelete(scope.$index, scope.row)">还书</el-button>
						      </template>
						    </el-table-column>
						  </el-table>
						</el-col>
					</el-row>
					<!-- 还书dialog对话框 -->
					<el-dialog :title="title" :visible.sync="dialogFormVisiblereturn">
					  <el-form :model="formreturn">
					    <el-form-item label="书的编号" class="row">
					      <el-input v-model="formreturn.Book_num" style="width:400px;"></el-input>
					    </el-form-item>
					    <el-form-item label="学生学号" class="row">
					      <el-input v-model="formreturn.Student_code" style="width:400px;"></el-input>
					    </el-form-item>
					    <el-form-item label="借书日期" >
					      <el-date-picker
					      v-model="formreturn.borrow_date"
					      type="date"
					      default-value
					      placeholder="选择日期" style="width:400px;">
					      </el-date-picker>
					    </el-form-item>
					    <el-form-item label="还书日期">
					       <el-date-picker
    						    v-model="formreturn.return_date"
    						    type="date"
    						    placeholder="选择日期" style="width:400px;">
					      </el-date-picker>
					    </el-form-item>
					  </el-form>
					  <div slot="footer" class="dialog-footer">
					    <el-button @click="dialogFormVisiblereturn = false">取 消</el-button>
					    <el-button type="primary" @click="handleSubmitreturn">确 定</el-button>
					  </div>
					  {{formreturn}}
					</el-dialog>
				</div>
		    </el-tab-pane>
		    <!-- 222222222 -->
		    <el-tab-pane label="借书" name="second">
		    	<el-row>
					<el-col :span="6">
						 <el-input
						    placeholder="请输入书名进行查询"
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
						    :data="books"
						    style="width: 100%;text-align: center;"
						    height="470"
						    border
						    header-cell-style="text-align:center;background-color:#FAFAFA;">
						    <el-table-column
						      prop="Book_name"
						      label="书名" class="bookname" width="160">
						    </el-table-column>
						    <el-table-column
						      prop="Writer"
						      label="作者" width="150">
						    </el-table-column>
						    <el-table-column
						      prop="Pub_company"
						      label="出版社" width="160">
						    </el-table-column>
						    <el-table-column
						      prop="Pub_date"
						      label="出版日期" :formatter="dateFormat" width="140">
						    </el-table-column>
						    <el-table-column
						      prop="Total_num"
						      label="书籍总数" width="80">
						    </el-table-column>
						    <el-table-column
						      prop="Current_num"
						      label="当前数量" width="80">
						    </el-table-column>
						    <el-table-column
						      prop="Brief"
						      label="书籍描述" width="160">
						    </el-table-column>
						    <el-table-column label="操作" width="160">
						      <template slot-scope="scope">
						        <el-button
						          size="mini"
						          type="primary"
						          @click="handleEdit(scope.$index, scope.row)">借书</el-button>
						        <!-- <el-button
						          size="mini"
						          type="primary"
						          @click="handleDelete(scope.$index, scope.row)">还书</el-button> -->
						      </template>
						    </el-table-column>
						  </el-table>
						</el-col>
					</el-row>
					<!-- 借书dialog对话框 -->
					<el-dialog :title="title" :visible.sync="dialogFormVisible">
					  <el-form :model="form">
					    <el-form-item label="书的编号" class="row">
					      <el-input v-model="form.Book_num" style="width:400px;"></el-input>
					    </el-form-item>
					    <el-form-item label="学生学号" class="row">
					      <el-input v-model="form.Student_code" style="width:400px;"></el-input>
					    </el-form-item>
					    <el-form-item label="借书日期" >
					      <el-date-picker
					      v-model="form.borrow_date"
					      type="date"
					      default-value
					      placeholder="选择日期" style="width:400px;">
					      </el-date-picker>
					    </el-form-item>
					    <el-form-item label="还书日期">
					       <el-date-picker
    						    v-model="form.return_date"
    						    type="date"
    						    placeholder="选择日期" style="width:400px;">
					      </el-date-picker>
					    </el-form-item>
					  </el-form>
					  <div slot="footer" class="dialog-footer">
					    <el-button @click="dialogFormVisible = false">取 消</el-button>
					    <el-button type="primary" @click="handleSubmit">确 定</el-button>
					  </div>
					  {{form}}
					</el-dialog>
		    </el-tab-pane>
		    <!-- 333333 -->
		    <!-- <el-tab-pane label="还书" name="third">
		    	
		    </el-tab-pane> -->
	    </el-tabs>
	</div>
</template>
<script type="text/javascript">
	import {mapState,mapGetters,mapActions} from 'vuex'
	import moment from 'moment'

	 export default {
	 	name:'BookSelects',
		computed:{
			...mapGetters(['records','books'])
		},
	    data() {
	      return {
	        activeName: 'first', 
	        keywords:'',
	        keywordsreturn:'',
			dialogFormVisible:false,
			dialogFormVisiblereturn:false,
			form:{},
			formreturn:{},
			title:'',
			types:'',
	      };
	    },
	    created(){
			this.findAllRecords();
			this.findAllBook();
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
		      	this.findQueryBook(params);
		      	//this.findQueryStudent(params);
		      	//有bug，因为是两个接口，所以需要改进，先搜索书名再搜索学生姓名能成功，但是再接着搜索书名就显示不出来
		    },
		    findQueryreturn(){
				var params = {keys:this.keywordsreturn};
		      	this.findQueryBook(params);
		    },
		    //借书增加记录，当前书籍数量减一
		    handleEdit(index,row){
		      	this.form.Book_num=row.Book_num;
				this.title = "增加借书信息";
		      	this.dialogFormVisible = true;
		    },
		    handleClick(tab, event) {
	        	//console.log(tab, event); 
	        	//全局刷新
	        	//window.location.reload();
	        	if(this.activeName=="first"){
	        		this.findAllRecords();
	        	}else if(this.activeName=="second"){
	        		this.findAllBook();
	        	}else{

	        	}
	      	},
	      	//dialog确认按钮借书
	      	handleSubmit(){
	      		this.dialogFormVisible=false;
				var vm=this;
				if(this.title == "增加借书信息"){
					this.saveborrowbook(this.form).then(function(result){
						vm.$message({
				            type: 'success',
				            message: '借书成功!'
				        });
					}).catch(function(error){
						vm.$message({
				            type: 'error',
				            message: '借书失败!'
				        });
					});
					//借书成功后，当前书籍数量减一
					let id=this.form.Book_num;
			      	this.updateBookNum(id).then(function(result){

					}).catch(function(error){
						
					});
		      	}else{
		      		
		      	}
	      	},
	      	//还书????????????????????
		    handleDelete(index,row){
		    	this.formreturn=row;
		    	this.title = "还书信息";
		      	this.dialogFormVisiblereturn = true;
		      	/*this.types.type="info";*/
		    },
	      	handleSubmitreturn(){
	      		this.dialogFormVisiblereturn=false;
	      		var vm=this;
	      		//还书???????????????
	      		if(this.title == "还书信息"){
	      			this.updateborrowbook(this.formreturn).then(function(result){
		      			console.log("还书",result);
						vm.$message({
				            type: 'success',
				            message: '还书成功!'
				        });
					}).catch(function(error){
						console.log("还书失败",error);
						vm.$message({
				            type: 'error',
				            message: '还书失败!'
				        });
					});
					//还书成功后，当前书籍数量加一
					let id=this.formreturn.Book_num;
					console.log("id",id);
			      	this.updateBookNumadd(id).then(function(result){
			      		console.log("加",result);
					}).catch(function(error){
						console.log("还书数量修改失败",error);
					});
		      	}

	      	},
			//引入
			...mapActions(['findAllRecords','findAllBook','findQueryBook','findQueryStudent','saveborrowbook','updateBookNum','updateborrowbook','updateBookNumadd'])
		}
	};
</script>
<style type="text/css">
	.tabletop{
		margin-top: 10px;
	}
	label{
		font-size: 30px;
		color:red;
	}
</style>
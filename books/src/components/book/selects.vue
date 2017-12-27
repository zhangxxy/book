<template>
	<div class="BookSelects">
		<el-row>
			<el-col :span="6">
				 <el-input
				    placeholder="请输入书名或作者查询"
				    prefix-icon="el-icon-search"
				    v-model="keywords" @change="findQuery">
  				</el-input>
			</el-col>
			<el-col :span="18">
				 <el-button class="addbook" type="primary" @click="handleSingleSave">图书录入</el-button>
			</el-col>
		</el-row>
		<el-row class="tabletop" style="text-align: center;">
			<el-col>
				<!-- stripe -->
				<el-table
			    :data="books"
			    style="width: 100%;text-align: center;"
			    height="510"
			    border
			    header-cell-style="text-align:center;background-color:#FAFAFA;">
			    <!-- <el-table-column
			      prop="Book_num"
			      label="">
			    </el-table-column> -->
			    <el-table-column
			      prop="Book_name"
			      label="书名" class="bookname">
			    </el-table-column>
			    <el-table-column
			      prop="Writer"
			      label="作者" width="80">
			    </el-table-column>
			    <el-table-column
			      prop="Sort_id"
			      label="类型" width="50">
			    </el-table-column>
			    <el-table-column
			      prop="Pub_company"
			      label="出版社">
			    </el-table-column>
			    <el-table-column
			      prop="Pub_date"
			      label="出版日期" :formatter="dateFormat" width="100">
			    </el-table-column>
			    <el-table-column
			      prop="Price"
			      label="价格" width="50">
			    </el-table-column>
			    <el-table-column
			      prop="Total_num"
			      label="总数" width="50">
			    </el-table-column>
			    <el-table-column
			      prop="Current_num"
			      label="当前数量" width="50">
			    </el-table-column>
			    <el-table-column
			      prop="Buy_date"
			      label="购进日期" :formatter="dateFormat" width="100">
			    </el-table-column>
			    <el-table-column
			      prop="Brief"
			      label="描述">
			    </el-table-column>
			    <el-table-column label="操作" width="160">
			      <template slot-scope="scope">
			        <el-button
			          size="mini"
			          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
			        <el-button
			          size="mini"
			          type="danger"
			          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
			      </template>
			    </el-table-column>
			  </el-table>
			</el-col>
		</el-row>
		<!-- dialog对话框 -->
		<el-dialog :title="title" :visible.sync="dialogFormVisible">
		  <el-form :model="form">
		    <el-form-item label="书名" class="row">
		      <el-input v-model="form.Book_name" style="width:400px;"></el-input>
		    </el-form-item>
		    <el-form-item label="作者" class="row">
		      <el-input v-model="form.Writer" style="width:400px;"></el-input>
		    </el-form-item>
		    <el-form-item label="类型" class="row">
				<el-select v-model="form.Sort_id" placeholder="请选择" style="width:400px;">
			     <el-option
			      v-for="item in types"
			      :key="item.Sort_id"
			      :label="item.Sort_name"
			      :value="item.Sort_id">
			    </el-option>
			  </el-select>
		    </el-form-item>
		    <el-form-item label="出版社" class="pubcompany">
		      <el-input v-model="form.Pub_company" style="width:400px;"></el-input>
		    </el-form-item>
		    <el-form-item label="出版日期" >
		      <el-date-picker
		      v-model="form.Pub_date"
		      type="date"
		      placeholder="选择日期" style="width:400px;">
		      </el-date-picker>
		    </el-form-item>
		    <el-form-item label="价格" class="row">
		      <el-input v-model="form.Price" style="width:400px;"></el-input>
		    </el-form-item>
		    <el-form-item label="总数" class="row">
		      <el-input v-model="form.Total_num" style="width:400px;"></el-input>
		    </el-form-item>
		    <el-form-item label="当前数量">
		      <el-input v-model="form.Current_num" style="width:400px;"></el-input>
		    </el-form-item>
		    <el-form-item label="购进日期">
		       <el-date-picker
			      v-model="form.Buy_date"
			      type="date"
			      placeholder="选择日期" style="width:400px;">
		      </el-date-picker>
		    </el-form-item>
		    <el-form-item label="描述" class="row">
		      <el-input v-model="form.Brief" style="width:400px;"></el-input>
		    </el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible = false">取 消</el-button>
		    <el-button type="primary" @click="handleSubmit">确 定</el-button>
		  </div>
		</el-dialog>

	</div>
</template>
<script type="text/javascript">
	import {mapState,mapGetters,mapActions} from 'vuex'
	import moment from 'moment'

	export default{
		name:'BookSelects',
		computed:{
			//把书籍的数据拿过来使用
			//...mapState(['books'])
			/*books(){
				return this.$store.state.bookStore.books;
			}
			不要使用state，因为state不会把数据放在全局的命名空间上*/
			...mapGetters(['books','types'])
		},
		data(){
			return {
				keywords:'',
				dialogFormVisible:false,
				form:{},
				title:'',
			}
		},
		created(){
			//引入之后调用，不调用不会显示
			this.findAllBook();
			this.findAllTypes();
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
			//点击图书录入按钮，弹出dialog提示框
			handleSingleSave(){
				this.dialogFormVisible=true;
				this.title='录入书籍信息';
				this.form={
					type:'文学'				
				};
			},
			//单个保存书籍
			handleSubmit(){
				this.dialogFormVisible=false;
				//点击保存的时候调用单个保存函数
				//怎样知道保存成功了还是失败了用promise
				var vm=this;
				if(this.title == "录入书籍信息"){
					this.saveBook(this.form).then(function(result){
						vm.$message({
				            type: 'success',
				            message: '保存成功!'
				        });
					}).catch(function(error){
						vm.$message({
				            type: 'error',
				            message: '保存失败!'
				        });
					});
		      	}else{
		      		this.updateBook(this.form).then(function(result){
		      			vm.$message({
		      				type:'success',
		      				message:'修改成功！'
		      			});
		      			//console.log("修改陈宫",result);
		      		}).catch(function(error){
		      			vm.$message({
		      				type:'error',
		      				maeeage:'修改失败！'
		      			});
		      		});
		      	}

			},
			//修改书籍信息
			 handleEdit(index,row){
		      	this.form = row;
				this.title = "修改书籍信息";
		      	this.dialogFormVisible = true;	
		      },
			//单个删除书籍
			handleDelete(index,row) {
		        this.$confirm('此操作将永久删除该条记录, 是否继续?', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning'
		        }).then(() => {
		        	let ids = [row.Book_num];
			      	this.batchDeleteBook(ids).then((data)=>{
			      		this.$message({
			            type: 'success',
			            message: '操作成功!'
			          });	
			      	}).catch((error)=>{
			      		this.$message({
			            type: 'error',
			            message: '操作失败!'
			          });
			      	});
		        }).catch(() => {
		          this.$message({
		            type: 'info',
		            message: '已取消操作'
		          });          
		        });
		    },
		    //模糊查询
		    findQuery(){
				var params = {keys:this.keywords};
				console.log(params);
		      	this.findQueryBook(params);
		    },
			//引入
			...mapActions(['findAllBook','findAllTypes','saveBook','updateBook','batchDeleteBook','findQueryBook'])
		}
	}
</script>
<style type="text/css" scoped>
	.tabletop{
		margin-top: 10px;
	}
	.row{
		margin-left:28px;
	}
	.pubcompany{
		margin-left:15px;
	}
	.addbook{
		float:right;
	}

</style>
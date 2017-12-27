<!-- 学生信息 -->
<template>
    <div class="StudentInfo">
        <el-row>
            <el-col :span="6">
                 <el-input
                    placeholder="请输入学生姓名或学号进行查询"
                    prefix-icon="el-icon-search"
                    v-model="keywords" @change="findQuery">
                </el-input>
            </el-col>
            <el-col :span="18">
                 <el-button type="primary" @click="handleSingleSave" class="btnadd">增加学生</el-button>
            </el-col>
        </el-row>
        <el-row class="tabletop" style="text-align: center;">
            <el-col>
                <el-table
                :data="students"
                style="width: 100%;text-align: center;"
                height="510"
                border
                header-cell-style="text-align:center;background-color:#FAFAFA;">
                <el-table-column
                  prop="Student_code"
                  label="学号">
                </el-table-column>
                <el-table-column
                  prop="Student_name"
                  label="姓名">
                </el-table-column>
                <el-table-column
                  prop="Academy_name"
                  label="专业">
                </el-table-column>
                <el-table-column
                  prop="Class_name"
                  label="班级">
                </el-table-column>
                <el-table-column
                  prop="Sex"
                  label="性别">
                </el-table-column>
                <el-table-column
                  prop="Telephone"
                  label="电话">
                </el-table-column>
                <el-table-column
                  prop="Create_date"
                  label="日期" :formatter="dateFormat">
                </el-table-column>
                <el-table-column label="操作" width="160">
                  <template slot-scope="scope">
                    <el-button
                      size="mini"
                      @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                    <el-button
                      size="mini"
                      type="danger"
                      @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-col>
        </el-row>
        <!-- dialog对话框修改 -->
        <el-dialog :title="title" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="学号" class="row">
              <el-input v-model="form.Student_code" style="width:400px;"></el-input>
            </el-form-item>
            <el-form-item label="姓名" class="row">
              <el-input v-model="form.Student_name" style="width:400px;"></el-input>
            </el-form-item>
            <el-form-item label="专业" class="row">
              <el-input v-model="form.Academy_name" style="width:400px;"></el-input>
            </el-form-item>
            <el-form-item label="班级" class="row">
              <el-input v-model="form.Class_name" style="width:400px;"></el-input>
            </el-form-item>
            <el-form-item label="性别" class="row">
              <el-input v-model="form.Sex" style="width:400px;"></el-input>
            </el-form-item>
            <el-form-item label="电话" class="row">
              <el-input v-model="form.Telephone" style="width:400px;"></el-input>
            </el-form-item>
            <el-form-item label="日期" >
              <el-date-picker
              v-model="form.Create_date"
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
        <!-- dialog对话框保存 -->
        <el-dialog :title="titlesave" :visible.sync="dialogFormVisiblesave">
          <el-form :model="formsave">
            <el-form-item label="学号" class="row">
              <el-input v-model="form.Student_code" style="width:400px;"></el-input>
            </el-form-item>
            <el-form-item label="姓名" class="row">
              <el-input v-model="form.Student_name" style="width:400px;"></el-input>
            </el-form-item>
            <el-form-item label="专业" class="row">
              <el-input v-model="form.Academy_name" style="width:400px;"></el-input>
            </el-form-item>
            <el-form-item label="专业编号" class="row">
              <el-input v-model="form.Academy_id" style="width:400px;"></el-input>
            </el-form-item>
            <el-form-item label="班级" class="row">
              <el-input v-model="form.Class_name" style="width:400px;"></el-input>
            </el-form-item>
            <el-form-item label="班级编号" class="row">
              <el-input v-model="form.Class_id" style="width:400px;"></el-input>
            </el-form-item>
            <el-form-item label="性别" class="row">
              <el-input v-model="form.Sex" style="width:400px;"></el-input>
            </el-form-item>
            <el-form-item label="电话" class="row">
              <el-input v-model="form.Telephone" style="width:400px;"></el-input>
            </el-form-item>
            <el-form-item label="日期" >
              <el-date-picker
              v-model="form.Create_date"
              type="date"
              placeholder="选择日期" style="width:400px;">
              </el-date-picker>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisiblesave = false">取 消</el-button>
            <el-button type="primary" @click="handleSubmitsave">确 定</el-button>
          </div>
          {{form}}
        </el-dialog>
    </div>
</template>
<script>
    import {mapState,mapGetters,mapActions} from 'vuex'
    import moment from 'moment'

    export default{
        name:'StudentInfo',
        computed:{
            ...mapGetters(['students','students1','students2'])
        },
        data(){
            return{
                keywords:'',
                dialogFormVisible:false,
                dialogFormVisiblesave:false,
                form:{},
                formsave:{},
                title:'',
                titlesave:'',
            }

        },
        created(){
            this.findAllStudents();
            /*this.findAllAcademy();
            this.findAllStudents1();*/
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

            },
            //修改按钮
            handleEdit(index,row){
                this.form = row;
                this.title = "修改学生信息";
                this.dialogFormVisible = true; 

            },
            //删除按钮
            handleDelete(index,row) {
                this.$confirm('此操作将永久删除该条记录, 是否继续?', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
                }).then(() => {
                    let ids = [row.Student_num];
                    this.batchDeleteStudent(ids).then((data)=>{
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
            //确定按钮
            handleSubmit(){
                this.dialogFormVisible=false;
                var vm=this;
                if(this.title == "修改学生信息"){
                    this.updateStudent(this.form).then(function(result){
                        vm.$message({
                            type: 'success',
                            message: '修改成功!'
                        });
                    }).catch(function(error){
                        vm.$message({
                            type: 'error',
                            message: '修改失败!'
                        });
                    });
                }

            },
            //单个录入学生信息
            handleSingleSave(){
                this.dialogFormVisiblesave=true;
                this.titlesave='录入学生信息';
                this.form={

                };
            },
            //确定按钮
            handleSubmitsave(){
                this.dialogFormVisiblesave=false;
                var vm=this;
                if(this.title == "录入学生信息"){
                    this.saveStudent(this.form).then(function(result){
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
                }

            },
            findQuery(){
                var params = {keys:this.keywords};
                console.log(params);
                this.findQueryStudent(params);
            },
            ...mapActions(['findAllStudents','saveStudent','updateStudent','batchDeleteStudent','findQueryStudent'])
        }
    }
</script>
<style scoped>
    .tabletop{
        margin-top: 10px;
    }
    .btnadd{
        float:right;
    }
</style>
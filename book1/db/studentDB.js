var pool=require('./pool');

module.exports = {
    //查找所有学生信息
    findAll(){
      var sql = "select ts.Student_num,ts.Student_code,ts.Student_name,ts.Academy_id,ta.Academy_name,ts.Class_id,tc.Class_name,ts.Sex,ts.Telephone,ts.Create_date from t_academy as ta,t_class as tc,t_student as ts where ts.Academy_id=ta.Academy_id and ts.Class_id=tc.Class_id";
      return pool.execute(sql);
    },
    //删除多个学生
    batchDelete(ids){
      var sql="delete from t_student where Student_num in ("+ids.join()+")";
      return pool.execute(sql);
    },
    //添加学生信息
    save(student){
      var sql="insert into t_student values(null,'"+student.Student_code+"','"
      +student.Student_name+"','"
      +student.Academy_id+"','"
      +student.Class_id+"','"
      +student.Sex+"','"
      +student.Telephone+"','"
      +student.Create_date+"')";
      return pool.execute(sql);
    },
    //修改学生信息
    update(student){
      var sql="update t_student set Student_code = '"
      +student.Student_code+"',Student_name = '"
      +student.Student_name+"',Academy_id = '"
      +student.Academy_id+"',Class_id='"
      +student.Class_id+"',Sex='"
      +student.Sex+"',Telephone='"
      +student.Telephone+"',Create_date='"
      +student.Create_date+"' where Student_num ="
      +student.Student_num;
      return pool.execute(sql);
    },
    //模糊查询(学生学号查询)
    query(keys){
      //var sql="select * from t_student where Student_name like '%"+keys+"%' or Student_code like '%"+keys+"%'";
      var sql = "select ts.Student_num,ts.Student_code,ts.Student_name,ts.Academy_id,ta.Academy_name,ts.Class_id,tc.Class_name,ts.Sex,ts.Telephone,ts.Create_date from t_academy as ta,t_class as tc,t_student as ts where ts.Academy_id=ta.Academy_id and ts.Class_id=tc.Class_id and Student_code like '%"+keys+"%'";
      return pool.execute(sql);
    },
    //查找所有专业,没用
    findAllAcademy(){
      var sql="select * from t_academy";
      return pool.execute(sql);
    },
    //查找所有班级,没用
    findAllClass(){
      var sql="select * from t_class";
      return pool.execute(sql); 
    }
}
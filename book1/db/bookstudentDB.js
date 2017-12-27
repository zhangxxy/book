var pool=require('./pool');

module.exports = {
    //查询所有借还记录
    findAll(){
       var sql="select tb.Book_name,ts.Student_name,tbs.Id,tbs.Student_code,tbs.Book_num,tbs.borrow_date,tbs.return_date from t_book as tb,t_student as ts,t_book_student as tbs where tb.Book_num=tbs.Book_num and ts.Student_code=tbs.Student_code";
      return pool.execute(sql);
    },
    //模糊查询
    queryBook(keys){
      //var sql="select * from t_book where Book_name like '%"+keys+"%' or Writer like '%"+keys+"%'";
      var sql="select Book_name,Student_name,borrow_date,return_date from t_book,t_student,t_book_student where t_book.Book_num=t_book_student.Book_num and t_student.Student_code=t_book_student.Student_code and Book_name like '%"+keys+"%'";
      return pool.execute(sql);
    },
    queryStudent(keys){
      var sql="select Book_name,Student_name,borrow_date,return_date from t_book,t_student,t_book_student where t_book.Book_num=t_book_student.Book_num and t_student.Student_code=t_book_student.Student_code and Student_name like '%"+keys+"%'";
      return pool.execute(sql);
    },
    //增加借还书记录
    save(book){
      var sql = "insert into t_book_student values(null,'"+book.Book_num+"','"
      +book.Student_code+"','"
      +book.borrow_date+"','"
      +book.return_date+"')";
      console.log(sql);
      return pool.execute(sql);
    },
    //修改借还书记录
    update(bookstudent){
      var sql="update t_book_student set Book_num = '"
      +bookstudent.Book_num+"',Student_code = '"
      +bookstudent.Student_code+"',borrow_date = '"
      +bookstudent.borrow_date+"',return_date='"
      +bookstudent.return_date+"' where Id ="
      +bookstudent.Id;
      console.log(sql);
      return pool.execute(sql);
    }
}
require('babel-polyfill');
var bookDB=require('./bookDB');
var Book=require('../model/Book');
/* bookDB.findAll().then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
}) */

//增加
/*  var book = new Book(null,'javascript','larry','1','30','上海工业出版社','1995-01-02','34','15','1996-01-01','计算机系列丛书');
bookDB.save(book).then(function(data){
  console.log(data);
}).catch(function(error){
  console.log("报错了 ！"+error);
});  */
//修改
var book = new Book(19,'javascript','张晓鑫','1','30','上海工业出版社','1995-01-02','34','15','1996-01-01','计算机系列丛书');
bookDB.update(book).then(function(data){
  console.log(data);
}).catch(function(error){
  console.log("报错了 ！"+error);
}) 
//删除
/* var ids = [15,16];
bookDB.batchDelete(ids).then(function(data){
  console.log(data);
}).catch(function(error){
  console.log("报错了 ！"+error);
}) */
//通过id删除
/* var Book_num =17;
bookDB.DeleteById(Book_num).then(function(data){
  console.log(data);
}).catch(function(error){
  console.log("报错了 ！"+error);
}) */
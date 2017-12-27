var express=require('express');
var route=express.Router();
var bookstudentDB=require('../db/bookstudentDB');
var BookStudent=require('../model/BookStudent');

//查询所有记录
route.get('/findAll',(req,resp)=>{
    bookstudentDB.findAll().then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    })
})
route.get('/queryBook',(req,resp)=>{
  bookstudentDB.queryBook(req.query.keys).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(err);
  });
})
route.get('/queryStudent',(req,resp)=>{
  bookstudentDB.queryStudent(req.query.keys).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(err);
  });
})
//增加借还书记录
route.post('/save',(req,resp)=>{
  let bookstudent={
    Id:null,
    Book_num: req.body.Book_num,
    Student_code: req.body.Student_code,
    borrow_date: req.body.borrow_date.slice(0,10),
    return_date:req.body.return_date.slice(0,10),
  }; 
  bookstudentDB.save(bookstudent).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    console.log(error);
    resp.send(error);
  });
});

//修改借还书记录
route.post('/update',(req,resp)=>{
  console.log("id",req.body);
  let bookstudent={
    Id:req.body.Id,
    Book_num: req.body.Book_num,
    Student_code: req.body.Student_code,
    borrow_date: req.body.borrow_date.slice(0,10),
    return_date:req.body.return_date.slice(0,10),
  }; 
  console.log(bookstudent);
  bookstudentDB.update(bookstudent).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    console.log(error);
    resp.send(error);
  });
});

//删除
module.exports=route;
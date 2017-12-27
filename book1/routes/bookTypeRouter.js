var express=require('express');
var route=express.Router();
var bookTypeDB=require('../db/bookTypeDB');

//查询所有书籍
route.get('/findAll',(req,resp)=>{
    bookTypeDB.findAll().then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    })
})
module.exports=route;
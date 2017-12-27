var express=require('express');
var route=express.Router();
var bookDB=require('../db/bookDB');
var Book=require('../model/Book');

//查询所有书籍
route.get('/findAll',(req,resp)=>{
    bookDB.findAll().then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    })
});
//模糊查询(通过书名或作者查找)
route.get('/query',(req,resp)=>{
  bookDB.query(req.query.keys).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(err);
  });
})
//也可以通过分类来查询type类型,以后有需要再加

//通过id删除书籍,路由删除和通过id删除没有做测试,但是sql语句是正确的,已经在test.js里面测试过了
route.post('/DeleteById',(req,resp)=>{
    bookDB.DeleteById(id).then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    });
});
//删除多本书籍 {ids:'[1,2,3]'}不知到对不对????
route.post('/batchDelete',(req,resp)=>{
  var ids=req.body.ids;
  bookDB.batchDelete(ids).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
//添加书籍
route.post('/save',(req,resp)=>{
  let book = new Book();
  var ss={
    Book_num: req.body.Book_num,
    Book_name: req.body.Book_name,
    Writer: req.body.Writer,
    Sort_id: req.body.Sort_id,
    Price: req.body.Price,
    Pub_company: req.body.Pub_company,
    Pub_date: req.body.Pub_date.slice(0,10),
    Total_num: req.body.Total_num,
    Current_num: req.body.Current_num,
    Buy_date: req.body.Buy_date.slice(0,10),
    Brief: req.body.Brief
  }
  Object.assign(book,ss);
  bookDB.save(book).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    console.log(error);
    resp.send(error);
  });
});
//修改书籍
route.post("/update",(req,resp)=>{
  let book = new Book();
  var ss={
    Book_num: req.body.Book_num,
    Book_name: req.body.Book_name,
    Writer: req.body.Writer,
    Sort_id: req.body.Sort_id,
    Price: req.body.Price,
    Pub_company: req.body.Pub_company,
    Pub_date: req.body.Pub_date.slice(0,10),
    Total_num: req.body.Total_num,
    Current_num: req.body.Current_num,
    Buy_date: req.body.Buy_date.slice(0,10),
    Brief: req.body.Brief
  }
  console.log("body",ss);
  Object.assign(book,ss);
  bookDB.update(book).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
})
//修改当前书籍的数量减一
route.post("/updatenum",(req,resp)=>{
  console.log("当前数量",req.body);
  var id=req.body.id;
  bookDB.updatenum(id).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
})
//修改当前书籍的数量加一
route.post("/updatenumadd",(req,resp)=>{
  console.log("当前数量",req.body);
  var id=req.body.id;
  bookDB.updatenumadd(id).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
})
module.exports=route;
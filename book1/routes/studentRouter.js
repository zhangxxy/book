var express=require('express');
var route=express.Router();
var studentDB=require('../db/studentDB');

//查询所有学生信息
route.get('/findAll',(req,resp)=>{
    studentDB.findAll().then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    })
})
route.get('/findAll1',(req,resp)=>{
    studentDB.findAll().then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    })
})
//保存学生信息
route.post('/save',(req,resp)=>{
    let student={
        Student_num:req.body.Student_num,
        Student_code: req.body.Student_code,
        Student_name: req.body.Student_name,
        Academy_id: req.body.Academy_id,
        Class_id: req.body.Class_id,
        Sex: req.body.Sex,
        Telephone:req.body.Telephone, 
        Create_date: req.body.Create_date.slice(0,10),
    };
    studentDB.save(student).then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    })
})
//修改学生信息
route.post('/update',(req,resp)=>{
    let student={
        Student_num:req.body.Student_num,
        Student_code: req.body.Student_code,
        Student_name: req.body.Student_name,
        Academy_id: req.body.Academy_id,
        Class_id: req.body.Class_id,
        Sex: req.body.Sex,
        Telephone:req.body.Telephone, 
        Create_date: req.body.Create_date.slice(0,10),
    };
    studentDB.update(student).then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    })
})
//删除学生信息
route.post('/batchDelete',(req,resp)=>{
    var ids=req.body.ids;
    studentDB.batchDelete(ids).then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    })
})
//模糊查询
route.get('/query',(req,resp)=>{
  studentDB.query(req.query.keys).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(err);
  });
})
//查找所有专业
route.get('/findAllAcademy',(req,resp)=>{
    studentDB.findAllAcademy().then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    })
})
//查询所有班级
route.get('/findAllClass',(req,resp)=>{
    studentDB.findAllClass().then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    })
})
module.exports=route;
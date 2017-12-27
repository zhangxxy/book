<template>
  <div id="app">
    <header>
      <el-row>
        <el-col :span="4" class="title"><i class="el-icon-menu"></i><span>&nbsp;&nbsp;</span>图书管理系统</el-col>
        <el-col :span="20"></el-col>
      </el-row>
    </header>
    <article>
      <el-row>
        <!-- router=true是进行路由跳转的 -->
        <el-col :span="4" class="navleft">
           <el-menu
            router=true 
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="/book">
              <template slot="title">
                <i class="el-icon-tickets"></i>
                <span>图书管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/book/selects">图书检索及管理</el-menu-item>
                <!-- <el-menu-item index="/book/info">管理全部图书</el-menu-item> -->
                <el-menu-item index="/book/record">书籍借阅记录</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
           <el-submenu index="/student">
              <template slot="title">
                <i class="el-icon-service"></i>
                <span>学生管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/student/info">学生信息</el-menu-item>
                <el-menu-item index="/student/test">学生借阅历史</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="/admin">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>测试</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/admin/update">选项1</el-menu-item>
                <el-menu-item index="/admin/test">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
        <el-col :span="20" class="container">
          <!-- 当路由发生改变，路由对应的模块显示到这里 -->
          <router-view></router-view>
        </el-col>
      </el-row>
    </article>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'app',
  mounted:function(){
    //获取浏览器视口的高度
    $('.navleft').height($(window).height()-58);
  }
}
</script>

<style>
  body{
    margin:0;
    padding:0;
  }
  header{
    /*background-color:rgb(47,57,63);*/
    background-color:rgb(68,73,80);
  }
  header .title{
    height:58px;
    line-height:58px;
    text-align:center;
    font-size:20px;
    color:#fff;
  }
  .navleft{
    background-color:#545c64;
  }
  .container{
    padding:10px;
  }
</style>







 <!-- <template>
  <div id="app">
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm" router=true>
      <el-form-item label="用户名" prop="username">
        <el-input type="username" v-model="ruleForm2.username" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
 </template>
 <script type="text/javascript">
   export default {
      name: 'app',
      data(){
        return{
          ruleForm2:'',
        }
      },
      mounted:function(){
        //获取浏览器视口的高度
        //$('.navleft').height($(window).height()-58);
      },
      methods:{
        submitForm(){
 
        },
        resetForm(){
 
        }
      },
    }
 </script>
 <style type="text/css">
   
 </style> -->
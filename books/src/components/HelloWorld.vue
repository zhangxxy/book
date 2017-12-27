<!-- <template>
  <div class="HelloWorld">
     <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

Add "scoped" attribute to limit CSS to this component only
<style scoped>
 h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} 
</style> -->

<template>
  <div id="HelloWorld">
    <header>
      <el-row>
        <el-col :span="4" class="title">图书管理系统</el-col>
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
                <el-menu-item index="/book/info">管理全部图书</el-menu-item>
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
                <span>修改信息</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/admin/update">账号密码修改</el-menu-item>
                <el-menu-item index="/admin/test">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
        <el-col :span="20" class="container">
          当路由发生改变，路由对应的模块显示到这里
          <router-view></router-view>
        </el-col>
      </el-row>
    </article>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'HelloWorld',
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
    background-color:rgb(47,57,63);
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

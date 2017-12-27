import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld.vue'
import Book from '@/components/book/index.vue'
import BookSelects from '@/components/book/selects.vue'
import BookRecord from '@/components/book/record.vue'
import Student from '@/components/student/index.vue'
import StudentInfo from '@/components/student/info.vue'
import testRecord from '@/components/student/test.vue'

// import Student from '@/components/student/index'
// import StudentInfo from '@/components/student/info'

Vue.use(Router);

export default new Router({
    routes: [{
      path: '/book',
      component: Book,
      children:[{
        path: 'selects',
        component: BookSelects
      }]
    },
    {
      path: '/book',
      component: Book,
      children:[{
        path: 'record',
        component: BookRecord
      }]
    },
    {
      path: '/student',
      component: Student,
      children:[{
        path: 'info',
        component: StudentInfo
      }]
    },
    {
      path: '/student',
      component: Student,
      children:[{
        path: 'test',
        component: testRecord
      }]
    },
  ]
})

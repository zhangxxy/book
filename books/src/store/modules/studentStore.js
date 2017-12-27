//异步操作引入axios
import axios from 'axios'
import Vue from 'vue'
Vue.use(axios)

export default{
	state:{
		students:[],
		// students1:[],
		// students2:[],

	},
	getters:{
		students:state=>state.students,
		// students1:state=>state.students1,
		// students2:state=>state.students2

	},
	mutations:{
		alterStudents(state,data){
			state.students=data;
		},
		/*alterStudent1(state,data){
			state.students1=data;
		},
		alterStudent2(state,data){
			state.students2=data;
		}*/
	},
	actions:{
		//所有的
		findAllStudents(context){
			axios.get('http://192.168.44.200:3000/student/findAll').then(({data})=>{
				context.commit('alterStudents',data);
			})
		},
		/*findAllStudents1(context){
			axios.get('http://192.168.44.200:3000/student/findAll1').then(({data})=>{
				context.commit('alterStudents1',data);
			})
		},
		findAllAcademy(context){
			axios.get('http://192.168.44.200:3000/student/findAllAcademy').then(({data})=>{
				context.commit('alterStudents2',data);
			})
		},*/
		saveStudent(context,form){
			return new Promise(function(resolve,reject){
				axios.post('http://192.168.44.200:3000/student/save',form).then((result)=>{
					context.dispatch('findAllStudents');
					resolve(result);
					console.log("前端",result);
				}).catch(function(error){
					reject(error);
					console.log("error",error);
				});
			})
		},
		updateStudent(context,form){
			return new Promise(function(resolve,reject){
				axios.post('http://192.168.44.200:3000/student/update',form).then((result)=>{
					context.dispatch('findAllStudents');
					resolve(result);
					console.log("123",result);
				}).catch(function(error){
					reject(error);
				})
			})
		},
		batchDeleteStudent(context,ids){
			return new Promise((resolve,reject)=>{
				axios.post('http://192.168.44.200:3000/student/batchDelete',{ids:ids}).then((data)=>{
					context.dispatch('findAllStudents');
					resolve(data);
				}).catch((error)=>{
					reject(error);
				});
			})
		},
		findQueryStudent(context,params){
			axios.get('http://192.168.44.200:3000/student/query',{params}).then(({data})=>{
				context.commit('alterStudents',data);
				//context.commit('alterClazz',data);
			}).catch((error)=>{

			});
		},	
	}
}
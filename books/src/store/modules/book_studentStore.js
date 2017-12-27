//异步操作引入axios
import axios from 'axios'
import Vue from 'vue'
Vue.use(axios)

export default{
	state:{
		records:[]
	},
	getters:{
		records:state=>state.records
	},
	mutations:{
		alterRecords(state,data){
			state.records=data;
		}
	},
	actions:{
		//每一本书对应着借阅记录
		//每个学生对应的借阅记录
		//所有的
		findAllRecords(context){
			axios.get('http://192.168.44.200:3000/bookstudent/findAll').then(({data})=>{
				context.commit('alterRecords',data);
			})
		},
		//模糊查询
		findQueryBook(context,params){
			axios.get('http://192.168.44.200:3000/bookstudent/queryBook',{params}).then(({data})=>{
				context.commit('alterRecords',data);
				//context.commit('alterClazz',data);
			}).catch((error)=>{

			});
		},
		findQueryStudent(context,params){
			axios.get('http://192.168.44.200:3000/bookstudent/queryStudent',{params}).then(({data})=>{
				context.commit('alterRecords',data);
				//context.commit('alterClazz',data);
			}).catch((error)=>{

			});
		},
		//保存在book_student表中
		saveborrowbook(context,form){
			return new Promise(function(resolve,reject){
				axios.post('http://192.168.44.200:3000/bookstudent/save',form).then((result)=>{
					context.dispatch('findAllRecords');
					resolve(result);
				}).catch(function(error){
					reject(error);
					console.log("error",error);
				});
			})
		},
		//还书，修改book_student表中信息
		updateborrowbook(context,form){
			return new Promise(function(resolve,reject){
				axios.post('http://192.168.44.200:3000/bookstudent/update',form).then((result)=>{
					//context.dispatch('findAllRecords');
					resolve(result);
				}).catch(function(error){
					reject(error);
					console.log("error",error);
				});
			})
		}

	}
}
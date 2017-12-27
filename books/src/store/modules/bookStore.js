//异步操作引入axios
import axios from 'axios'
import Vue from 'vue'
Vue.use(axios)

//处理书籍的状态（数据）
export default{
	state:{
		//模拟：我想把这里面的值要在selects.vue里面使用，怎样操作
		//此处的数据是从后台拿来的，要交给actions从后台拿（因为异步操作）
		books:[]
	},
	getters:{
		//不过滤直接返回
		//books:state=>state.books
		books:function(state){
			return state.books;
		}
	},
	mutations:{
		//因为state不能直接修改从后台拿回来的值
		alterBook(state,data){
			state.books=data;
		}
	},
	actions:{
		//查找所有书籍
		findAllBook(context){
			axios.get('http://192.168.44.200:3000/book/findAll').then(({data})=>{
				//提交
				context.commit('alterBook',data);
			})
		},
		//保存书籍信息
		saveBook(context,form){
			//怎样知道保存成功了还是失败了用promise
			return new Promise(function(resolve,reject){
				axios.post('http://192.168.44.200:3000/book/save',form).then((result)=>{
					//console.log(result);
					//当保存成功之后需要刷新
					context.dispatch('findAllBook');
					resolve(result);
				}).catch(function(error){
					reject(error);
					console.log("error",error);
				});
			})
		},
		//修改书籍信息
		updateBook(context,form){
			return new Promise(function(resolve,reject){
				axios.post('http://192.168.44.200:3000/book/update',form).then((result)=>{
					context.dispatch('findAllBook');
					resolve(result);
					// console.log(result);
				}).catch(function(error){
					reject(error);
				})
			})
		},
		//修改书籍当前数量减一
		updateBookNum(context,id){
			return new Promise(function(resolve,reject){
				axios.post('http://192.168.44.200:3000/book/updatenum',{id:id}).then((result)=>{
					context.dispatch('findAllBook');
					resolve(result);
					// console.log(result);
				}).catch(function(error){
					reject(error);
				})
			})
		},
		//修改书籍当前数量加一
		updateBookNumadd(context,id){
			return new Promise(function(resolve,reject){
				axios.post('http://192.168.44.200:3000/book/updatenumadd',{id:id}).then((result)=>{
					context.dispatch('findAllBook');
					resolve(result);
					// console.log(result);
				}).catch(function(error){
					reject(error);
				})
			})
		},
		//删除书籍
		batchDeleteBook(context,ids){
			return new Promise((resolve,reject)=>{
				axios.post('http://192.168.44.200:3000/book/batchDelete',{ids:ids}).then((data)=>{
					context.dispatch('findAllBook');
					resolve(data);
				}).catch((error)=>{
					reject(error);
				});
			})
		},
		//模糊查询
		findQueryBook(context,params){
			axios.get('http://192.168.44.200:3000/book/query',{params}).then(({data})=>{
				context.commit('alterBook',data);
				//context.commit('alterClazz',data);
			}).catch((error)=>{

			});
		},
	}
}
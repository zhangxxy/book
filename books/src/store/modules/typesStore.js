import axios from 'axios'
import Vue from 'vue'
Vue.use(axios)

export default {
	state:{
		types:[]
	},
	getters:{
		types:state=>state.types
	},
	mutations:{
		alterTypes(state,data){
			state.types=data;
		}
	},
	actions:{
		findAllTypes(context){
			axios.get('http://192.168.44.200:3000/booktype/findAll').then(({data})=>{
				context.commit('alterTypes',data);
				console.log("类型",data);
			})
		}
	}
}
import Vuex from 'vuex'
import Vue from 'vue'
import bookStore from './modules/bookStore'
import typesStore from './modules/typesStore'
import book_studentStore from './modules/book_studentStore'
import studentStore from './modules/studentStore'

Vue.use(Vuex);
//新建store之前要先use，否则报错
export default new Vuex.Store({
	modules:{
		bookStore,
		typesStore,
		book_studentStore,
		studentStore
	}
})
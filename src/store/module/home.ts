import { HomeState } from '@/pages/views/home/home.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as HomeApi from '@/api/home'

const state: HomeState = {
  author: '三毛'
}

// 强制使用getter获取state
const getters: GetterTree<HomeState, any> = {
  author: (state: HomeState) => state.author
}

// 更改state
const mutations: MutationTree<HomeState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: HomeState, data: HomeState) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) { return }
       // @ts-ignore
      state[key] = data[key]
    }
  }
}

const actions: ActionTree<HomeState, any> = {
  UPDATE_STATE_ASYN({ commit, state: HomeState }, data: HomeState) {
    commit('UPDATE_STATE', data)
  },
  // GET_DATA_ASYN({ commit, state: LoginState }) {
  //   Home.getData()
  // }
}

export default {
  state,
  getters,
  mutations,
  actions
}


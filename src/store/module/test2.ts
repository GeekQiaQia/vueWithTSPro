import { Test2State } from '@/pages/views/test2.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'


const state: Test2State = {
  author: 'newVuex'
}

// 强制使用getter获取state
const getters: GetterTree<Test2State, any> = {
  author: (state: Test2State) => state.author
}

// 更改state
const mutations: MutationTree<Test2State> = {
  // 更新state都用该方法
  UPDATE_STATE(state: Test2State, data: Test2State) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) { return }
      // @ts-ignore
      state[key] = data[key]
    }
  }
}

const actions: ActionTree<Test2State, any> = {
  UPDATE_STATE_ASYN({ commit, state: Test2State }, data: Test2State) {
    commit('UPDATE_STATE', data)
  },
  // GET_DATA_ASYN({ commit, state: LoginState }) {
  //   Test2.getData()
  // }
}

export default {
  state,
  getters,
  mutations,
  actions
}


import { RegistState } from '@/pages/views/regist/regist.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'

const state: RegistState = {
  author: 'newVuex'
}

// 强制使用getter获取state
const getters: GetterTree<RegistState, any> = {
  author: (state: RegistState) => state.author
}

// 更改state
const mutations: MutationTree<RegistState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: RegistState, data: RegistState) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) { return }
       // @ts-ignore
      state[key] = data[key]
    }
  }
}

const actions: ActionTree<RegistState, any> = {
  UPDATE_STATE_ASYN({ commit, state: RegistState }, data: RegistState) {
    commit('UPDATE_STATE', data)
  },
  // GET_DATA_ASYN({ commit, state: LoginState }) {
  //   Regist.getData()
  // }
}

export default {
  state,
  getters,
  mutations,
  actions
}


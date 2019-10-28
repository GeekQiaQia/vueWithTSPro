/**
 * @Description:
 * @author GeekQiaQia
 * @date 2019/10/17 10:58
 * @IDE WebStorm
 */
import Vue from 'vue'
import Vuex from 'vuex'

import Login from './module/login'
Vue.use(Vuex);
export default new Vuex.Store({
    state:{},
    mutations:{},
    actions:{},
    modules:{
        Login,
    }
});

/**
 * @Description:
 * @author GeekQiaQia
 * @date 2019/12/5 11:19
 * @IDE WebStorm
 */
import vDialog from './src/dialog.vue';

/* istanbul ignore next */
function install(Vue: { component: (arg0: any, arg1: any) => void; },options={}){
    console.log("name is ",vDialog.name);
    Vue.component(vDialog.name, vDialog)
}
export default install
if(typeof module==="object" && module.exports){
    module.exports.install=install;
}

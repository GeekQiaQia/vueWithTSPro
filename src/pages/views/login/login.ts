import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { LoginData } from './login.interface'
import { Form as ElForm } from 'element-ui';
import LoginHeader from "@/pages/components/loginHeader.vue" // 组件

@Component({components:{LoginHeader}})
export default class About extends Vue {
  // Getter
  // @Getter author

  // Action
  // @Action GET_DATA_ASYN

  // data
  data: LoginData = {
    pageName: 'login'
  }

  ruleForm:Object={
    username:"",
    password:""
  }
  // @ts-ignore
  rules:Object={
  username: [
         { required:true,message:"请输入用户名",trigger: 'blur' }
        ],
  password:[
        { required:true,message:"请输入密码", trigger: 'blur' }
        ]
  }

  public submitForm(formName:string) {
    const ref = (this.$refs[formName] as ElForm);
    ref.validate((valid:boolean) => {
      if (valid) {
        console.log(this.ruleForm);
      } else {
        console.log('error submit!!');
        return false;
      }
    });
  }
  public resetForm(formName:string) {
    console.log(this);
    const ref = (this.$refs[formName] as ElForm);
    ref.resetFields();
  }
  created() {
    //
  }


  mounted() {
    //
  }

  // 初始化函数
  init() {
    //
  }

}

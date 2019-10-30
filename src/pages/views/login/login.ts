import {Component, Provide, Vue} from "vue-property-decorator"
import {LoginData,RuleForm} from './login.interface'
import {Form as ElForm} from 'element-ui';
import LoginHeader from "@/pages/components/loginHeader.vue" // 组件
import Head from "@/pages/components/head/head.vue" // 组件
import {toLogin} from '@/api'
@Component({components:{LoginHeader,Head}})
export default class About extends Vue {
  // Getter
  // @Getter author

  // Action
  // @Action GET_DATA_ASYN

  // data
  data: LoginData = {
    pageName: 'login'
  };
  isLoading:boolean=false;


  ruleForm:RuleForm={
    username:"",
    password:""
  };

  actived:boolean=true;
  loginWay:boolean=true;

  // @ts-ignore
  rules:Object={
  username: [
         { required:true,message:"请输入用户名",trigger: 'blur' }
        ],
  password:[
        { required:true,message:"请输入密码", trigger: 'blur' }
        ]
  }

  public changeLoginTab(){
    this.actived=!this.actived;
  }

  public toChangeLoginWay(){
    console.log("toChangeLoginWay");
    this.loginWay=!this.loginWay;
  }

  public submitForm(formName:string) {
    const ref = (this.$refs[formName] as ElForm);
    ref.validate((valid:boolean) => {
      if (valid) {
        console.log(this.ruleForm);
        let reqData:Object=this.ruleForm;
        this.isLoading=true;
        // (this as any).$axios.post("/api/rest/login",reqData)
        toLogin(reqData)
            .then((res: any)=>{
              console.log(res);
              this.isLoading=false;
              if(res&&res.data.code===200){
                // 登录成功后存储token;
                localStorage.setItem('tsToken',res.data.token)
              }

            })
            .catch((err:any)=>{
              this.$message({
                type:"error",
                message:"err"
              });
              this.isLoading=false;

            });
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

import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { RegistData ,RuleForm } from './regist.interface'
import {Form as ElForm} from "element-ui";
import {toRegist} from "@/api";
 import Head from "@/pages/components/head/head.vue" // 组件

@Component({components:{Head}})
export default class regist extends Vue {
  // Getter
  // @Getter author

  // Action
  // @Action GET_DATA_ASYN
  isLoading:boolean=false;
  // data
  data: RegistData = {
    pageName: 'regist'
  };
  captcha:string="Xyz6";
  ruleForm:RuleForm={
    phoneNum:"",
    captcha:"",
    verifyCode:"",
    password:"",
    checkPassword:"",
    inviteCode:"",
    agree:false,
  };
  public submitForm(formName:string) {
    const ref = (this.$refs[formName] as ElForm);
    ref.validate((valid:boolean) => {
      if (valid) {
        console.log(this.ruleForm);
        let reqData:Object=this.ruleForm;
        this.isLoading=true;
        // (this as any).$axios.post("/api/rest/login",reqData)
        toRegist(reqData)
            .then((res: any)=>{
              console.log(res);
              this.isLoading=false;
              if(res&&res.data.code===200){
                // 登录成功后存储token;
                this.$message({
                  type:"success",
                  message:"注册成功"
                });
                this.$router.push("/login");
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

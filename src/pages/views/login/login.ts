import {Component, Emit, Provide, Vue} from "vue-property-decorator"
import {LoginData,RuleForm} from './login.interface'
import {Form as ElForm} from 'element-ui';
import LoginHeader from "@/pages/components/loginHeader.vue" // 组件
import Head from "@/pages/components/head/head.vue" // 组件
import {toLogin,qrcodeLoginCheck} from '@/api'
// @ts-ignore
import QRCode from 'qrcodejs2'
// @ts-ignore
import md5 from 'js-md5'
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
    checked:boolean=false;
    qrcodeLink:string="";

  ruleForm:RuleForm={
    username:"",
    password:""
  };

  actived:boolean=true;
  loginWay:boolean=true;
  qrcodeCancel:boolean=false;
  loginSuccess:boolean=false;

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
    /**
     * @description: 提交注册表单
     * @param: formName 注册表单名
     * */
  public submitForm(formName:string) {
    const ref = (this.$refs[formName] as ElForm);
    ref.validate(async (valid: boolean) => {
        if (valid) {
            console.log(this.ruleForm);

            let {username,password}=this.ruleForm;
            let tempPassword=password;
            password= this.calcuMD5(password);
            let reqData={username,password};
            this.isLoading = true;
            // (this as any).$axios.post("/api/rest/login",reqData)
            await toLogin(reqData)
                .then((res: any) => {
                    console.log(res);
                    this.isLoading = false;
                    if (res && res.data.code === 200) {
                        // 登录成功后存储token;
                        localStorage.setItem('tsToken', res.data.token)
                        let checked=this.checked;
                        if(checked){ // 如果选择了保存密码；则将密码保存在cookie;
                            // 保存信息和天数；
                            this.setCookie(username,tempPassword,7);
                        }else{
                            console.log("清空cookie");
                            this.clearCookie();
                        }
                    }

                })
                .catch((err: any) => {
                    this.$message({
                        type: "error",
                        message: "err"
                    });
                    this.isLoading = false;

                });
        } else {
            console.log('error submit!!');
            return false;
        }
    });
  }
   /**
    * @description: 设置cookie;
    * */
    public setCookie(username:string| number,tempPassword:string|number,days:number):void{
        let exdate=new Date(); // 获取时间；
        exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * days); //保存的天数
        //字符串拼接cookie
        // @ts-ignore
        window.document.cookie =
            "username" + "=" + username + ";path=/;expires=" + exdate.toUTCString();
        // @ts-ignore
        window.document.cookie =
            "tempPassword" + "=" + tempPassword + ";path=/;expires=" + exdate.toUTCString();

    }
    /**
     * @description :获取cookie
     * */
    public getCookie():void {
        console.log(document.cookie);
        if (document.cookie.length > 0) {
            var arr = document.cookie.split("; ");
            for (var i = 0; i < arr.length; i++) {
                var arr2 = arr[i].split("="); //再次切割
                //判断查找相对应的值
                if (arr2[0] == "username") {
                    this.ruleForm.username = arr2[1]; //保存到保存数据的地方
                } else if (arr2[0] == "tempPassword") {
                    this.ruleForm.password = arr2[1];
                }
            }
            this.checked=true;
        }
    }
    /**
     * @description :清除cookie
     * */

    clearCookie():void {
        this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
    }

    public resetForm(formName:string) {
    console.log(this);
    const ref = (this.$refs[formName] as ElForm);
    ref.resetFields();
  }

    /**
     * @description: 对登录密码进行md5加密
     * */
    public calcuMD5 (pwd:string|number):string {
        pwd = md5(pwd);
        return <string>pwd;
    }

    /**
     * @description； 扫码登录，生成二维码
     * */
    public genereateQrCode () {
        let qrcode = new QRCode('qrcode',{
            width: 127, // 设置宽度，单位像素
            height: 127, // 设置高度，单位像素
            text: this.qrcodeLink // 设置二维码内容或跳转地址
        })
    }
    /**
     * @description: 点击重新获取登录二维码
     * */
    public async handleClickRestart():Promise<void>{
        let timer:any;
        let that=this;
        that.qrcodeCancel=false;
        // @ts-ignore
        await qrcodeLoginApply()
            .then((res:any)=>{
                console.log(res);
                // 生成最新的二维码标识；
                this.qrcodeLink=res.data.qrcode;
                // 开始监听
                timer=setInterval( async function () {
                    // @ts-ignore
                    let qrcode=that.qrcodeLink.split("&")[1].split("=")[1]
                    let reqData={qrcode:qrcode};
                    if(that.loginWay===true){
                        clearInterval(timer);
                    }
                    // 轮循检查扫码状态；
                    await qrcodeLoginCheck(reqData)
                        .then((res:any)=>{
                            console.log(res);
                            let responseCode=res.data.responseCode;
                            if(responseCode===12591){
                                that.loginSuccess=true;
                            } else if(responseCode===12592){
                                that.changeTips("success","登录成功");

                                let yyttoken = res.headers.yyttoken;
                                // 更改登录状态以及登录用户信息；
                                // that.$store.dispatch("UPDATE_LOGIN_INFO_ASYN", {yyttoken});
                                // that.$store.dispatch("UPDATE_USER_INFO_STATE_ASYN");
                                clearInterval(timer);
                                setTimeout(function () {
                                    that.handleClose();
                                },3000)

                            }else if(responseCode===12593){
                                that.changeTips("warning","二维码已失效");
                                that.loginSuccess=false;
                                that.qrcodeCancel=true;
                                clearInterval(timer);
                            }
                        })
                        .catch((err:any)=>{
                            that.$message({
                                type: "error",
                                message: err
                            });
                        })
                },2000)
            })
            .catch((err:any)=>{
                this.$message({
                    type: "error",
                    message: err
                });
            })
        // 下一个时间轮循执行生成二维码；
        this.$nextTick(() => {
            this.genereateQrCode()
        });
    }

    /**
     * @description: Emit() 发送事件；
     *               监听close，发送事件名为close 的事件；
     * */
    @Emit('close')
    handleClose():boolean{
        this.loginWay=true;
        this.loginSuccess=false;
        return false;
    }

    /**
     * @description: changeTips
     * */
    public changeTips(status:string,tips:string){
        console.log(tips);
        // @ts-ignore
        this.$message({
            type:status,
            message: tips
        });
    }

    created() {
    //
  }


  mounted() {
    //
      //
      this.getCookie();
  }

  // 初始化函数
  init() {
    //
  }

}

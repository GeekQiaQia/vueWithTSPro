/***
 * @description:
 *  在面向对象语言中，接口（Interfaces）是一个很重要的概念，
 * 它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implements）
 * */

// regist.Data 参数类型
export interface RegistData {
  pageName: string
}
// 定义RuleForm 参数类型接口；
export interface RuleForm{
  phoneNum:number | string,
  captcha:number | string,
  verifyCode:number | string,
  password:number | string,
  checkPassword:number | string,
  inviteCode:number | string,
  agree:boolean,
}
// VUEX regist.State 参数类型
export interface RegistState {
  author?: string
}

// GET_DATA_ASYN 接口参数类型
// export interface DataOptions {}


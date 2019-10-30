/***
 * @description:
 *  在面向对象语言中，接口（Interfaces）是一个很重要的概念，
 * 它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implements）
 * */
// login.Data 参数类型
export interface LoginData {
  pageName: string
}
export interface RuleForm {
  username:string,
  password:number | string
}
// VUEX login.State 参数类型
export interface LoginState {
  author?: string
}

// GET_DATA_ASYN 接口参数类型
// export interface DataOptions {}


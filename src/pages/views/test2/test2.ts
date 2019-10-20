
/**
 * 修饰符写法@
 *
 * */
import {Component, Emit, Vue,Prop,Watch } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { Test2Data } from '@/pages/views/test2.interface'
// import {  } from "@/components" // 组件

@Component({
  components:{}
})

export default class About extends Vue {
  // Getter
  // @Getter author
  // Action
  // @Action GET_DATA_ASYN

  // 初始数据可以直接声明为实例的属性
   message:string ='hello';
   question:string ="";
   count:number=0;

   @Prop()
   private value:string="";

  // // data
  // data: Test2Data = {
  //   pageName: 'test2'
  // }
   // methods:函数在ts 中的写法
  // 组件方法也可以直接声明为实例的方法
  private onClick():void {
    console.log(this.message);
  }


  // 初始化函数
  private init() {
    //
  }

  // computed 在ts中的写法；
  get dynamicUrl(){
    return 'http://www.baidu.com/'+this.value;
  }

  // watch: 用来检测vue实例上的数据变动,当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用；
  // 在ts 中的写法：
  @Watch('question',{immediate:true,deep:true})
  onDebouncedGetAnswer(val:string,oldVal:string){}

  //@Emit(event?: string) 事件响应,如果；事件名称没有通过event params 参数传递，则函数名将默认为事件名，函数名默认命名规则为驼峰命名
  // 事件名由（camelCase）驼峰命名此时将被转化为（kebabCase）短横线命名如：如下举例：addToCount()函数发送的事件名为add-to-count的事件；
  // resetCount() 函数将发送事件名为"reset"的事件；
  @Emit()
  addToCount(n: number) {
    this.count += n
  }

  @Emit('reset')
  resetCount() {
    this.count = 0
  }
  //在函数returnValue() 中将触发return-value事件；
  @Emit()
  returnValue() {
    return 10
  }
  //在函数onInputChange() 中将触发发送on-input-change 事件；
  @Emit()
  onInputChange(e:any) {
    return e.target.value
  }
  // 如果返回值是一个promise（）； 则resolved 将在emit 事件之前执行；
  @Emit()
  promise() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(20)
      }, 0)
    })
  }
  created() {
    //
  }
  
  activated() {
    //
  }

  mounted() {
    //
  }


}

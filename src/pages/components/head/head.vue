<template>
  <div class="head-wrap">
    <div class="header">
<!--      <div class="header-title">-->
<!--        &lt;!&ndash;        {{data.pageName}}&ndash;&gt;-->
<!--        <span>{{data.pageName}}</span>-->
<!--      </div>-->
      <router-link class="header-logo" to="/home"></router-link>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from "vue-property-decorator"
  import { Getter, Action } from 'vuex-class'
  import { HeadData } from './head.interface'
  // import {  } from "./components" // 组件

  @Component({})
  export default class Head extends Vue {
    // prop 可以通过父子组件传值显示当前的Name;
    @Prop({
      required: false,
      default: ''
    }) name!: string

    // data
    data: HeadData = {
      componentName: 'head'
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
</script>

<style lang="scss">
  @import "../../../assets/scss/variables.scss";

  .head-wrap {
    width: 100%;
    .header{
      border-bottom: 1px solid #e5e5e5;
      height:72px;
      text-align: left;
      margin: 0 auto;
      width: 1200px;
      padding-top: 20px;
      .header-logo{
        float: left;
        width: 70px;
        height: 49px;
        position: relative;
        background: url(../../../assets/images/timg.jpg) no-repeat;
        background-size: 100% 100% ;
      }
      .header-title{
        position: relative;
        top: 7px;
        font-size: 16px;
        color: #333;
        padding-left: 10px;
        margin: 0 100px 0 80px;
        border-left: 1px solid #e8e8e8;
      }
    }
  }
</style>


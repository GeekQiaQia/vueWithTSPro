<template>
  <div class="header-wrap">
    <div class="v6-background">

    </div>
    <div class="header_center center">
        <div class="header-left">
          <a class="logo">

          </a>
          <div class="search">
            <el-input placeholder="请输入内容" v-model="searchText" class="input-with-select">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
          <nav class="header-nav">
            <div class="header-link">
                <router-link to="/about">关于</router-link>
            </div>
            <div class="header-link">
              <router-link to="/home">首页</router-link>
            </div>
          </nav>
        </div>
        <div class="header-right">
          <div class="header-link">
            <router-link to="/login">登录</router-link>
          </div>
          <router-link to="/register" class="btn header-btn btn-blue">注册</router-link>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from "vue-property-decorator"
  import { Getter, Action } from 'vuex-class'
  import { HeaderData } from './header.interface'
  // import {  } from "./components" // 组件

  @Component({})
  export default class header extends Vue {
    // prop
    @Prop({
      required: false,
      default: ''
    }) name!: string

    // data
    data: HeaderData = {
      componentName: 'header'
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

<style lang="scss" scoped>
  @import "../../../assets/scss/variables.scss";

  .header-wrap {
    width: 100%;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 25px 0;
    font-size: 12px;
    letter-spacing: .4px;
    transition: all 0.4s ease-out;
    z-index: 96;
    .v6-background{
      background: #232323;
      height: 0;
      left: 0;
      position: absolute;
      top: 0;
      transition: all 0.4s ease-out;
      width: 100%;
      z-index: -1;
    }
    .header_center{
      height: 68px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .center{
      box-sizing: border-box;
      max-widows: 1440px;
      margin: 0 auto;
      padding:0 55px;
      .header-left{
        display: flex;
        justify-content: center;
        align-items: center;
        .logo{
          width: 118px;
          height: 70px;
          background: url(../../../assets/bicycle.svg) no-repeat 0 0;
          background-size: contain;

        }
        .search{
          position: relative;
          background: #353535;
          padding: 10px 15px;
          margin-left: 10px;
          border-radius: 5px;
          box-sizing: border-box;
          width: 260px;
          cursor: pointer;
        }
        .header-nav{
          display: flex;
          margin-left: 10px;
          .header-link{
            position: relative;
            & > a{
              box-sizing: border-box;
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
              height: 68px;
              padding: 15px;
              color: #adb7be;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              transition: color .2s;
            }
          }
        }
      }
      .header-right{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin-left: auto;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        .header-link{
          position: relative;
          & > a{
            box-sizing: border-box;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            height: 68px;
            padding: 15px;
            color: #adb7be;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            transition: color .2s;
          }
        }
        .btn{
          margin: 0 0 0 10px;
          cursor: pointer;
          position: relative;
          display: inline-block;
          height: 16px;
          color: #fff;
          font-size: 12px;
          line-height: 16px;
          text-align: center;
          font-weight: 600;
          /* white-space: nowrap; */
          text-transform: uppercase;
          border-radius: 4px;
          outline: none;
          border: none;
          overflow: hidden;
          vertical-align: middle;

        }
        .btn-blue{
           background: linear-gradient(-180deg, #399dff 0%, #297dcf 98%);
         }

        .header-btn{
          margin-left: 20px;
          padding-left: 22px;
          padding-right: 22px;
        }
      }

    }
  }
</style>


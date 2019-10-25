<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->
<!--    <h1>test</h1>-->
    <div class="header">
      <div class="tool-bar">
        <router-link to="/login">登录</router-link>|
        <router-link to="/about">关于</router-link>
      </div>
      <div class="head-box">
        <div class="header-left">
          <div>爱生活</div>
        </div>
        <div class="header-right">
          <div class="search-container">
            <el-input placeholder="请输入内容" v-model="searchText" class="input-with-select">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
        </div>
      </div>
      <div class="nav">
          <ul class="cate">
            <li class="font16">首页</li>
            <li class="font16">存款</li>
            <li class="font16">授信</li>
            <li class="font16">理财</li>
            <li class="font16">信用卡</li>
          </ul>
      </div>
    </div>
    <div class="content">

    </div>
    <div class="footer">

    </div>
  </div>
</template>
<style lang="scss">
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }

  .home{
    width:100%;
    height:100%;
    .header{
      position: relative;
      width:100%;
      height:15.76%;
      background:rgba(255,255,255,1);
      .tool-bar{
        width: 50%;
        height: 25%;
        margin: 0 auto;
        text-align: right;
      }
      .head-box{
        width: 50%;
        height: 58%;
        margin: 0 auto;
        text-align: right;
        .header-left{
          float: left;
          position: relative;
          width:17.42%;
          height:100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 25px;
          color:gold;
          /*background: yellow;*/
        }
        .header-right{
          position: relative;
          float: right;
          width:82.58%;
          height:100%;
          /*background: green;*/
          .search-container{
            float: right;
            width: 375px;
            height: 37px;
            border: 1px solid #CCC;
            border-right: none;
            line-height: 37px;
          }
        }
      }
      .nav {
        border-bottom: 2px solid #ff3a27;
         ul  {
          height: 30px;
          width: 1124px;
          margin: 0 auto;
          li{
            font-size: 16px;
            text-align: center;
            width: 85px;
            float: left;
            line-height: 30px;
            list-style:none;

          }

        }
      }
    }
    .content{
      position: relative;
      width:100%;
      height:48.29%;
      background: blue;

    }
    .footer{
      position: relative;
      width:100%;
      height:35.55%;
      background: #F56C6C;

    }
  }
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }

</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/pages/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    // HelloWorld,
  },
})
export default class Home extends Vue {
  searchText:String=""
}
</script>

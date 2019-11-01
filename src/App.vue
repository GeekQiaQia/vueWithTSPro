<template>
  <div id="app">
    <Header>

    </Header>
    <div class="page">
      <div class="page-product">
        <div class="page-profile">
          <div class="body-container">
            <keep-alive>
              <router-view v-if="$route.meta.keepAlive"/>
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive"/>
          </div>
        </div>
        <div class="foot-container">
          <div>
            大家都在关注...
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script lang="ts" >
  import {Component, Provide, Vue} from "vue-property-decorator"
  import Header from "@/pages/components/header/header.vue" // 组件
  import {toLogin} from '@/api'
  @Component({components:{Header}})
  export default class App extends Vue {}


</script>

<style lang="scss">
  @import "./assets/scss/main.scss";

/*#app {*/
/*  font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*}*/
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
  .page{
    position:relative;
    box-sizing: border-box;
    height: auto !important;
    padding: 68px 0 0 0;
    .page-product{
      .page-profile{
        .body-container{
          position: relative;
          margin: -78px 0 0 0;
          padding: 120px 0 40px 0;
          & .no-background{
            background: #232323;
          }
        }
      }
    }
    .foot-container{
      margin: 40px auto;
      max-width: 1328px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>

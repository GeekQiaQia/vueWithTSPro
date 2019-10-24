<template>
<div>
  <div class="login-wrap">

    <div class="header">
      <a class="header-logo" href="https://cn.vuejs.org/v2/api/#key"></a>
      <div class="header-title">
<!--        {{data.pageName}}-->
      <span>登录</span>
      </div>
    </div>
    <div class="box">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="loginForm">
        <el-form-item  label="用户名" prop="username">
          <el-input type="text" class="input326"  placeholder="请输入用户名" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item  label="密码" prop="password">
          <el-input type="password" class="input326" placeholder="请输入密码" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button  class="btn confirm" @click="submitForm('ruleForm')">登录</el-button>
          <el-button  class="btn reset" @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="content-container-right">
        <img src="../../../assets/images/word.jpg">
    </div>

  </div>
</div>
</template>

<script lang="ts" src="./login.ts"></script>

<style lang="scss">
  /*@import '../../../assets/scss/common.scss';*/
  @import './login.scss';
</style>


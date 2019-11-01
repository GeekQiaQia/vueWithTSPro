<template>
  <div class="regist-wrap">
    <Head></Head>

    <div class="register-form">
      <div class="divide-line"></div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="register-ruleForm">
        <el-form-item label="手机号码"  prop="phoneNum">
          <el-input v-model="ruleForm.phoneNum" class="input246" placeholder="请输入11位手机号码"></el-input>
        </el-form-item>
        <el-form-item label="图形码"  prop="captcha">
          <el-input v-model="ruleForm.captcha"  class="input134"placeholder="请输入图形验证码"></el-input>
          <el-button style="width:102px;" class="btn confirm" >{{captcha}}</el-button>
        </el-form-item>
        <el-form-item label="验证码"  prop="verifyCode">
          <el-input v-model="ruleForm.verifyCode" class="input134" placeholder="请输入4位数验证码"></el-input>
          <el-button style="width:102px;" class="btn confirm">获取验证码</el-button>
        </el-form-item>
        <el-form-item label="密码"  prop="password">
          <el-input v-model="ruleForm.password" class="input246" placeholder="请输入密码" ></el-input>
        </el-form-item>
        <el-form-item label="确认密码"  prop="checkPassword">
          <el-input v-model="ruleForm.checkPassword" class="input246"  placeholder="请再次输入密码" ></el-input>
        </el-form-item>
        <el-form-item label="邀请码"    >
          <el-input v-model="ruleForm.inviteCode" class="input246" placeholder="选填"></el-input>
        </el-form-item>

        <el-form-item  prop="agree">
          <el-checkbox v-model="ruleForm.agree">同意《会员注册协议》</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button :loading="isLoading" class="btn confirm"  @click="submitForm('ruleForm')">快速注册</el-button>
          <el-button class="btn reset" @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" src="./regist.ts"></script>

<style lang="scss" scoped>
  @import './regist.scss';
</style>


<template>
<div>
  <div class="login-wrap">

      <Head></Head>
<!--    <div class="box">-->

<!--    </div>-->
      <LoginHeader  v-if="loginWay">
          <ul class="title" slot="title">
              <li :class="{active:actived}" class="tab-password-login" @click="changeLoginTab">密码登录</li>
              <li :class="{active:!actived}" @click="changeLoginTab" class="tab-captcha-login">验证码登录</li>
          </ul>
          <img slot="qrcode"  @click="toChangeLoginWay" src="../../../assets/images/qrcode@2x.png"  alt="">
          <el-form slot="container" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="loginForm">
              <el-form-item  label="用户名" prop="username">
                  <el-input type="text" class="input326"  placeholder="请输入用户名" v-model="ruleForm.username" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item  label="密码" prop="password">
                  <el-input type="password" class="input326" placeholder="请输入密码" v-model="ruleForm.password" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item>
                  <el-button :loading="isLoading" class="btn confirm" @click="submitForm('ruleForm')">登录</el-button>
                  <el-button  class="btn reset" @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
          </el-form>
          <div  slot="extra" class="form-extra-group">
              <div class="pull-right">
                  <el-checkbox class="save-password" v-model="checked">保存密码</el-checkbox>
                  <router-link to="/register">免费注册</router-link>
              </div>
          </div>
      </LoginHeader>
      <!--扫码登录-->
      <LoginHeader v-else-if="!loginWay">
          <ul class="title" slot="title">
              <li  class=" active tab-scan-login" @click="changeTab">扫码登录</li>
          </ul>
          <img slot="qrcode" src="../../../assets/images/pc@2x.png" @click="toChangeLoginWay" alt="">
          <div slot="container"  class="qrcode-content">
              <div class="step-1">
                  <div class="qrcode-box">
                        <div style="width: inherit;height: inherit">
                            <div  key="qrCode" style="text-align: center;">
                                <div   id="qrcode" ref="qrcode"  class="scan-code">
                                    <div v-if="qrcodeCancel">
                                        <div style="margin-top: 27px;"><span class="qrcode-restart"> 二维码已失效</span></div>
                                        <div style="margin-top: 27px;"> <el-button class="btn confirm " style="width: 101px ;height:25px;" @click="handleClickRestart" >点击刷新</el-button><br></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                  </div>
                  <div class="platform">
                      <h4>使用以下App扫码登录更安全</h4>
                      <ul class="clearFix">
                          <li>
                              <img src="../../../assets/images/ali.png" alt="支付宝">
                          </li>
                          <li>
                              <img src="../../../assets/images/wechat.png" alt="微信">
                          </li>
                          <li>
                              <img src="../../../assets/images/qq.png"alt="腾讯qq" >
                          </li>
                      </ul>
                  </div>
              </div>
              <div  slot="extra" class="form-extra-group">
                  <div class="pull-right">
                      <router-link to="/register">免费注册</router-link>
                  </div>
              </div>
          </div>

      </LoginHeader>
    <div class="content-container-right">
        <img src="../../../assets/images/word.jpg" >
    </div>

  </div>
</div>
</template>

<script lang="ts" src="./login.ts"></script>

<style lang="scss" scoped>
  /*@import '../../../assets/scss/common.scss';*/
  @import './login.scss';
</style>


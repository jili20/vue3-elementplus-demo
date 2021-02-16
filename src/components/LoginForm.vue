<template>
  <!--  登录表单 -->
  <el-form ref="loginForm" :model="loginUser" :rules="rules" label-width="100px" class="loginForm sign-in-form">
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="loginUser.email" placeholder="请输入电子邮箱..."></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="loginUser.password" type="password" placeholder="请输入密码..."></el-input>
    </el-form-item>
    <el-form-item>
      <!-- ️ 1-5 登录方法 @click="handleLogin('loginForm')" ，ref 对象 loginForm -->
      <el-button @click="handleLogin('loginForm')" type="primary" class="submit_btn">提交</el-button>
    </el-form-item>
    <!-- 找回密码 -->
    <div class="tiparea">
      <p>忘记密码？ <a href="">立即找回</a></p>
    </div>
  </el-form>
</template>
<script>
import {ref, getCurrentInstance} from 'vue';
import {loginUser, rules} from "@/utils/loginValidators.ts"; // ️ 1-7 获取当前实例 getCurrentInstance
export default {
  props: {
    loginUser: {
      type: Object,
      required: true
    },
    rules: {
      type: Object,
      required: true
    }
  },
  setup() {
    // @ts-ignore 忽略类型检查
    const {ctx} = getCurrentInstance() // 解构当前实体 = this

    // ️触发登录方法; formName == ref="loginForm"
    const handleLogin = (formName) => {
      ctx.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });

    }

    return {handleLogin}  //  1-2 暴露 loginUser rules handleLogin
  }
}
</script>
<style scoped>

/* form */
.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit-btn {
  width: 100%;
}

.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}

.tiparea p a {
  color: #409eff;
}
</style>

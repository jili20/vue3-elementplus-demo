<template>
  <!-- 注册表单 -->
  <el-form ref="registerForm" :model="registerUser" :rules="registerRules" label-width="100px"
           class="registerForm sign-up-form">
    <el-form-item label="用户名" prop="name">
      <el-input v-model="registerUser.name" placeholder="请输入用户名..."></el-input>
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="registerUser.email" placeholder="请输入电子邮箱..."></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="registerUser.password" type="password" placeholder="请输入密码..."></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="password2">
      <el-input v-model="registerUser.password2" type="password" placeholder="请输入确认密码..."></el-input>
    </el-form-item>
    <el-form-item label="选择身份">
      <el-select v-model="registerUser.role" placeholder="请选择身份">
        <el-option label="管理员" value="admin"></el-option>
        <el-option label="用户" value="user"></el-option>
        <el-option label="游客" value="visitor"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button @click="handleRegister('registerForm')" type="primary" class="submit_btn">注册</el-button>
    </el-form-item>

  </el-form>

</template>
<script>
import {ref, getCurrentInstance} from 'vue';

export default {
  props: {
    registerUser: {
      type: Object,
      required: true
    },
    registerRules: {
      type: Object,
      required: true
    }
  },
  setup() {
    // @ts-ignore 忽略类型检查
    const {ctx} = getCurrentInstance() // 解构当前实体 = this
    // 注册
    const handleRegister = (formName) => {
      ctx.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
    return {
      handleRegister
    }
  }

}
</script>
<style scoped>


</style>

<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="旧密码">
        <el-input v-model="form.old_password" size="medium" placeholder="请输入旧密码" :show-password="true" type="password"/>
      </el-form-item>
      <el-form-item label="新密码">
        <el-input v-model="form.password" size="medium" placeholder="请输入新密码" :show-password="true" type="password"/>
      </el-form-item>
      <el-form-item label="确认新密码">
        <el-input v-model="form.confirm_password" size="medium" placeholder="请输入确认密码" :show-password="true" type="password"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">修改</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
    data() {
        return {
            form: {
                old_password: '',
                password: '',
                confirm_password: '',
            }
        }
    },
    methods: {
        onSubmit() {
            this.$message('修改成功!')
        },
        onCancel() {
            /*this.$message({
                message: 'cancel!',
                type: 'warning'
            })*/
        }
    }
}
</script>

<style lang="scss" scoped>
.app-container{
  margin: 20px;
  width: 400px;
}
</style>

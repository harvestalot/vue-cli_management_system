<template>
   <div>
       <h1>登录</h1>
        <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="Password">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
        </FormItem>
    </Form>
   </div>
</template>

<script>
export default {
    data(){
        return{
             formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
        }
    },
    // beforeCreate () {
    //     this.form = this.$form.createForm(this);
    // },
    mounted(){
        // console.log(this.$form)
    },
    methods: { 
        handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                        // // 字符串
                        // this.$router.push('/home')
                        // // 对象
                        // this.$router.push({ path: '/home' })
                        // 命名的路由
                        this.$router.push({ name: 'Home', params: { userId: "001" }});
                        
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            }
    },
}

</script>
<style scoped>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
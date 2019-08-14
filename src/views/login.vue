<template>
   <div class="login">
        <section class="login_form">
            <h2 class="ft_24 ft_w tc fff">登录</h2>
            <Form ref="formInline" :model="formInline" :rules="ruleInline" >
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
                    <Button type="primary" @click="handleSubmit('formInline')" long class="login_btn">登录</Button>
                </FormItem>
            </Form>
        </section>
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
    .login{
        width: 100%;
        height: 100%;
        background: url("~img/login_bg.jpg");
    }
    .login_form{
        position: absolute;
        top: 50%;
        left:50%;
        width: 400px;
        height: 330px;
        padding: 20px 20px;
        margin-left: -200px;
        margin-top: -150px;
        box-sizing: border-box;
        background: linear-gradient(230deg, rgba(53, 57, 74, 0) 0%, rgb(0, 0, 0) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='rgba(53, 57, 74, 0)', endColorstr='rgb(0, 0, 0)',GradientType=1 );
        box-shadow: -15px 15px 15px rgba(0,0,0,.4);
    }
    .login_form h2{
        margin-bottom: 50px;
    }
    .login_btn{
        /* margin-top: 20px; */
    }
</style>
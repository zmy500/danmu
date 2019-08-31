<template>
    <Form ref="formInline" :model="formInline" :rules="ruleInline" style="width:300px;margin:100px auto;">
        <FormItem prop="user">
            <Input type="text" v-model="formInline.username" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="Password">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem style="text-align:center;">
            <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
        </FormItem>
    </Form>
</template>
<script>
　import Cookies from 'js-cookie'
    export default {
        data () {
            return {
                formInline: {
                    username: '',
                    password: ''
                },
                ruleInline: {
                    username: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$axios.post('http://10.10.60.14:8085/rbac/auth/login',{
                            username:this.formInline.username,
                            password:this.formInline.password
                        }).then((res) =>{
                          
                           if(res.status == 200){
                            
                            var expireTime = new Date(new Date().getTime() +  60 * 60 * 1000);
                            Cookies.set('token',res.data.token,{expires:expireTime});
                            Cookies.set('employeeName',res.data.employeeName);
                            Cookies.set('employeeCode',res.data.employeeCode);
                            Cookies.set('employeeId',res.data.employeeId);
                            Cookies.set('userName',this.formInline.username);
                            Cookies.set('userId',res.data.userId);
                            //岗位
                            let quartersArr = res.data.quarters;
                            let quarter = quartersArr[0];
                            Cookies.set("quarterId",quarter.id);//岗位ID
                            Cookies.set("quarterName",quarter.quartersName);//岗位名称
                            if (quarter.orgModel != undefined) {
                                Cookies.set("orgId",quarter.orgModel.id);//机构ID
                                Cookies.set("orgName",quarter.orgModel.orgName);//机构名称
                            }
                            //获取权限集合
                            let permissions = res.data.permissions;
                            let permissionsCache = JSON.stringify(permissions);
                            sessionStorage.setItem("permissionsCache",permissionsCache);
                            //获取系统参数
                            let commonParam = res.data.commonParam;
                            let commonParamCache = JSON.stringify(commonParam);
                            sessionStorage.setItem("commonParamCache",commonParamCache);
                            this.$router.push('/home')
                           }
                           
                        })
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            }
        }
    }
</script>

<style >

</style>

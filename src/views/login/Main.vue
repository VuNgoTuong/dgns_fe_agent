<template lang="">
<section>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xl-7 b-center bg-size" style="background-image: url('/images/bg-login.jpg'); background-size: cover; background-position: center center; display: block;">
                <img class="bg-img-cover bg-center" src="/images/bg-login.jpg" alt="looginpage" style="display: none;">
                <div class="position-absolute bottom-0 start-0 text-white h-100 w-100 d-flex align-items-start justify-content-end flex-column p-5" style="background:linear-gradient(0deg,black, transparent 50%)">
                    <h4 class="bottom-0 fw-bold">THACO GROUP - CMS PLATFORM</h4>
                    <h6 class="fw-lighter mb-0">Bản quyền 2023 © THACO GROUP - CMS Platform.</h6>
                </div>
            </div>
            <div class="col-xl-5 p-0">
                <div class="login-card">
                    <form class="theme-form login-form">
                        <h4>ĐĂNG NHẬP</h4>
                        <h6>Đăng nhập vào hệ thống đánh giá nhân sự THACO</h6>
                        <div class="form-group">
                            <label style="text-transform:none">Địa chỉ email</label>
                            <div class="input-group">
                                <span class="input-group-text"><i class="icon-email"></i></span>
                                <input class="form-control" type="text" required="" placeholder="Nhập địa chỉ email" v-model="email" @keyup.enter="Login"/>
                                <select v-model="domain_selected">
                                    <option :value="item.value" v-for="(item, index) in domain" :key="index">{{item.value}}</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label style="text-transform:none">Mật khẩu</label>
                            <div class="input-group">
                                <span class="input-group-text"><i class="icon-lock"></i></span>
                                <input class="form-control" type="password" name="login[password]" required="" placeholder="*********" v-model="password" @keyup.enter="Login"/>
                                <!-- <div class="show-hide"><span class="show"></span></div> -->
                            </div>
                        </div>
                        <!-- <div class="form-group">
                            <div class="checkbox">
                                <input id="checkbox1" type="checkbox" />
                                <label class="text-muted" for="checkbox1" style="text-transform:none">Ghi nhớ mật khẩu</label>
                            </div>
                            <a class="link" href="forget-password.html">Quên mật khẩu?</a>
                        </div> -->
                        <div class="form-group mt-5"><a class="btn btn-primary btn-block" @click="Login">ĐĂNG NHẬP</a></div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
</template>
<script>
import axios from 'axios'

const API_USER_PATH = import.meta.env.VITE_API_PATH_USER;
const API_DATA_PATH = import.meta.env.VITE_API_PATH_DATA;

import {ShowToast} from '@Helpers/Notify.js'
import { collapseItemProps } from 'element-plus';

export default {
    data(){
        return {
            email : null,
            password : null,
            token : null,
            user:null,
            authorize : null,
            domain_selected : '@thaco.com.vn',
            domain : {}
            // sitekey : '6Lc4XPMoAAAAAKhYZLxGO9g8UwqMp_-vH5KdIWV1',
            // step : 1,
            // email : null,
            // password : null,
            // tenant_id : "",
            // tenant_selected : {},
            // is_remember_me : false,
            // is_select_group : false,
            // data : [],
            // ldap : false,
            // skip_ldap : false,
            // tenant : [],
            // is_type_account : null,
            // group_selected : {},
            // recapcha : false,
            // showRecaptcha: true,
		    // loadingTimeout: 30000,

            // user_login : {

            // }
        }
    },
    created(){
        const authorize = JSON.parse(localStorage.getItem('authorize'))
        if(authorize || authorize === 0){
            const token = authorize.token
            if (token || token === 0) {
                this.$router.push('/admin')
            }
        }
        this.GetAllDomain();
    },

    methods : {
        async Login(){
            if(this.email || this.email === 0){
                if(this.password || this.password === 0){
                    await this.AuthLogin()
                }else{ShowToast({status_code : 401, message : 'Chưa nhập mật khẩu'})}
            }else{ShowToast({status_code : 401, message : 'Chưa nhập email'})}
        },


        GetAllDomain(){
            let params = {}
            axios.post(API_USER_PATH + "/get-json/domain",params)
            .then(res => {
                this.domain = res.data
            })
            .catch(err => {ShowToast({status_code : 401, message : 'Không lấy được danh sách domain'})})
        },
    
        async AuthLogin(){
            let params = {
                username : this.email,
                password : this.password,
                domain : this.domain_selected,
                is_remember_me : true,
            }
            axios.post(API_USER_PATH + "/auth/login",params)
            .then(async res => {
                const data = res.data.data;
                if(data || data === 0){
                    this.authorize = data
                    if(this.authorize || this.authorize === 0){
                        if(this.authorize.token || this.authorize.token === 0){
                            const UserInfo = await this.getInfoUser()
                            if(UserInfo){
                                await localStorage.setItem('authorize',JSON.stringify(this.authorize))
                                await localStorage.setItem('user', JSON.stringify(this.user))
                                await localStorage.setItem('page-wrapper','compact-wrapper modern-sidebar')
                                ShowToast({status_code : 200, message : 'Đăng nhập thành công'});
                                setTimeout(() => {
                                    this.$router.push('/admin')
                                }, 1000);
                                this.$router.go(0)
                            }else{ShowToast({status_code : 401, message : 'Lấy thông tin người dùng lỗi'})}
                        }else{ShowToast({status_code : 401, message : 'Xác thực không thành công'})}
                    }else{ShowToast({status_code : 401, message : 'Đăng nhập không thành công'})}

                        // let PermissionUser = await this.getPermissionUser()
                        // if(PermissionUser){
                        //     await localStorage.setItem('current_user',this.user_login.current_user)
                        //     await localStorage.setItem('user_role',this.user_login.user_role)
                        //     
                        // }
                }
            })
            .catch(err => {
                const message = err.response.data.message
                ShowToast({status_code : 401, message : message})
            })
        },
        async getInfoUser(){
            let result
            if(this.authorize || this.authorize === 0){
                if(this.authorize.token || this.authorize.token === 0){
                    let params = {item : this.authorize.employee_id}
                    const config = {headers: {Authorization: `Bearer ${this.authorize.token}`}};
                    await axios.post(API_USER_PATH + '/user/get-info-by-username',params,config)
                    .then(async res => {
                        if(res.data.data || res.data.data === 0){
                            this.user = res.data.data
                            result = true
                        }else{result = false}
                    })
                    .catch(err => {console.error(err)})
                }
            }
            return result
        },

        // async getPermissionUser(){
        //     let authorize = await JSON.parse(this.user_login.authorize);
        //     let current_user = await JSON.parse(this.user_login.current_user);
        //     const params = {
        //         item : current_user.username
        //     }
        //     const config = {headers: {Authorization: `Bearer ${authorize.token}`}};
        //     let response = await axios.post(API_USER_PATH + '/permission/get-list-permission-by-user',params,config)
            
        //     if((current_user.is_type_account == 0 || current_user.is_type_account == 1) && current_user.group_id != null){
        //         this.user_login.user_role = ['is_group']
        //         return true
        //     }else{
        //         if(!response.data.data.length > 0){
        //             ShowToast({status_code : 401, message : 'Không có quyền truy cập'})
        //             return false
        //         }else{
        //             let roles = await EnCode(response.data.data)
        //             this.user_login.user_role = await roles
        //             return true
        //         }
        //     }

        // }
    }
}
</script>

<style lang="">
    
</style>
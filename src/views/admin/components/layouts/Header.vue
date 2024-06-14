<template lang="">
    <div class="page-main-header">
        <div class="main-header-right row m-0">
            <div class="main-header-left">
                <div class="logo-wrapper">
                    <router-link to="/admin">
                        <a><img class="img-fluid" src="/images/logo.svg" width="130" alt="" /></a>
                    </router-link>
                </div>
                <div class="dark-logo-wrapper">
                    <router-link to="/admin">
                        <a><img class="img-fluid" src="/images/logo-dark.svg" width="130" alt="" /></a>
                    </router-link>
                </div>
                <div class="toggle-sidebar">
                    <i class="status_toggle middle" data-feather="align-center" id="sidebar-toggle"></i>
                </div>
            </div>
            <div class="left-menu-header col ps-4 ms-2">
                <ul>
                    <li>
                        <h5 class='mb-0 fw-bold text-nowrap' style="font-size:20px; color:#00529c">PHẦN MỀM ĐÁNH GIÁ NHÂN SỰ</h5>
                        <!-- <form class="form-inline search-form">
                            <div class="search-bg">
                                <i class="fa fa-search"></i>
                                <input class="form-control-plaintext" placeholder="Tìm kiếm thông tin....." />
                            </div>
                        </form>
                        <span class="d-sm-none mobile-search search-bg"><i class="fa fa-search"></i></span> -->
                    </li>
                </ul>
            </div>
            <div class="nav-right col pull-right right-menu p-0">
                <ul class="nav-menus">
                    <li class="cursor-pointer">
                        <a class="text-dark" href="#!" @click="toggleFullScreen">
                            <IconMaximize :size="32" stroke-width="2"/>
                        </a>
                    </li>
                    <!-- <li class="onhover-dropdown">
                        <div class="bookmark-box"><i data-feather="star"></i></div>
                        <div class="bookmark-dropdown onhover-show-div">
                            <div class="form-group mb-0">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fa fa-search"></i></span>
                                    </div>
                                    <input class="form-control" type="text" placeholder="Search for bookmark..." />
                                </div>
                            </div>
                            <ul class="m-t-5">
                                <li class="add-to-bookmark">
                                    <i class="bookmark-icon" data-feather="inbox"></i>Email<span class="pull-right"><i data-feather="star"></i></span>
                                </li>
                                <li class="add-to-bookmark">
                                    <i class="bookmark-icon" data-feather="message-square"></i>Chat<span class="pull-right"><i data-feather="star"></i></span>
                                </li>
                                <li class="add-to-bookmark">
                                    <i class="bookmark-icon" data-feather="command"></i>Feather Icon<span class="pull-right"><i data-feather="star"></i></span>
                                </li>
                                <li class="add-to-bookmark">
                                    <i class="bookmark-icon" data-feather="airplay"></i>Widgets<span class="pull-right"><i data-feather="star"> </i></span>
                                </li>
                            </ul>
                        </div>
                    </li> -->
                    <!-- <li class="onhover-dropdown">
                        <div class="notification-box"><i data-feather="bell"></i><span class="dot-animated"></span></div>
                        <ul class="notification-dropdown onhover-show-div">
                            <li>
                                <p class="f-w-700 mb-0">You have 3 Notifications<span class="pull-right badge badge-primary badge-pill">4</span></p>
                            </li>
                            <li class="noti-primary">
                                <div class="media">
                                    <span class="notification-bg bg-light-primary"><i data-feather="activity"> </i></span>
                                    <div class="media-body">
                                        <p>Delivery processing</p>
                                        <span>10 minutes ago</span>
                                    </div>
                                </div>
                            </li>
                            <li class="noti-secondary">
                                <div class="media">
                                    <span class="notification-bg bg-light-secondary"><i data-feather="check-circle"> </i></span>
                                    <div class="media-body">
                                        <p>Order Complete</p>
                                        <span>1 hour ago</span>
                                    </div>
                                </div>
                            </li>
                            <li class="noti-success">
                                <div class="media">
                                    <span class="notification-bg bg-light-success"><i data-feather="file-text"> </i></span>
                                    <div class="media-body">
                                        <p>Tickets Generated</p>
                                        <span>3 hour ago</span>
                                    </div>
                                </div>
                            </li>
                            <li class="noti-danger">
                                <div class="media">
                                    <span class="notification-bg bg-light-danger"><i data-feather="user-check"> </i></span>
                                    <div class="media-body">
                                        <p>Delivery Complete</p>
                                        <span>6 hour ago</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li> -->
                    <li class="cursor-pointer">
                        <div class="mode">
                            <IconMoon :size="32" stroke-width="2"/>
                        </div>
                    </li>
                    <!-- <li class="onhover-dropdown">
                        <i data-feather="message-square"></i>
                        <ul class="chat-dropdown onhover-show-div">
                            <li>
                                <div class="media">
                                    <img class="img-fluid rounded-circle me-3" src="/assets/images/user/4.jpg" alt="" />
                                    <div class="media-body">
                                        <span>Ain Chavez</span>
                                        <p class="f-12 light-font">Lorem Ipsum is simply dummy...</p>
                                    </div>
                                    <p class="f-12">32 mins ago</p>
                                </div>
                            </li>
                            <li>
                                <div class="media">
                                    <img class="img-fluid rounded-circle me-3" src="/assets/images/user/1.jpg" alt="" />
                                    <div class="media-body">
                                        <span>Erica Hughes</span>
                                        <p class="f-12 light-font">Lorem Ipsum is simply dummy...</p>
                                    </div>
                                    <p class="f-12">58 mins ago</p>
                                </div>
                            </li>
                            <li>
                                <div class="media">
                                    <img class="img-fluid rounded-circle me-3" src="/assets/images/user/2.jpg" alt="" />
                                    <div class="media-body">
                                        <span>Kori Thomas</span>
                                        <p class="f-12 light-font">Lorem Ipsum is simply dummy...</p>
                                    </div>
                                    <p class="f-12">1 hr ago</p>
                                </div>
                            </li>
                            <li class="text-center"><a class="f-w-700" href="javascript:void(0)">See All </a></li>
                        </ul>
                    </li> -->
                    
                    <li class="onhover-dropdown p-0">
                        <button class="btn btn-primary-light" type="button" @click="logOut">
                            <a><i data-feather="log-out"></i>Đăng xuất</a>
                        </button>
                    </li>
                    
                </ul>
            </div>
            <div class="d-lg-none mobile-toggle pull-right w-auto"><i data-feather="more-horizontal"></i></div>
        </div>
    </div>
</template>
<script>
import Icons from '../../common/js/Icons';
import axios from 'axios'
import {ShowToast} from '@Helpers/Notify.js'
const PATH_API_DATA = import.meta.env.VITE_API_PATH_DATA;
const PATH_API_USER = import.meta.env.VITE_API_PATH_USER;

export default {
    components : {...Icons},
    data(){
        return {
            authorize : {}
        }
    },
    created(){
        this._Init()
    },
    methods : { 

        async _Init(){
            const authorize = localStorage.getItem('authorize');
            this.authorize = await JSON.parse(authorize)
            // const current_user = JSON.parse(localStorage.getItem('current_user'));
            // this.current_user = current_user;
            // await this.GetAllData()
        },

        async logOut(){
            if (this.authorize.token || this.authorize.token === 0) {
                const params = {}
                const config = {headers: {Authorization: `Bearer ${this.authorize.token}`}};
                axios.post(PATH_API_USER + '/auth/logout',params,config)
                .then(async res => {
                    await localStorage.clear();
                    await sessionStorage.clear();
                    this.$router.push('/')
                    ShowToast({status_code : 200, message : 'Bạn đã đăng xuất'})
                    // window.location.reload();
                })
                .catch(err => {
                    console.error(err);
                    ShowToast({status_code : 401, message : 'Đăng xuất thất bại'})
                })
            }
        },
        
        toggleFullScreen() {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
            } else {
                document.exitFullscreen();
            }
        }
    }
}
</script>
<style lang="">
    
</style>
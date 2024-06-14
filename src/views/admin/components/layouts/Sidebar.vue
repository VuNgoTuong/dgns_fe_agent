<template lang="">
    <header class="main-nav">
        <div class="sidebar-user text-center">
            <a class="setting-primary" href="javascript:void(0)">
                <i data-feather="settings"></i>
            </a>
            <img class="img-90 rounded-circle" :src="user.hinhAnh_Url" @error="imageError" style="width:90px;height:90px;" alt="" />
            <a href="user-profile.html"> <h6 class="mt-3 f-14 f-w-600">{{user.fullname}}</h6></a>
            <p class="mb-0 font-roboto">{{user.employee_code}}</p>
        </div>
        <nav>
            <div class="main-navbar">
                <div class="left-arrow" id="left-arrow"><i data-feather="arrow-left"></i></div>
                <div id="mainnav">
                    <ul class="nav-menu custom-scrollbar ps-0">
                        <li class="back-btn">
                            <div class="mobile-back text-end"><span>Back</span><i class="fa fa-angle-right ps-2" aria-hidden="true"></i></div>
                        </li>
                        <!-- <li class="sidebar-main-title">
                            <div>
                                <h6>Tổng quan</h6>
                            </div>
                        </li> -->

                        <li v-if="$CheckPermission(['group','root'])">
                            <router-link to="/admin/reviews-period" class="nav-link">
                                <span class="d-flex align-items-center">
                                    <IconCalendarEvent :size="28" stroke-width="2" class="d-flex me-3 bg-gradient-primary shadow-primary p-1 rounded-3" />
                                    <span class="fw-medium text-nowrap">Danh sách kỳ đánh giá</span>
                                </span>
                            </router-link>
                        </li>

                        <li v-if="$CheckPermission(['tenant'])">
                            <router-link to="/admin/employee-reviews" class="nav-link">
                                <span class="d-flex align-items-center">
                                    <IconUserScan :size="28" stroke-width="2" class="d-flex me-3 bg-gradient-primary shadow-primary p-1 rounded-3" />
                                    <span class="fw-medium text-nowrap">Cá nhân tự đánh giá</span>
                                </span>
                            </router-link>
                        </li>

                        <li v-if="$CheckPermission(['approver'])">
                            <router-link to="/admin/list-reviews" class="nav-link">
                                <span class="d-flex align-items-center">
                                    <IconChecklist :size="28" stroke-width="2" class="d-flex me-3 bg-gradient-primary shadow-primary p-1 rounded-3" />
                                    <span class="fw-medium text-nowrap">Danh sách đánh giá</span>
                                </span>
                            </router-link>
                        </li>
                        
                        <li class="dropdown" v-if="$CheckPermission(['root','group'])">
                            <!-- <a class="nav-link menu-title" href="javascript:void(0)">
                                <span class="d-flex align-items-center">
                                    <IconTool :size="28" stroke-width="2" class="d-flex me-3 bg-gradient-primary shadow-primary p-1 rounded-3" />
                                    <span class="fw-medium text-nowrap">Quản trị hệ thống</span>
                                </span>
                            </a> -->

                            <router-link class="nav-link menu-title" to="/admin/settings" v-if="$CheckPermission(['root','group'])" exact>
                                <span class="d-flex align-items-center">
                                    <IconTool :size="28" stroke-width="2" class="d-flex me-3 bg-gradient-primary shadow-primary p-1 rounded-3" />
                                    <span class="fw-medium text-nowrap">Quản trị hệ thống</span>
                                </span>
                            </router-link>

                            <ul class="nav-submenu menu-content">
                                <li>
                                    <router-link to="/admin/settings/accounts-manager" v-if="$CheckPermission(['root','group'])">Quản lý người dùng</router-link>
                                </li>
                                <li>
                                    <router-link to="/admin/settings/approval-settings" v-if="$CheckPermission(['group','root'])">Cài đặt phê duyệt</router-link>
                                </li>
                                <li>
                                    <router-link to="/admin/settings/tenant-settings" v-if="$CheckPermission(['root','group'])">Cài đặt đơn vị</router-link>
                                </li>
                            </ul>
                        </li>
                        <!-- <li class="dropdown" v-if="$CheckPermission(['group','approver','root'])">
                            <a class="nav-link menu-title" href="javascript:void(0)">
                                <span class="d-flex align-items-center">
                                    <IconChartAreaLineFilled :size="28" stroke-width="2" class="d-flex me-3 bg-gradient-primary shadow-primary p-1 rounded-3" />
                                    <span class="fw-medium text-nowrap">Báo cáo</span>
                                </span>
                            </a>
                            <ul class="nav-submenu menu-content">
                                <li><a href="#">Kết quả đánh giá</a></li>
                                <li><a href="#">Báo cáo tổng hợp</a></li>
                            </ul>
                        </li> -->
                    </ul>
                </div>
                <div class="right-arrow" id="right-arrow"><i data-feather="arrow-right"></i></div>
            </div>
        </nav>
    </header>
</template>
<script>
import Icons from '@Admin/common/js/Icons';
export default {
    data(){
        return{
            authorize : null,
            user : null,
        }
    },
    created(){
        this._Init()
    },
    methods : {
        _Init(){
            const authorize = localStorage.getItem('authorize')
            this.authorize = JSON.parse(authorize)
            const user = localStorage.getItem('user')
            this.user = JSON.parse(user)
        },
        imageError(event){
            event.target.src = '/images/avatar-default.webp';
        },
    },
    components : {...Icons,}
}
</script>
<style lang="scss">

</style>
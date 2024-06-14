
import { createRouter, createWebHistory } from 'vue-router';

import Admin from './views/admin/Main.vue';
import Login from './views/login/Main.vue';

import Dashboard from './views/admin/pages/Dashboard/Main.vue'

import ReviewsPeriod from './views/admin/pages/ReviewsPeriod/Main.vue'
import ReviewsPeriod_Index from './views/admin/pages/ReviewsPeriod/pages/Index.vue'
import ReviewsPeriod_Form from './views/admin/pages/ReviewsPeriod/pages/Form.vue'

import EmployeeReviews from './views/admin/pages/EmployeeReviews/Main.vue'
import EmployeeReviews_Index from './views/admin/pages/EmployeeReviews/pages/Index.vue'
import EmployeeReviews_Form from './views/admin/pages/EmployeeReviews/pages/Form.vue'

import ListReviews from './views/admin/pages/ListReviews/Main.vue'
import ListReviews_Index from './views/admin/pages/ListReviews/pages/Index.vue'
import ListReviews_Form from './views/admin/pages/ListReviews/pages/Form.vue'

import AccountsManager from './views/admin/pages/AccountsManager/Main.vue'
import AccountsManager_Index from './views/admin/pages/AccountsManager/pages/Index.vue'
import AccountsManager_Form from './views/admin/pages/AccountsManager/pages/Form.vue'


import ApprovalSettings from './views/admin/pages/ApprovalSettings/Main.vue'
import ApprovalSettings_Index from './views/admin/pages/ApprovalSettings/pages/Index.vue'
import ApprovalSettings_Form from './views/admin/pages/ApprovalSettings/pages/Form.vue'

import TenantSettings from './views/admin/pages/TenantSettings/Main.vue'
import Err_401 from './views/site/err_401.vue'


import axios from 'axios';
// import {EnCode,DeCode} from '@Helpers/authorize.js'
// import { CheckPermission } from '@Helpers/utils.js';
const API_USER_PATH = import.meta.env.VITE_API_PATH_USER;
const API_DATA_PATH = import.meta.env.VITE_API_PATH_DATA;

const routes = [
    {
        path: '/',
        component : Login,
        // redirect: to => {
        //     return { path: '/admin'}
        // },
    },

    {
        path: '/admin',
        component : Admin,
        children: [
            {
                path: '',
                component: Dashboard,
                beforeEnter: (to, from, next) => {
                    const authorize = JSON.parse(localStorage.getItem('authorize'));
                    if(authorize.is_type_account == 1 || authorize.is_type_account == 0){
                        next({ path: '/admin/reviews-period' })
                    }
                    else if(authorize.is_type_account == 2){
                        next({ path: '/admin/employee-reviews' })
                    }else{
                        next({ path: '/admin/list-reviews' })
                    }
                },
                meta : {
                    title: 'Bảng tin tổng quan',
                    breadcrumb : false,
                }
            },
            {
                path: 'reviews-period',
                component: ReviewsPeriod,
                meta : {
                    title: 'Danh sách kỳ đánh giá',
                    breadcrumb : false,
                },
                children: [
                    {
                        path: '',
                        component: ReviewsPeriod_Index,
                        beforeEnter: (to, from, next) => {
                            AccessPermission(['group','root']) ? next() : next({ path: '/errors/401' })
                        },
                        meta : {
                            title: 'Danh sách kỳ đánh giá',
                            breadcrumb : false,
                        }
                    },
                    {
                        path: 'form',
                        component: ReviewsPeriod_Form,
                        beforeEnter: (to, from, next) => {
                            AccessPermission(['group','root']) ? next() : next({ path: '/errors/401' })
                        },
                        meta : {
                            title: 'Thêm mới kỳ đánh giá',
                            breadcrumb : false,
                        }
                    },
                    {
                        path: 'form/:id',
                        component: ReviewsPeriod_Form,
                        beforeEnter: (to, from, next) => {
                            AccessPermission(['group','root']) ? next() : next({ path: '/errors/401' })
                        },
                        props: true,
                        meta : {
                            title: 'Cập nhật kỳ đánh giá',
                            breadcrumb : false,
                        }
                    },
                ]
            },

            {
                path: 'employee-reviews',
                component: EmployeeReviews,
                meta : {
                    title: 'Cá nhân tự đánh giá',
                    breadcrumb : false,
                },
                children: [
                    {
                        path: '',
                        component: EmployeeReviews_Index,
                        beforeEnter: (to, from, next) => {
                            AccessPermission(['tenant']) ? next() : next({ path: '/errors/401' })
                        },
                        meta : {
                            title: 'Cá nhân tự đánh giá',
                            breadcrumb : false,
                        }
                    },
                    {
                        path: 'form',
                        component: EmployeeReviews_Form,
                        beforeEnter: (to, from, next) => {
                            AccessPermission(['tenant']) ? next() : next({ path: '/errors/401' })
                        },
                        meta : {
                            title: 'Thêm mới kỳ đánh giá',
                            breadcrumb : false,
                        }
                    },
                    {
                        path: 'form/:id',
                        component: EmployeeReviews_Form,
                        beforeEnter: (to, from, next) => {
                            AccessPermission(['tenant']) ? next() : next({ path: '/errors/401' })
                        },
                        props: true,
                        meta : {
                            title: 'Cập nhật kỳ đánh giá',
                            breadcrumb : false,
                        }
                    },
                ]
            },

            {
                path: 'list-reviews',
                component: ListReviews,
                meta : {
                    title: 'Danh sách đánh giá',
                    breadcrumb : false,
                },
                
                children: [
                    {
                        path: '',
                        component: ListReviews_Index,
                        beforeEnter: (to, from, next) => {
                            AccessPermission(['approver']) ? next() : next({ path: '/errors/401' })
                        },
                        meta : {
                            title: 'Danh sách đánh giá',
                            breadcrumb : false,
                        }
                    },
                    {
                        path: 'form',
                        component: ListReviews_Form,
                        beforeEnter: (to, from, next) => {
                            AccessPermission(['approver']) ? next() : next({ path: '/errors/401' })
                        },
                        meta : {
                            title: 'Thêm mới kỳ đánh giá',
                            breadcrumb : false,
                        }
                    },
                    {
                        path: 'form/:id',
                        component: ListReviews_Form,
                        beforeEnter: (to, from, next) => {
                            AccessPermission(['approver']) ? next() : next({ path: '/errors/401' })
                        },
                        props: true,
                        meta : {
                            title: 'Cập nhật kỳ đánh giá',
                            breadcrumb : false,
                        }
                    },
                ]
            },

            {
                path: 'settings',
                redirect: '/admin',
                meta : {
                    title: 'Danh sách đánh giá',
                    breadcrumb : false,
                },
                children: [
                    {
                        path: 'accounts-manager',
                        component: AccountsManager,
                        meta : {
                            title: 'Quản lý người dùng',
                            breadcrumb : false,
                        },
                        children: [
                            {
                                path: '',
                                component: AccountsManager_Index,
                                beforeEnter: (to, from, next) => {
                                    AccessPermission(['root','group']) ? next() : next({ path: '/errors/401' })
                                },
                                meta : {
                                    title: 'Quản lý người dùng',
                                    breadcrumb : false,
                                }
                            },
                            {
                                path: 'form',
                                component: AccountsManager_Form,
                                beforeEnter: (to, from, next) => {
                                    AccessPermission(['root','group']) ? next() : next({ path: '/errors/401' })
                                },
                                meta : {
                                    title: 'Thêm mới kỳ đánh giá',
                                    breadcrumb : false,
                                }
                            },
                            {
                                path: 'form/:id',
                                component: AccountsManager_Form,
                                beforeEnter: (to, from, next) => {
                                    AccessPermission(['root','group']) ? next() : next({ path: '/errors/401' })
                                },
                                props: true,
                                meta : {
                                    title: 'Cập nhật kỳ đánh giá',
                                    breadcrumb : false,
                                }
                            },
                        ]
                    },
        
                    {
                        path: 'approval-settings',
                        component: ApprovalSettings,
                        meta : {
                            title: 'Cài đặt phê duyệt',
                            breadcrumb : false,
                        },
                        children: [
                            {
                                path: '',
                                component: ApprovalSettings_Index,
                                beforeEnter: (to, from, next) => {
                                    AccessPermission(['root','group']) ? next() : next({ path: '/errors/401' })
                                },
                                meta : {
                                    title: 'Cài đặt phê duyệt',
                                    breadcrumb : false,
                                }
                            },
                            {
                                path: 'form',
                                component: ApprovalSettings_Form,
                                beforeEnter: (to, from, next) => {
                                    AccessPermission(['root','group']) ? next() : next({ path: '/errors/401' })
                                },
                                meta : {
                                    title: 'Thêm mới kỳ đánh giá',
                                    breadcrumb : false,
                                }
                            },
                            {
                                path: 'form/:id',
                                component: ApprovalSettings_Form,
                                props: route => ({ id: route.query.id }),
                                beforeEnter: (to, from, next) => {
                                    AccessPermission(['root','group']) ? next() : next({ path: '/errors/401' })
                                },
                                meta : {
                                    title: 'Cập nhật kỳ đánh giá',
                                    breadcrumb : false,
                                }
                            },
                        ]
                    },
        
                    {
                        path: 'tenant-settings',
                        component: TenantSettings,
                        meta : {
                            title: 'Cấu hình đơn vị',
                            breadcrumb : false,
                        },
                    },
                ]
            },

            



            {
                path: 'errors',
                component: Err_401,
                children: [
                    {
                        path: '',
                        component: ApprovalSettings_Index,
                        meta : {
                            title: 'Cài đặt phê duyệt',
                            breadcrumb : false,
                        }
                    },
                    {
                        path: '401',
                        component: Err_401,
                    },
                    {
                        path: 'form/:id',
                        component: ApprovalSettings_Form,
                        props: route => ({ id: route.query.id }),
                        meta : {
                            title: 'Cập nhật kỳ đánh giá',
                            breadcrumb : false,
                        }
                    },
                ]
            },

           



            

            
            
            // {
            //     path: 'reports',
            //     children: [
            //         {
            //             path: '',
            //             redirect: '/admin/reports/project',
            //         },
            //         {
            //             path: 'project',
            //             component: Reports_Project,
            //             meta : {
            //                 title: 'Báo cáo dự án',
            //                 breadcrumb : true,
            //             }
            //         },
            //         {
            //             path: 'detail',
            //             component: Reports_Detail,
            //             meta : {
            //                 title: 'Báo cáo chi tiết',
            //                 breadcrumb : true,
            //             }
            //         },
                    
            //     ]
            // },
        ]
    },

    {
        path: '/errors',
        component: Err_401,
        children: [
            {
                path: '',
                component: ApprovalSettings_Index,
                meta : {
                    title: 'Cài đặt phê duyệt',
                    breadcrumb : false,
                }
            },
            {
                path: '401',
                component: Err_401,
            },
            {
                path: 'form/:id',
                component: ApprovalSettings_Form,
                props: route => ({ id: route.query.id }),
                meta : {
                    title: 'Cập nhật kỳ đánh giá',
                    breadcrumb : false,
                }
            },
        ]
    },

    // {
    //     path: '/:catchAll(.*)',
    //     component: Error_404,
    //     meta: {
    //       title: 'Trang không tồn tại'
    //     }
    // }

];

const router = createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes,
});

var authorize = JSON.parse(localStorage.getItem('authorize'))
const AccessPermission = (roles) => {
    if (authorize) {
        return roles.some(role => {
            switch (role) {
                case 'root':
                    return authorize.is_type_account === 0;
                case 'group':
                    return authorize.is_type_account === 1;
                case 'tenant':
                    return authorize.is_type_account === 2;
                case 'approver':
                    return authorize.is_type_account === 3;
                default:
                    return false;
            }
        });
    }
    return false;
};



router.beforeEach(async (to, from) => {
    if(to.path != "/"){
        const authorize = JSON.parse(localStorage.getItem('authorize'))
        if (authorize || authorize === 0) {
            let token = authorize.token
            if (token || token === 0) {
                const params = {}
                const config = {headers: {Authorization: `Bearer ${token}`}};
                axios.post(API_USER_PATH + '/auth/check-authentication',params,config)
                .then(res => {return true;})
                .catch(err => {
                    localStorage.clear();
                    sessionStorage.clear();
                })
            }
        }else{router.replace('/')}

        // let authorize = await JSON.parse(localStorage.getItem('authorize'));
        // let current_user = await JSON.parse(localStorage.getItem('current_user'));
        // const params = {
        //     item : current_user.username
        // }
        // const config = {headers: {Authorization: `Bearer ${authorize.token}`}};
        // axios.post(API_USER_PATH + '/permission/get-list-permission-by-user',params,config)
        // .then(async res => {
        //     let roles = await EnCode(res.data.data)
        //     await localStorage.setItem('user_role',roles)
        // })
        // .catch(err => {
        //     console.error(err); 
        // })
    }
})


export default router;
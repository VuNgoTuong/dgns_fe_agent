<template lang="">
    <!-- Modal -->
    <div class="modal fade" id="UpdateAccount_Modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content p-3 shadow-lg rounded-4 border-top border-start-0 border-end-0 border-bottom-0 border-5" style="border-color: #0674d8!important;">
                <div class="modal-body p-4">
                    <div class="d-flex justify-content-center mb-4 position-absolute start-0 w-100" style="top: -50px">
                        <IconPencil :size="64" stroke-width="2" class="d-flex bg-gradient-primary shadow-primary rounded-circle" style="padding:12px" @click="$refs.Delete_Modal._Init()" />
                    </div>
                    <div class="mb-3">
                        <h2 class="modal-title fs-5 fw-bold flex-grow-1" >Cập nhật người dùng</h2>
                        <p>Cập nhật dựa trên dữ liệu được nhập vào</p>
                    </div>

                    <div class="row">
                        <div class="col-lg-6 mb-3">
                            <div class="d-flex flex-column">
                                <label class="fw-normal text-nowrap w-25 d-flex align-items-center gap-1 label-require">
                                    <div class="d-flex">
                                        <IconUser :size="16" stroke-width="1.5" class="" />
                                    </div>
                                    <span>Mã nhân viên:</span>
                                </label>
                                <el-input v-model="data.employee_code" placeholder="Nhập mã nhân viên..." />
                            </div>
                        </div>
                        <div class="col-lg-6 mb-3">
                            <div class="d-flex flex-column">
                                <label class="fw-normal text-nowrap w-25 d-flex align-items-center gap-1 label-require">
                                    <div class="d-flex">
                                        <IconUser :size="16" stroke-width="1.5" class="" />
                                    </div>
                                    <span>Tên nhân viên:</span>
                                </label>
                                <el-input v-model="data.fullname" placeholder="Nhập tên nhân viên..." />
                            </div>
                        </div>
                        <div class="col-lg-6 mb-3">
                            <div class="d-flex flex-column">
                                <label class="fw-normal text-nowrap w-25 d-flex align-items-center gap-1 label-require">
                                    <div class="d-flex"><IconMail :size="16" stroke-width="1.5" class="" /></div>
                                    <span>Email:</span>
                                </label>
                                <el-input v-model="data.email" placeholder="Nhập email nhân viên..." />
                            </div>
                        </div>
                        <div class="col-lg-6 mb-3">
                            <div class="d-flex flex-column">
                                <label class="fw-normal text-nowrap w-25 d-flex align-items-center gap-1">
                                    <div class="d-flex"><IconBadges :size="16" stroke-width="1.5" class="" /></div>
                                    <span>Chức vụ:</span>
                                </label>
                                <el-input v-model="data.chucVu" placeholder="Nhập chức vụ nhân viên..." />
                            </div>
                        </div>
                        <div class="col-lg-6 mb-3">
                            <div class="d-flex flex-column">
                                <label class="fw-normal text-nowrap w-25 d-flex align-items-center gap-1">
                                    <div class="d-flex"><IconBuilding :size="16" stroke-width="1.5" class="" /></div>
                                    <span>Chức danh:</span>
                                </label>
                                <el-input v-model="data.chucDanh" placeholder="Nhập chức danh nhân viên..." />
                            </div>
                        </div>
                        <div class="col-lg-6 mb-3">
                            <div class="d-flex flex-column">
                                <label class="fw-normal text-nowrap w-25 d-flex align-items-center gap-1">
                                    <div class="d-flex"><IconBuilding :size="16" stroke-width="1.5" class="" /></div>
                                    <span>Ngày vào:</span>
                                </label>
                                <el-date-picker
                                    v-model="data.ngayVao"
                                    type="date"
                                    placeholder="Chọn ngày vào của nhân viên..."
                                    class="w-100"
                                />
                            </div>
                        </div>
                        <div class="col-lg-6 mb-3">
                            <div class="d-flex flex-column">
                                <label class="fw-normal text-nowrap w-25 d-flex align-items-center gap-1  label-require">
                                    <div class="d-flex"><IconBuilding :size="16" stroke-width="1.5" class="" /></div>
                                    <span>Trực thuộc phòng ban:</span>
                                </label>
                                <el-tree-select
                                    class="w-100"
                                    v-model="data.tenant_id"
                                    :data="tenant"
                                    :render-after-expand="false"
                                    filterable
                                    placeholder="Chọn đơn vị trực thuộc..."
                                />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="d-flex flex-column">
                                <label class="fw-normal text-nowrap w-25 d-flex align-items-center gap-1">
                                    <div class="d-flex"><IconBuilding :size="16" stroke-width="1.5" class="" /></div>
                                    <span>Mô tả:</span>
                                </label>
                                <el-input v-model="data.description" placeholder="Nhập mô tả..." />
                            </div>
                        </div>
                    </div>

                    <div class="d-flex gap-3 mt-5">
                        <button type="button" class="btn btn-outline-light w-50 text-muted" data-bs-dismiss="modal">Hủy bỏ</button>
                        <button type="button" class="btn bg-gradient-primary border-0 text-white w-50 btn-hvr-primary" @click="UpdateData">Cập nhật người dùng</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Icons from '@Admin/common/js/Icons';
import axios from 'axios'
import {ShowToast} from '@Helpers/Notify.js'
const PATH_API_DATA = import.meta.env.VITE_API_PATH_DATA;
const PATH_API_USER = import.meta.env.VITE_API_PATH_USER;
var modal
export default {

    data(){
        return {
            authorize : null,
            init : null,
            data : {

                is_type_account: 1,
                is_active: true,
            },
            tenant : [],
            users : [],
        }
    },

    mounted(){
        modal = new bootstrap.Modal('#UpdateAccount_Modal');
    },

    methods : {
        async _Init(value){
            value ? this.init = value : false
            const authorize = localStorage.getItem('authorize');
            this.authorize = await JSON.parse(authorize)
            modal.show()
            // const current_user = JSON.parse(localStorage.getItem('current_user'));
            // this.current_user = current_user;
            await this.GetUserById()
            await this.GetAllTenant()
            await this.GetAllUser()            
        },

        GetUserById(){
            const params = {
                item: this.init.id
            }
            let config = {headers: {Authorization: `Bearer ${this.authorize.token}`}}
            axios.post(PATH_API_USER + '/user/get-by-id',params,config)
            .then(async res =>{
                console.log(res)
                this.data = res.data.data
                // let data = res.data.data.items
                // this.users = data.map(items => {
                //     return items = {
                //         label : items.employee_code + ' | ' + items.fullname,
                //         value : items.id
                //     }
                // })
            })
            .catch(err => {
                ShowToast({status_code : 401, message : 'Không lấy được thông tin người dùng'})
                console.error(err); 
            })
        },

        GetAllUser(){
            const params = {}
            let config = {headers: {Authorization: `Bearer ${this.authorize.token}`}}
            axios.post(PATH_API_USER + '/user/get-all',params,config)
            .then(async res =>{
                let data = res.data.data.items
                this.users = data.map(items => {
                    return items = {
                        label : items.employee_code + ' | ' + items.fullname,
                        value : items.id
                    }
                })
            })
            .catch(err => {
                // ShowToast({status_code : 401, message : 'Không lấy được danh sách đơn vị'})
                console.error(err); 
            })
        },

        GetAllTenant(){
            const params = {
                page            : 0,
                limit           : 0,
                sorts           : [],
                search_list     : [],
                flag            : true
            }
            let config = {headers: {Authorization: `Bearer ${this.authorize.token}`}}
            axios.post(PATH_API_USER + '/tenant/get-all',params,config)
            .then(async res =>{
                var data = await res.data.data.items
                this.tenant = await this.processWaterfall(data, "00000000-0000-0000-0000-000000000000");
            })
            .catch(err => {
                // ShowToast({status_code : 401, message : 'Không lấy được danh sách đơn vị'})
                console.error(err); 
            })
        },
        processWaterfall(arr, parentId) {
            const filteredItems = arr.filter(item => item.tenant_parent_id === parentId);
            const result = filteredItems.map((item,key) => {
                const children = this.processWaterfall(arr, item.id);
                return { 
                    // ...item,
                    value : item.id,
                    label : item.tenant_name,
                    disabled : item.tenant_parent_id === "00000000-0000-0000-0000-000000000000" ? true : false,
                    children 
                };
            });
            return result;
        },
        UpdateData(){
            const params = this.data
            console.log(params)
            let config = {headers: {Authorization: `Bearer ${this.authorize.token}`}}
            axios.post(PATH_API_USER + '/user/update',params,config)
            .then(async res =>{
                modal.hide()
                this.$emit('ReloadData')
                ShowToast({status_code : 200, message : 'Cập nhật thành công'})
            })
            .catch(err => {
                ShowToast({status_code : 401, message : 'Cập nhật thất bại'})
                console.error(err); 
            })
        }
    },
    components : {...Icons}
}
</script>
<style lang="">
    
</style>
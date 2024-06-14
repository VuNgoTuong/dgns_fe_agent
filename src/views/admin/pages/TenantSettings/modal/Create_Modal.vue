<template lang="">
    <!-- Modal -->
    <div class="modal fade" id="CreateTenant_Modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content p-3 shadow-lg rounded-4 border-top border-start-0 border-end-0 border-bottom-0 border-5" style="border-color: #4cc4b3!important;">
                <div class="modal-body p-4">
                    <div class="d-flex justify-content-center mb-4 position-absolute start-0 w-100" style="top: -50px">
                        <IconPlus :size="64" stroke-width="2" class="d-flex bg-gradient-success shadow-success rounded-circle cursor-pointer" style="padding:12px" @click="$refs.Delete_Modal._Init()" />
                    </div>
                    <div class="mb-3">
                        <h2 class="modal-title fs-5 fw-bold flex-grow-1" >Tạo đơn vị mới</h2>
                        <p>Tạo đơn vị mới dựa trên dữ liệu được nhập vào</p>
                    </div>

                    <div class="d-flex flex-column gap-4 mb-5">
                        <div class="d-flex flex-column">
                            <label class="fw-normal text-nowrap w-25 d-flex align-items-center gap-1 label-require">
                                <div class="d-flex"><IconBuilding :size="16" stroke-width="1.5" class="" /></div>
                                <span>Mã đơn vị:</span>
                            </label>
                            <el-input v-model="data.tenant_code" placeholder="Nhập mã đơn vị..." />
                        </div>

                        <div class="d-flex flex-column">
                            <label class="fw-normal text-nowrap w-25 d-flex align-items-center gap-1 label-require">
                                <div class="d-flex"><IconId :size="16" stroke-width="1.5" class="" /></div>
                                <span>Tên đơn vị:</span>
                            </label>
                            <el-input v-model="data.tenant_name" placeholder="Nhập tên đơn vị..." />
                        </div>
                        <div class="d-flex flex-column">
                            <label class="fw-normal text-nowrap w-25 d-flex align-items-center gap-1">
                                <div class="d-flex"><IconBuilding :size="16" stroke-width="1.5" class="" /></div>
                                <span>Trực thuộc đơn vị:</span>
                            </label>
                            <el-tree-select
                                class="w-100"
                                v-model="data.tenant_parent_id"
                                :data="tenant"
                                :render-after-expand="false"
                                show-checkbox
                                :check-strictly="true"
                                filterable
                                placeholder="Chọn đơn vị trực thuộc..."
                            />
                        </div>
                    </div>

                    <div class="d-flex gap-3">
                        <button type="button" class="btn btn-outline-light w-50 text-muted" data-bs-dismiss="modal" @click="ClearData">Hủy bỏ</button>
                        <button type="button" class="btn bg-gradient-success border-0 text-white w-50 btn-hvr-success" @click="CreateData">Tạo đơn vị mới</button>
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
            init : null,
            data : {
                is_active: true,
            },
            tenant : [],
        }
    },

    mounted(){
        modal = new bootstrap.Modal('#CreateTenant_Modal');
    },

    methods : {
        async _Init(value){
            value ? this.init = value : false
            const authorize = localStorage.getItem('authorize');
            this.authorize = await JSON.parse(authorize)
            modal.show()
            // const current_user = JSON.parse(localStorage.getItem('current_user'));
            // this.current_user = current_user;
            await this.GetAllTenant()
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
                    children 
                };
            });
            return result;
        },
        CreateData(){
            const params = this.data
            console.log(params)
            let config = {headers: {Authorization: `Bearer ${this.authorize.token}`}}
            axios.post(PATH_API_USER + '/tenant/create',params,config)
            .then(async res =>{
                modal.hide()
                this.$emit('ReloadData')
                ShowToast({status_code : 200, message : 'Tạo đơn vị thành công'})
            })
            .catch(err => {
                ShowToast({status_code : 401, message : 'Tạo đơn vị thất bại'})
                console.error(err); 
            })
        },
        ClearData(){this.data = {}}
    },
    components : {...Icons}
}
</script>
<style lang="">
    
</style>
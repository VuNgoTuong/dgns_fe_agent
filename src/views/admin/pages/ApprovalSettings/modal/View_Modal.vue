<template lang="">
    <!-- Modal -->
    <div class="modal fade" id="ViewApprover_Modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-lg modal-dialog-centered">
            <div class="modal-content p-3 shadow-lg rounded-4 border-top border-start-0 border-end-0 border-bottom-0 border-5" style="border-color: #0674d8!important;">
                <div class="modal-body p-4">
                    <div class="d-flex">
                        <div class="flex-grow-1 align-items-top">
                            <h2 class="modal-title fs-5 fw-bold flex-grow-1">Danh sách phê duyệt</h2>
                            <p>Danh sách lãnh đạo phê duyệt dựa theo đơn vị / phòng ban</p>
                        </div>
                        <div>
                            <IconX :size="28" stroke-width="2" class="d-flex bg-gradient-primary shadow-primary rounded-circle cursor-pointer p-1" data-bs-dismiss="modal"/>
                        </div>
                    </div>
                    <el-table
                        :data="data"
                        style="width: 100%;"
                        row-key="id"
                        class="table-striped"
                        :header-row-style="{color:'#242934'}"
                        v-if="data"
                        size="small"
                        :border="true"
                        :default-expand-all="true"
                    >
                        <el-table-column prop="name" label="Tên đơn vị" label-width="500px"/>
                        <el-table-column align="center" prop="approver" label="Người phê duyệt" width="250px"/>
                    </el-table>
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
            data : null,
            tenant : [],
            users : [],
        }
    },

    mounted(){
        modal = new bootstrap.Modal('#ViewApprover_Modal');
    },

    methods : {
        async _Init(value){
            value ? this.init = value : false
            const authorize = localStorage.getItem('authorize');
            this.authorize = await JSON.parse(authorize)
            await this.GetAllTenant()
            // await this.GetAllUser()
            // await this.GetApproverById()
            modal.show()
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
            axios.post(PATH_API_USER + '/tenant/get-all-with-user-approver',params,config)
            .then(async res =>{
                var data = await res.data.data.items
                this.data = await this.processWaterfall(data, "00000000-0000-0000-0000-000000000000");
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
                    id : item.id,
                    date : item.create_time,
                    name : item.tenant_name,
                    address : item.modify_by,
                    approver : item.appprover_Name,
                    children 
                };
            });
            return result;
        },
    },
    components : {...Icons}
}
</script>
<style lang="scss">
    .table-dropdown-header{color:#242934}
</style>
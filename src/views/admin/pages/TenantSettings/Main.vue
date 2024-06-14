<template lang="">

    <section>
        <portal to="function-button">
            <li @click="$refs.Create_Modal._Init()">
                <a class="cursor-pointer">
                    <IconPlus :size="32" stroke-width="2"/>
                </a>
            </li>
        </portal>

        <Create_Modal ref="Create_Modal" @ReloadData="GetAllTenant"></Create_Modal>
        <Update_Modal ref="Update_Modal" @ReloadData="GetAllTenant"></Update_Modal>
        <Delete_Modal ref="Delete_Modal" @ReloadData="GetAllTenant"></Delete_Modal>

        <div class="card">
            <div class="card-body p-0">
                <el-table
                    :data="data"
                    style="width: 100%;"
                    row-key="id"
                >
                    <el-table-column prop="name" label="Tên đơn vị" />
                    <el-table-column align="right" label="...">
                        <template #default="scope">
                            <div class="d-flex gap-1 justify-content-end py-1">
                                <IconPencil :size="24" stroke-width="2" class="d-flex bg-gradient-primary shadow-primary p-1 rounded-3 cursor-pointer" @click="$refs.Update_Modal._Init({id:scope.row.id})" />
                                <IconX :size="24" stroke-width="2" class="d-flex bg-gradient-danger shadow-danger p-1 rounded-3 cursor-pointer" @click="$refs.Delete_Modal._Init({id:scope.row.id})" />
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </section>
</template>
<script>
import Icons from '@Admin/common/js/Icons';

import Create_Modal from './modal/Create_Modal.vue';
import Update_Modal from './modal/Update_Modal.vue';
import Delete_Modal from './modal/Delete_Modal.vue';


import axios from 'axios'
const PATH_API_DATA = import.meta.env.VITE_API_PATH_DATA;
const PATH_API_USER = import.meta.env.VITE_API_PATH_USER;

export default {
    data(){
        return {
            authorize : null,
            data : [],
        }
    },


    mounted(){
        this._Init()
    },
    methods : {
        async _Init(){
            const authorize = localStorage.getItem('authorize');
            this.authorize = await JSON.parse(authorize)
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
                    children 
                };
            });
            return result;
        },

    },
    components : {...Icons,Create_Modal,Update_Modal,Delete_Modal}
}
</script>
<style lang="">
    
</style>
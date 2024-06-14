<template lang="">
    <div>
        <div class="d-flex flex-column gap-1">
            <label class="text-nowrap label text-muted">Đơn vị / phòng ban :</label>
            <el-tree-select
                class="w-100"
                v-model="selected"
                @change="ChangeFilter"
                :data="tenant"
                :render-after-expand="false"
                show-checkbox
                :check-strictly="true"
                filterable
                placeholder="Đơn vị / phòng ban thực hiện..."
                size="small"
            />
        </div>
    </div>
</template>
<script>

import Icons from '@Admin/common/js/Icons';
import axios from 'axios'
import {ShowToast} from '@Helpers/Notify.js'
const PATH_API_DATA = import.meta.env.VITE_API_PATH_DATA;
const PATH_API_USER = import.meta.env.VITE_API_PATH_USER;

export default {
    data(){
        return {
            authorize : null,
            tenant : [],
            selected : [],
            search_value : ""
        }
    },
    created(){
        this._Init()
    },
    methods : {
        async _Init(){
            const authorize = localStorage.getItem('authorize');
            this.authorize = await JSON.parse(authorize)
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

        async ChangeFilter(){
            let value = await this.selected.toString()
            this.$emit('FilterData',{name_field:'tenant_id',search_value : value});
        },
        RemoveFilter(){
            this.search_value = ""
        }
    }
}
</script>
<style lang="">
    
</style>
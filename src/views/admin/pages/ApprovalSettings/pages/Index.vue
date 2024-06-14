<template lang="">
    <section>
        <Delete_Modal ref="Delete_Modal" @ReloadData="GetAllData"></Delete_Modal>
        <Create_Modal ref="Create_Modal" @ReloadData="GetAllData"></Create_Modal>
        <Update_Modal ref="Update_Modal" @ReloadData="GetAllData"></Update_Modal>
        <View_Modal ref="View_Modal" @ReloadData="GetAllData"></View_Modal>

        <portal to="function-button">

            <li @click="$refs.View_Modal._Init()">
                <a class="cursor-pointer">
                    <IconChecklist style="color:#00529c" :size="32" stroke-width="2"/>
                </a>
            </li>

            <li @click="$refs.Create_Modal._Init()">
                <a class="cursor-pointer">
                    <IconPlus style="color:#00529c" :size="32" stroke-width="2"/>
                </a>
            </li>
        </portal>

        <Filters 
            :AdvancedFilter="true" 
            @handleFilter="setDataFilter" 
            ref="Filter" 
            :date_time="true"
            :ApplyFilter="['tenant','approver']"
        >
        </Filters>

        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="table-responsive">
                        <table class="table table-sm align-middle">
                            <thead>
                                <tr>
                                    <th scope="col" class="text-center">STT</th>
                                    <th scope="col">Đơn vị</th>
                                    <th scope="col">Phòng ban</th>
                                    <th scope="col">Người phê duyệt</th>
                                    <th scope="col">
                                        <div class="d-flex align-items-center">
                                            <IconDots :size="20" stroke-width="2" />
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in data" :key="index">
                                    <th scope="row" class="text-center">{{index + 1}}</th>
                                    <td>{{item.tenant_name}}</td>
                                    <td>{{item.tenPhongBan}}</td>
                                    <td>{{item.tenNhanvien}}</td>
                                    <td>
                                        <div class="d-flex gap-1">
                                            <IconPencil :size="24" stroke-width="2" class="d-flex bg-gradient-primary shadow-primary p-1 rounded-3 cursor-pointer" @click="$refs.Update_Modal._Init({id:item.id})" />
                                            <IconX :size="24" stroke-width="2" class="d-flex bg-gradient-danger shadow-danger p-1 rounded-3 cursor-pointer" @click="$refs.Delete_Modal._Init({id:item.id})" />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="p-3 d-flex align-items-center">
                            <small class="text-nowrap flex-grow-1">Hiển thị {{paginate.display}} trên tổng {{paginate.total}} Kết quả</small>
                            <el-pagination 
                            background 
                            :page-sizes="[5, 10, 50, 100]"
                            layout="sizes, prev, pager, next" 
                            :total="paginate.total"
                            @size-change="PaginationSizeChange"
                            @current-change="Pagination" 
                            small />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import Icons from '@Admin/common/js/Icons';
import axios from 'axios'
const PATH_API_DATA = import.meta.env.VITE_API_PATH_DATA;
const PATH_API_USER = import.meta.env.VITE_API_PATH_USER;
import Delete_Modal from '../modal/Delete_Modal.vue';
import Create_Modal from '../modal/Create_Modal.vue';
import Update_Modal from '../modal/Update_Modal.vue';
import View_Modal from '../modal/View_Modal.vue';

import Filters from '@Admin/components/common/Filters.vue'
export default {

    data(){
        return {
            authorize : [],
            filter : {
                request : {
                    start_time : null,
                    end_time : null,
                },
                search_list : []
            },
            paginate : {
                total : 0,
                page : 1,
                limit : 10,
                display : 1,
            },
            data : [],
        }
    },
    async created(){
        await this._Init()
    },
    components : {...Icons,Filters,Delete_Modal,Create_Modal,Update_Modal,View_Modal},
    methods : {

        async _Init(value){
            value ? this.init = value : false
            const authorize = localStorage.getItem('authorize');
            this.authorize = await JSON.parse(authorize)
            await this.GetAllData()      
        },
        async setDataFilter(e){
            this.filter = await e
            this.GetAllData()
        },
        Pagination(current_page){
            this.paginate.page = current_page
            this.GetAllData()
        },
        PaginationSizeChange(size){
            this.paginate.limit = size
            this.GetAllData()
        },
        GetAllData(){
            const params = {
                page            : 0,
                limit           : 0,
                sorts           : [],
                search_list     : [],
                flag            : true
            }
            let config = {headers: {Authorization: `Bearer ${this.authorize.token}`}}
            axios.post(PATH_API_USER + '/user-approve/get-all-user-approve-by-tenant',params,config)
            .then(res => {
                this.paginate.total = res.data.data.total
                this.paginate.display = res.data.data.items.length
                this.data = res.data.data.items
            })
            .catch(err => {
                console.error(err); 
            })
        }
    }
}
</script>
<style lang="">
    
</style>